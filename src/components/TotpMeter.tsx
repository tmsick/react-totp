interface MeterProps {
  now: Date
  currentTick: Date
  nextTick: Date
}

export const TotpMeter: React.VFC<MeterProps> = ({
  now,
  currentTick,
  nextTick,
}) => {
  return (
    <meter
      min={-nextTick.getTime()}
      max={-currentTick.getTime()}
      value={-now.getTime()}
    ></meter>
  )
}
