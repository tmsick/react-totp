export interface Totp {
  uuid: string
  issuer: string
  psk: ArrayBuffer
  code: string
}
