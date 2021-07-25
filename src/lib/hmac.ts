export function hmac(
  key: ArrayBuffer,
  msg: ArrayBuffer,
  algorithm: "SHA-1" | "SHA-256" | "SHA-384" | "SHA-512"
): Promise<ArrayBuffer> {
  return crypto.subtle
    .importKey(
      /* format */ "raw",
      /* keyData */ key,
      /* algorithm */ { name: "HMAC", hash: algorithm },
      /* extractable */ false,
      /* keyUsages */ ["sign"]
    )
    .then(key => crypto.subtle.sign("HMAC", key, msg))
}
