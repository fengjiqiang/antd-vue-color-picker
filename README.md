# antd-vue-color-picker

## 使用

```js
import { ColorPicker } from '@ethafeng/antd-color-picker'

<color-picker v-model="currentcolor" :predefine="predefineColors" @change="selectColorPicker" />
```

## 文档

### Attributes

| 参数          | 说明                  | 类型    | 可选值                                                       | 默认值                                                |
| ------------- | --------------------- | ------- | ------------------------------------------------------------ | ----------------------------------------------------- |
| value/v-model | 绑定值                | string  | —                                                            | —                                                     |
| size          | 尺寸                  | string  | large/default/small/xsmall                                          | xsmall                                               |
| show-alpha    | 是否支持透明度选择    | boolean | —                                                            | false                                                 |
| color-format  | 写入v-model的颜色格式 | string  | hsl/hsv/hex/rgb                                              | hex（show-alpha 为 false）/ rgb（show-alpha 为 true） |
| predefine     | 预定义颜色            | array   | —                                                            | —                                                     |
| placement     | 颜色选择器弹出位置    | string  | `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | top                                                   |

### Events

| 事件名称      | 说明                               | 回调参数         |
| ------------- | ---------------------------------- | ---------------- |
| change        | 当绑定值变化时触发                 | 当前值           |
| active-change | 面板中当前显示的颜色发生改变时触发 | 当前显示的颜色值 |
