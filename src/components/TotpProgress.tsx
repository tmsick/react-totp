interface Props {
  now: Date
  currentTick: Date
  nextTick: Date
}

export const TotpProgress: React.VFC<Props> = ({
  now,
  currentTick,
  nextTick,
}) => {
  const max = nextTick.getTime() - currentTick.getTime()
  const value = nextTick.getTime() - now.getTime()
  const className =
    10 * value > 3 * max ? "progress is-info" : "progress is-danger"

  return <progress max={max} value={value} className={className}></progress>
}
