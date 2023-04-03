function initMap() {
  // Get the current location
  navigator.geolocation.getCurrentPosition(function (position) {
    // Create a new map centered on the current location
    var map = L.map("map").setView(
      [position.coords.latitude, position.coords.longitude],
      18
    );

    // Add a tile layer to the map using OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    // Add a marker to the map at the current location
    var marker = L.marker([
      position.coords.latitude,
      position.coords.longitude,
    ]).addTo(map);

    // Update the marker position every 5 seconds
    setInterval(function () {
      navigator.geolocation.getCurrentPosition(function (position) {
        marker.setLatLng([position.coords.latitude, position.coords.longitude]);
        map.setView([position.coords.latitude, position.coords.longitude], 18);
      });
    }, 5000);
  });
}
