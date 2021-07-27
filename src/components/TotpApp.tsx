import { NewTotpForm } from "./NewTotpForm"
import { Totp } from "./Totp"
import { TotpTable } from "./TotpTable"
import { WarningMessage } from "./WarningMessage"
import { getDateTuple } from "../lib/tick"
import { totp as getTotp } from "../lib/totp"
import { useEffect, useState } from "react"

export const TotpApp = () => {
  // Time states
  const [now, currentTick, nextTick] = getDateTuple()
  const [, setNow] = useState<Date>(now)
  const [, setCurrentTick] = useState<Date>(currentTick)
  const [, setNextTick] = useState<Date>(nextTick)

  // TOTPs
  const [totps, setTotps] = useState<Totp[]>([])

  const handleNewTotpFormSubmit = (totp: Totp) => {
    getTotp(totp.psk, currentTick).then(code => {
      setTotps(totps.concat([{ ...totp, code }]))
    })
  }

  const handleTotpRemove = (uuid: string) => {
    setTotps(totps.filter(totp => totp.uuid !== uuid))
  }

  const handleTotpCopyButtonClick = (uuid: string) => {
    for (const totp of totps) {
      if (totp.uuid === uuid) {
        navigator.clipboard.writeText(totp.code)
      }
    }
  }

  useEffect(() => {
    const id = setTimeout(() => {
      const [now, currentTick, nextTick] = getDateTuple()
      setNow(now)
      setCurrentTick(currentTick)
      setNextTick(nextTick)

      // Update TOTP items
      Promise.all(
        totps.map(totp =>
          getTotp(totp.psk, currentTick).then(code => ({ ...totp, code }))
        )
      ).then(setTotps)
    }, 1 * 1000)

    return () => {
      clearInterval(id)
    }
  })

  return (
    <div className="container is-max-desktop" style={{ padding: "30px 10px" }}>
      <WarningMessage />
      <NewTotpForm onFormSubmit={handleNewTotpFormSubmit} />
      <TotpTable
        totps={totps}
        onTotpCopyButtonClick={handleTotpCopyButtonClick}
        onTotpRemove={handleTotpRemove}
        now={now}
        currentTick={currentTick}
        nextTick={nextTick}
      />
    </div>
  )
}
