<!--
 * @Author: fengjiqiang
 * @Date: 2024-07-19 15:54:57
 * @LastEditors: fengjiqiang
 * @LastEditTime: 2024-07-19 16:06:17
 * @FilePath: \antd-vue-color-picker\src\main.vue
 * @Description: 
-->
<template>
  <a-popover
    v-model:visible="showPicker"
    :getPopupContainer="getPopupContainer"
    trigger="click"
    class="ant3-color-picker"
    :class="[colorSize ? 'ant3-color-picker--' + colorSize : '']"
    v-bind="$attrs"
  >
    <template #content>
      <div class="ant-color-dropdown__main-wrapper">
        <sv-panel ref="svPanel" :color="color" />
        <hue-slider ref="hue" class="hue-slider" :color="color" vertical />
      </div>
      <AlphaSlider v-if="showAlpha" ref="alpha" :color="color" />
      <preDefine v-if="predefine.length" ref="predefine" :color="color" :colors="predefine" />
      <div class="ant-color-dropdown__btns">
        <span class="ant-color-dropdown__value">
          <a-input v-model:value="customInput" size="small" @pressEnter="handleConfirm" @blur="handleConfirm" />
        </span>
        <div class="ant-dropdown__btns">
          <a-button size="small" class="ant-cancel-button" @click="clear">取消</a-button>
          <a-button type="primary" size="small" @click="confirmValue">确定</a-button>
        </div>
      </div>
    </template>
    <div class="ant-color-picker__trigger" @click="handleTrigger">
      <span class="el-color-picker__color" :class="{ 'is-alpha': showAlpha }">
        <span
          class="el-color-picker__color-inner"
          :style="{
            backgroundColor: displayedColor
          }"
        >
          <DownOutlined v-show="modelValue || showPanelColor" style="color: #909399" />
          <CloseOutlined v-if="!modelValue && !showPanelColor" style="color: #909399" />
        </span>
      </span>
    </div>
  </a-popover>
</template>
<script lang="ts" setup>
import { reactive, computed, provide, ref, watch, nextTick, onMounted } from 'vue'
import type { PropType } from 'vue'
import { DownOutlined, CloseOutlined } from '@ant-design/icons-vue'
import { debounce } from 'lodash-es'
import HueSlider from './components/hueSlider.vue'
import SvPanel from './components/svPanel.vue'
import AlphaSlider from './components/alphaSlider.vue'
import preDefine from './components/preDefine.vue'
import Color from './lib/color'
import { isValidComponentSize } from './lib/validators'
import { ComponentSize } from './type/types'
import { IUseOptions, OPTIONS_KEY } from './useOptions'

const props = defineProps({
  modelValue: {
    type: String
  },
  showAlpha: {
    type: Boolean,
    default: false
  },
  colorFormat: {
    type: String,
    default: ''
  },
  popperClass: {
    type: String
  },
  predefine: {
    type: Array,
    default: () => []
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String as PropType<ComponentSize>,
    default: 'xsmall',
    validator: isValidComponentSize
  }
})

const emit = defineEmits(['active-change', 'change', 'update:modelValue'])

