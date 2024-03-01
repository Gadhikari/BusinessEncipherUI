function initMap() {
    // Location coordinates
    var location = {lat: 40.7128, lng: -74.0060};
    // Create a map object and specify the DOM element for display
    var map = new google.maps.Map(document.getElementById('map'), {
      center: location,
      zoom: 12 // Adjust the zoom level as needed
    });
    // Create a marker and set its position
    var marker = new google.maps.Marker({
      map: map,
      position: location,
      title: 'Our Location'
    });
  }