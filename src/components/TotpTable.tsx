import { Totp } from "./Totp"
import { TotpRemainderIndicator } from "./TotpRemainderIndicator"
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
      <div className="columns">
        <div className="column">
          <h1 className="title is-5">TOTPs</h1>
        </div>
        <div className="column is-one-quarter">
          <TotpRemainderIndicator
            now={now}
            currentTick={currentTick}
            nextTick={nextTick}
          />
        </div>
      </div>
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
