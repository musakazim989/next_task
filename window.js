let newWindow = (url, w, h) => {
  window.open(url, "_blank", `width=${w},height=${h}`)
}

let myUrl = "https://www.facebook.com"
var width = 900
var height = 400

newWindow(myUrl, width, height)
