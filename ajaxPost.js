function sendPostRequest() {
  var xhr = new XMLHttpRequest()
  var url = "https://api.example.com/submit"
  var data = JSON.stringify({
    name: "John Doe",
    email: "johndoe@example.com",
  })

  xhr.open("POST", url, true)
  xhr.setRequestHeader("Content-Type", "application/json")

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText)
    }
  }

  xhr.send(data)
}

sendPostRequest()
