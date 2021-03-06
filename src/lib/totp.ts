import { hotp } from "./hotp"

const T0 = 0
const TIME_STEP = 30

export function totp(key: ArrayBuffer, date: Date, digit = 6): Promise<string> {
  const now = Math.floor(date.getTime() / 1000)
  const counter = Math.floor((now - T0) / TIME_STEP)

  /* †VERY DANGEROUS IMPLEMENTATION† */
  const buffer = new ArrayBuffer(/* byteLength */ 8)
  const view32 = new Uint32Array(buffer)
  view32[0] = counter
  const view8 = new Uint8Array(buffer)
  view8.reverse()

  return hotp(key, buffer, digit)
}
