import { Totp } from "./Totp"
// import { TotpMeter } from "./TotpMeter"
import { TotpProgress } from "./TotpProgress"
import { TotpTableRow } from "./TotpTableRow"

interface Props {
  totps: Totp[]
  onTotpCopyButtonClick: (uuid: string) => void
  onTotpRemove: (uuid: string) => void
  now: Date
  currentTick: Date
  nextTick: Date
}

export const TotpTable: React.VFC<Props> = ({
  totps,
  onTotpCopyButtonClick,
  onTotpRemove,
  now,
  currentTick,
  nextTick,
}) => {
  return (
    <div className="box">
      <h1 className="title">TOTPs</h1>
      <TotpProgress now={now} currentTick={currentTick} nextTick={nextTick} />
      <table
        className="table is-hoverable is-fullwidth"
        style={{ textAlign: "center" }}
      >
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
