import { Totp } from "./Totp"

interface PropsTotpTableRow {
  totp: Totp
  onTotpCopyButtonClick: (uuid: string) => void
  onTotpRemove: (uuid: string) => void
}

export const TotpTableRow: React.VFC<PropsTotpTableRow> = ({
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
        <input type="text" value={code} readOnly />
      </td>
      <td>
        <button onClick={handleCopyButtonClick}>Copy</button>
      </td>
      <td>
        <button onClick={handleRemoveClick}>Remove</button>
      </td>
    </tr>
  )
}
