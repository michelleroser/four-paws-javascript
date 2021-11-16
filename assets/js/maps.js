function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: {
            lat: 51.204545,
            lng: -0.158548
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 51.204545, lng: -0.158548 },
        { lat: 51.194216, lng: -0.152296 },
        { lat: 51.220700, lng: -0.186091 },
        { lat: 51.163892, lng: -0.168000},
        { lat: 51.188002, lng: -0.171026 },
        { lat: 51.233615, lng: -0.207325 },
        { lat: 51.251751, lng: -0.199581 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
