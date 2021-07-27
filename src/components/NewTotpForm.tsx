import { useState } from "react"
import { Totp } from "./Totp"
import { v4 as getUuid } from "uuid"
import base32Decode from "base32-decode"

function getInputClassName(ok: boolean) {
  return ok ? "input is-small" : "input is-small is-danger"
}

interface Props {
  onFormSubmit: (totp: Totp) => void
}

export const NewTotpForm: React.VFC<Props> = ({ onFormSubmit }) => {
  const [issuer, setIssuer] = useState("")
  const [pskString, setPskString] = useState("")
  const [issuerFilled, setIssuerFilled] = useState(true)
  const [pskFilled, setPskFilled] = useState(true)

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault()

    setIssuerFilled(true)
    setPskFilled(true)

    const trimmedIssuer = issuer.trim()
    const trimmedPskString = pskString.trim()

    // Make sure information is filled
    if (trimmedIssuer === "" && trimmedPskString === "") {
      setIssuerFilled(false)
      setPskFilled(false)
      return
    } else if (trimmedIssuer === "") {
      setIssuerFilled(false)
      return
    } else if (trimmedPskString === "") {
      setPskFilled(false)
      return
    }

    try {
      const psk = base32Decode(trimmedPskString.toUpperCase(), "RFC3548")

      // Delegate submission to handler
      onFormSubmit({ uuid: getUuid(), issuer: trimmedIssuer, psk, code: "" })

      // Reset the form
      setIssuer("")
      setPskString("")
    } catch {
      setPskFilled(false)
    }
  }

  return (
    <div className="box">
      <h1 className="title">New TOTP</h1>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Issuer</label>
          <div className="control">
            <input
              className={getInputClassName(issuerFilled)}
              type="text"
              value={issuer}
              onChange={event => setIssuer(event.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">PSK</label>
          <div className="control">
            <input
              className={getInputClassName(pskFilled)}
              type="password"
              value={pskString}
              onChange={event => setPskString(event.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-primary is-small" type="submit">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
