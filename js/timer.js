export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
}) {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function countdown() {
    timerTimeOut = setTimeout(function () {
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)

      updateDisplay(minutes, 0)

      if (minutes <= 0) {
        resetControls()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
      }

      updateDisplay(minutes, String(seconds - 1))

      countdown()
    }, 1000)
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  return {
    reset,
    countdown,
    updateDisplay,
    updateMinutes,
    hold,
  }
}
