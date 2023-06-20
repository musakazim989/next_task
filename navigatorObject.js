let findBrowser = () => {
  //navigator.appName already depricated
  let browserName = navigator.appName
  let browserVersion = navigator.appVersion

  alert(`Browsername: ${browserName} " " ${browserVersion}`)
}

findBrowser()
