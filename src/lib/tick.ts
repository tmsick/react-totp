export function getDateTuple() {
  const now = new Date()
  const currentTick = new Date(now)
  const nextTick = new Date(now)

  const sec = now.getSeconds()
  const min = now.getMinutes()
  if (sec < 30) {
    currentTick.setSeconds(0)
    nextTick.setSeconds(30)
  } else {
    currentTick.setSeconds(30)
    nextTick.setSeconds(0)
    nextTick.setMinutes(min + 1)
  }
  currentTick.setMilliseconds(0)
  nextTick.setMilliseconds(0)
  return [now, currentTick, nextTick]
}