// 区分popover的关闭是通过点击body关闭的还是通过按钮、输入框关闭的
const hasClickBtn = ref<boolean>(false)
const hue = ref<any>(null)
const svPanel = ref<any>(null)
const alpha = ref<any>(null)
// data
const color = reactive(
  new Color({
    enableAlpha: props.showAlpha,
    format: props.colorFormat
  })
)
const showPicker = ref(false)
const showPanelColor = ref(false)
const customInput = ref('')
// computed
const displayedColor = computed(() => {
  if (!props.modelValue && !showPanelColor.value) {
    return 'transparent'
  }
  return displayedRgb(color, props.showAlpha)
})
const colorSize = computed(() => {
  return props.size
})
const colorDisabled = computed(() => {
  return props.disabled
})
const currentColor = computed(() => {
  return !props.modelValue && !showPanelColor.value ? '' : color.value
})
// watch
watch(
  () => props.modelValue,
  newVal => {
    if (!newVal) {
      showPanelColor.value = false
    } else if (newVal && newVal !== color.value) {
      color.fromString(newVal)
    }
  }
)
watch(
  () => currentColor.value,
  val => {
    customInput.value = val
    emit('active-change', val)
  }
)
watch(
  () => color.value,
  () => {
    if (!props.modelValue && !showPanelColor.value) {
      showPanelColor.value = true
    }
  }
)
watch(
  () => showPicker.value,
  newVal => {
    if (newVal) {
      hasClickBtn.value = false
    } else {
      if (!hasClickBtn.value) {
        hide()
      }
    }
    nextTick(() => {
      hue.value?.update()
      svPanel.value?.update()
      alpha.value?.update()
    })
  }
)
// methods
const displayedRgb = (color, showAlpha) => {
  if (!(color instanceof Color)) {
    throw Error('color should be instance of _color Class')
  }
  const { r, g, b } = color.toRgb()
  return showAlpha ? `rgba(${r}, ${g}, ${b}, ${color.get('alpha') / 100})` : `rgb(${r}, ${g}, ${b})`
}
const setShowPicker = value => {
  showPicker.value = value
}
const debounceSetShowPicker = debounce(setShowPicker, 50)
const hide = () => {
  debounceSetShowPicker(false)
  resetColor()
}
const resetColor = () => {
  nextTick(() => {
    if (props.modelValue) {
      color.fromString(props.modelValue)
    } else {
      showPanelColor.value = false
    }
  })
}
const handleTrigger = () => {
  if (colorDisabled.value) return
  debounceSetShowPicker(!showPicker.value)
}
const handleConfirm = () => {
  // hasClickBtn.value = true
  color.fromString(customInput.value)
}
const confirmValue = () => {
  hasClickBtn.value = true
  const value = color.value
  emit('update:modelValue', value)
  emit('change', value)
  debounceSetShowPicker(false)
  nextTick(() => {
    const newColor = new Color({
      enableAlpha: props.showAlpha,
      format: props.colorFormat
    })
    newColor.fromString(props.modelValue)
    if (!color.compare(newColor)) {
      resetColor()
    }
  })
  showPicker.value = false
}
const clear = () => {
  hasClickBtn.value = true
  debounceSetShowPicker(false)
  emit('update:modelValue', null)
  emit('change', null)
  resetColor()
  showPicker.value = false
}

const getPopupContainer = (triggerNode: HTMLElement) => {
  return triggerNode.parentElement
}

onMounted(() => {
  if (props.modelValue) {
    color.fromString(props.modelValue)
    customInput.value = currentColor.value
  }
})
provide<IUseOptions>(OPTIONS_KEY, {
  currentColor
})
</script>
<style lang="scss" scoped>
// default 大小
.ant3-color-picker {
  display: inline-block;
  position: relative;
  width: 36px;
  height: 36px;
  box-sizing: border-box;
  padding: 4px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  font-size: 0;
  cursor: pointer;
  &.is-disabled {
    color: #c0c4cc;
    cursor: not-allowed;
    background-color: #ffffff;
  }
  .el-color-picker__color {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 2px;
    border: 1px solid #909399;
    text-align: center;
    &.is-alpha {
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);
    }
  }
  .el-color-picker__color-inner {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    font-size: 12px;
    line-height: 18px;
  }
}
.ant-color-dropdown__main-wrapper {
  display: flex;
  height: 180px;
  margin-bottom: 8px;
}
.ant-color-dropdown__btns {
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
  text-align: right;
}
.ant-color-dropdown__value {
  font-size: 12px;
  color: #000000;
}
.ant-cancel-button {
  margin-right: 6px;
}

// large 大小
.ant3-color-picker--large {
  width: 40px;
  height: 40px;
}

//small 大小
.ant3-color-picker--small {
  width: 32px;
  height: 32px;
}
//xsmall 大小
.ant3-color-picker--xsmall {
  border: none;
  margin: 0px 7px;
  width: 18px;
  height: 18px;
  padding: 0px;
}
</style>
