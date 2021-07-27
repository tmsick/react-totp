interface Props {
  now: Date
  currentTick: Date
  nextTick: Date
}

export const TotpMeter: React.VFC<Props> = ({ now, currentTick, nextTick }) => {
  return (
    <meter
      min={-nextTick.getTime()}
      max={-currentTick.getTime()}
      value={-now.getTime()}
    ></meter>
  )
}
