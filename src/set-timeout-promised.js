function setTimeoutPromised(timeInMs) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, timeInMs)
  })
}

setTimeoutPromised(1500)
  .then(() => console.log('He esperado 1,5 segundos'))
