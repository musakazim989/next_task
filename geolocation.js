let geolocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(myPosition, showError)
  } else {
    console.log("Geolocation is not supported")
  }
}
function myPosition(position) {
  var latitude = position.coords.latitude
  var longitude = position.coords.longitude

  alert("Latitude: " + latitude + " Longitude: " + longitude)
}

function showError(error) {
  alert("Error occurred: " + error.message)
}
geolocation()
