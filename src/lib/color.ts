import { hasOwn } from '@vue/shared'
import { Options } from '../type/types'

const hsv2hsl = function (hue: number, sat: number, val: number) {
  return [hue, (sat * val) / ((hue = (2 - sat) * val) < 1 ? hue : 2 - hue) || 0, hue / 2]
}

const isOnePointZero = function (n: unknown) {
  return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1
}

const isPercentage = function (n: unknown) {
  return typeof n === 'string' && n.indexOf('%') !== -1
}

const bound01 = function (value: number | string, max: number | string) {
  if (isOnePointZero(value)) value = '100%'

  const processPercent = isPercentage(value)
  value = Math.min(max as number, Math.max(0, parseFloat(`${value}`)))

  if (processPercent) {
    value = parseInt(`${value * (max as number)}`, 10) / 100
  }

  if (Math.abs(value - (max as number)) < 0.000001) {
    return 1
  }

  return (value % (max as number)) / parseFloat(max as string)
}

const INT_HEX_MAP = { 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F' }

const hexOne = function (value: number) {
  value = Math.min(Math.round(value), 255)
  const high = Math.floor(value / 16)
  const low = value % 16
  return `${INT_HEX_MAP[high] || high}${INT_HEX_MAP[low] || low}`
}

const toHex = function ({ r, g, b }) {
  if (isNaN(r) || isNaN(g) || isNaN(b)) return ''

  return `#${hexOne(r)}${hexOne(g)}${hexOne(b)}`
}

const HEX_INT_MAP = { A: 10, B: 11, C: 12, D: 13, E: 14, F: 15 }

const parseHexChannel = function (hex: string) {
  if (hex.length === 2) {
    return (HEX_INT_MAP[hex[0].toUpperCase()] || +hex[0]) * 16 + (HEX_INT_MAP[hex[1].toUpperCase()] || +hex[1])
  }

  return HEX_INT_MAP[hex[1].toUpperCase()] || +hex[1]
}

const hsl2hsv = function (hue: number, sat: number, light: number) {
  sat = sat / 100
  light = light / 100
  let smin = sat
  const lmin = Math.max(light, 0.01)
  // let sv
  // let v

  light *= 2
  sat *= light <= 1 ? light : 2 - light
  smin *= lmin <= 1 ? lmin : 2 - lmin
  const v = (light + sat) / 2
  const sv = light === 0 ? (2 * smin) / (lmin + smin) : (2 * sat) / (light + sat)

  return {
    h: hue,
    s: sv * 100,
    v: v * 100
  }
}

const rgb2hsv = function (r, g, b) {
  r = bound01(r, 255)
  g = bound01(g, 255)
  b = bound01(b, 255)

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h
  const v = max

  const d = max - min
  const s = max === 0 ? 0 : d / max

  if (max === min) {
    h = 0 // achromatic
  } else {
    switch (max) {
      case r: {
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      }
      case g: {
        h = (b - r) / d + 2
        break
      }
      case b: {
        h = (r - g) / d + 4
        break
      }
    }
    h /= 6
  }

  return { h: h * 360, s: s * 100, v: v * 100 }
}

const hsv2rgb = function (h, s, v) {
  h = bound01(h, 360) * 6
  s = bound01(s, 100)
  v = bound01(v, 100)

  const i = Math.floor(h)
  const f = h - i
  const p = v * (1 - s)
  const q = v * (1 - f * s)
  const t = v * (1 - (1 - f) * s)
  const mod = i % 6
  const r = [v, q, p, p, t, v][mod]
  const g = [t, v, v, q, p, p][mod]
  const b = [p, p, t, v, v, q][mod]

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  }
}

export default class Color {
  private _hue = 0
  private _saturation = 100
  private _value = 100
  private _alpha = 100
  public enableAlpha = false
  public format = 'hex'
  public value = ''
  public selected?: boolean
  constructor(options?: Options) {
    options = options || ({} as Options)

    for (const option in options) {
      if (hasOwn(options, option)) {
        this[option] = options[option]
      }
    }

    this.doOnChange()
  }

  set(prop: { [key: string]: any } | any, value?: number) {
    if (arguments.length === 1 && typeof prop === 'object') {
      for (const p in prop) {
        if (hasOwn(prop, p)) {
          this.set(p, prop[p])
        }
      }

      return
    }

    this[`_${prop}`] = value
    this.doOnChange()
  }

  get(prop: string) {
    if (prop === 'alpha') {
      return Math.floor(this[`_${prop}`])
    }
    return this[`_${prop}`]
  }

  toRgb() {
    return hsv2rgb(this._hue, this._saturation, this._value)
  }

