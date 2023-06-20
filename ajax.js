function sendGetRequest() {
  var xhr = new XMLHttpRequest()
  var url = "https://api.example.com/data"

  xhr.open("GET", url, true)

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText)
      console.log(response)
    }
  }

  xhr.send()
}

sendGetRequest()
