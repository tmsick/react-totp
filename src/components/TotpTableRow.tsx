import { Totp } from "./Totp"

interface Props {
  totp: Totp
  onTotpCopyButtonClick: (uuid: string) => void
  onTotpRemove: (uuid: string) => void
}

export const TotpTableRow: React.VFC<Props> = ({
  totp: { uuid, issuer, code },
  onTotpCopyButtonClick,
  onTotpRemove,
}) => {
  const handleCopyButtonClick: React.MouseEventHandler<HTMLButtonElement> =
    () => {
      onTotpCopyButtonClick(uuid)
    }

  const handleRemoveClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    onTotpRemove(uuid)
  }

  return (
    <tr>
      <td>{issuer}</td>
      <td>
        <input
          type="text"
          value={code}
          className="input is-small"
          style={{ fontFamily: "monospace" }}
          readOnly
        />
      </td>
      <td>
        <button
          onClick={handleCopyButtonClick}
          className="button is-small is-info"
        >
          Copy
        </button>
      </td>
      <td>
        <button
          onClick={handleRemoveClick}
          className="button is-small is-danger"
        >
          Remove
        </button>
      </td>
    </tr>
  )
}
