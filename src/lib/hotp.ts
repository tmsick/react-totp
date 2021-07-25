import { hmac } from "./hmac"

export function hotp(
  key: ArrayBuffer,
  counter: ArrayBuffer,
  digit = 6
): Promise<string> {
  return hmac(key, counter, "SHA-1").then(hmacBuffer => {
    const view = new Uint8Array(hmacBuffer)
    const offset = view[view.length - 1] & 0x0f

    let code = 0
    code += (view[offset + 0] & 0x7f) << 24
    code += (view[offset + 1] & 0xff) << 16
    code += (view[offset + 2] & 0xff) << 8
    code += (view[offset + 3] & 0xff) << 0

    code %= 10 ** digit
    code += 10 ** digit
    return code.toString().slice(1)
  })
}
