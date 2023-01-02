import Color from 'color'
import {getDayOfYear} from 'date-fns'

export function setPrimaryColor() {
  const now = new Date()
  const hours = now.getHours()
  const hueValue = (((getDayOfYear(now) / 366) + 0.5) % 1) * 360
  const isLightOut = (hours > 6) && (hours < 18)
  const colorPrimary = new Color().hsl(hueValue, 80, isLightOut ? 80 : 20)
  const colorText = new Color().hsl(0, 0, isLightOut ? 0 : 100).alpha(0.8)
  const colorShadow = new Color().hsl(0, 0, isLightOut ? 100 : 0).alpha(0.8)
  document.documentElement.style.setProperty('--color-primary', colorPrimary.hex())
  document.documentElement.style.setProperty('--color-text', colorText.hexa())
  document.documentElement.style.setProperty('--color-shadow', colorShadow.hexa())
}
