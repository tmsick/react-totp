import { useState } from "react"
import { Totp } from "./Totp"
import { v4 as getUuid } from "uuid"

type NewTotpFormHandler = (totp: Totp) => void

interface PropsNewTotpForm {
  onFormSubmit: NewTotpFormHandler
}

export const NewTotpForm: React.VFC<PropsNewTotpForm> = ({ onFormSubmit }) => {
  const [issuer, setIssuer] = useState("")
  const [psk, setPskString] = useState("")

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault()

    // Make sure information is filled
    if (issuer === "" || psk === "") {
      return
    }

    // Delegate submission to handler
    // const tick = getCurrentTick()
    const uuid = getUuid()
    const code = ""
    onFormSubmit({ uuid, issuer, psk, code })

    // Reset the form
    setIssuer("")
    setPskString("")
  }

  return (
    <div>
      <h1>New TOTP</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Issuer:
            <input
              type="text"
              value={issuer}
              onChange={event => setIssuer(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            PSK:
            <input
              type="password"
              value={psk}
              onChange={event => setPskString(event.target.value)}
            />
          </label>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  )
}
