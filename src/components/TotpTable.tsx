import { Totp } from "./Totp"
import { TotpMeter } from "./TotpMeter"
import { TotpTableRow } from "./TotpTableRow"

interface PropsTotpTable {
  totps: Totp[]
  onTotpCopyButtonClick: (uuid: string) => void
  onTotpRemove: (uuid: string) => void
  now: Date
  currentTick: Date
  nextTick: Date
}

export const TotpTable: React.VFC<PropsTotpTable> = ({
  totps,
  onTotpCopyButtonClick,
  onTotpRemove,
  now,
  currentTick,
  nextTick,
}) => {
  return (
    <div>
      <h1>TOTPs</h1>
      <TotpMeter now={now} currentTick={currentTick} nextTick={nextTick} />
      <table>
        <thead>
          <tr>
            <th>Issuer</th>
            <th>TOTP</th>
            <th>Copy</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {totps.map(totp => (
            <TotpTableRow
              key={totp.uuid}
              totp={totp}
              onTotpCopyButtonClick={onTotpCopyButtonClick}
              onTotpRemove={onTotpRemove}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}
