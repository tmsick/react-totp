export interface Totp {
  uuid: string
  issuer: string
  psk: string
  code: string
}
