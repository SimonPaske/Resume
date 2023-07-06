function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: {
            lat: 56.000303,
            lng: 10.902641
        }
    });
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 55.6414271, lng: 12.590860 },
        { lat: 55.9693378, lng: 12.542347 },
        { lat: 55.8022619, lng: 12.568363 }
    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers,
        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

} 