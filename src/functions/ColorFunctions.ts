import Color from 'color'
import {getDayOfYear} from 'date-fns'

export function setPrimaryColor() {
  const now = new Date()
  const hueValue = (((getDayOfYear(now) / 366) + 0.5) % 1) * 360
  const color = new Color().hsl(hueValue, 80, 80)
  document.documentElement.style.setProperty('--color-primary', color.hex())
}
