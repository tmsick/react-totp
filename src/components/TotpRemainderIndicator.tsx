interface Props {
  now: Date
  currentTick: Date
  nextTick: Date
}

export const TotpRemainderIndicator: React.VFC<Props> = ({
  now,
  currentTick,
  nextTick,
}) => {
  const max = Math.floor((nextTick.getTime() - currentTick.getTime()) / 1000)
  const value = Math.floor((nextTick.getTime() - now.getTime()) / 1000) + 1
  const className =
    10 * value > 3 * max ? "progress is-success" : "progress is-danger"

  return <progress max={max} value={value} className={className}></progress>
}