  fromString(value) {
    if (!value) {
      this._hue = 0
      this._saturation = 100
      this._value = 100

      this.doOnChange()
      return
    }

    const fromHSV = (h, s, v) => {
      this._hue = Math.max(0, Math.min(360, h))
      this._saturation = Math.max(0, Math.min(100, s))
      this._value = Math.max(0, Math.min(100, v))

      this.doOnChange()
    }

    if (value.indexOf('hsl') !== -1) {
      const parts = value
        .replace(/hsla|hsl|\(|\)/gm, '')
        .split(/\s|,/g)
        .filter(val => val !== '')
        .map((val, index) => (index > 2 ? parseFloat(val) : parseInt(val, 10)))

      if (parts.length === 4) {
        this._alpha = parseFloat(parts[3]) * 100
      } else if (parts.length === 3) {
        this._alpha = 100
      }
      if (parts.length >= 3) {
        const { h, s, v } = hsl2hsv(parts[0], parts[1], parts[2])
        fromHSV(h, s, v)
      }
    } else if (value.indexOf('hsv') !== -1) {
      const parts = value
        .replace(/hsva|hsv|\(|\)/gm, '')
        .split(/\s|,/g)
        .filter(val => val !== '')
        .map((val, index) => (index > 2 ? parseFloat(val) : parseInt(val, 10)))

      if (parts.length === 4) {
        this._alpha = parseFloat(parts[3]) * 100
      } else if (parts.length === 3) {
        this._alpha = 100
      }
      if (parts.length >= 3) {
        fromHSV(parts[0], parts[1], parts[2])
      }
    } else if (value.indexOf('rgb') !== -1) {
      const parts = value
        .replace(/rgba|rgb|\(|\)/gm, '')
        .split(/\s|,/g)
        .filter(val => val !== '')
        .map((val, index) => (index > 2 ? parseFloat(val) : parseInt(val, 10)))

      if (parts.length === 4) {
        this._alpha = parseFloat(parts[3]) * 100
      } else if (parts.length === 3) {
        this._alpha = 100
      }
      if (parts.length >= 3) {
        const { h, s, v } = rgb2hsv(parts[0], parts[1], parts[2])
        fromHSV(h, s, v)
      }
    } else if (value.indexOf('#') !== -1) {
      const hex = value.replace('#', '').trim()
      if (!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(hex)) return
      let r, g, b

      if (hex.length === 3) {
        r = parseHexChannel(hex[0] + hex[0])
        g = parseHexChannel(hex[1] + hex[1])
        b = parseHexChannel(hex[2] + hex[2])
      } else if (hex.length === 6 || hex.length === 8) {
        r = parseHexChannel(hex.substring(0, 2))
        g = parseHexChannel(hex.substring(2, 4))
        b = parseHexChannel(hex.substring(4, 6))
      }

      if (hex.length === 8) {
        this._alpha = (parseHexChannel(hex.substring(6)) / 255) * 100
      } else if (hex.length === 3 || hex.length === 6) {
        this._alpha = 100
      }

      const { h, s, v } = rgb2hsv(r, g, b)
      fromHSV(h, s, v)
    }
  }

  compare(color) {
    return (
      Math.abs(color._hue - this._hue) < 2 &&
      Math.abs(color._saturation - this._saturation) < 1 &&
      Math.abs(color._value - this._value) < 1 &&
      Math.abs(color._alpha - this._alpha) < 1
    )
  }

  doOnChange() {
    const { _hue, _saturation, _value, _alpha, format } = this

    if (this.enableAlpha) {
      switch (format) {
        case 'hsl': {
          const hsl = hsv2hsl(_hue, _saturation / 100, _value / 100)
          this.value = `hsla(${_hue}, ${Math.round(hsl[1] * 100)}%, ${Math.round(hsl[2] * 100)}%, ${this.get('alpha') / 100})`
          break
        }
        case 'hsv': {
          this.value = `hsva(${_hue}, ${Math.round(_saturation)}%, ${Math.round(_value)}%, ${this.get('alpha') / 100})`
          break
        }
        case 'hex': {
          this.value = `${toHex(hsv2rgb(_hue, _saturation, _value))}${hexOne((_alpha * 255) / 100)}`
          break
        }
        default: {
          const { r, g, b } = hsv2rgb(_hue, _saturation, _value)
          this.value = `rgba(${r}, ${g}, ${b}, ${this.get('alpha') / 100})`
        }
      }
    } else {
      switch (format) {
        case 'hsl': {
          const hsl = hsv2hsl(_hue, _saturation / 100, _value / 100)
          this.value = `hsl(${_hue}, ${Math.round(hsl[1] * 100)}%, ${Math.round(hsl[2] * 100)}%)`
          break
        }
        case 'hsv': {
          this.value = `hsv(${_hue}, ${Math.round(_saturation)}%, ${Math.round(_value)}%)`
          break
        }
        case 'rgb': {
          const { r, g, b } = hsv2rgb(_hue, _saturation, _value)
          this.value = `rgb(${r}, ${g}, ${b})`
          break
        }
        default: {
          this.value = toHex(hsv2rgb(_hue, _saturation, _value))
        }
      }
    }
  }
}
