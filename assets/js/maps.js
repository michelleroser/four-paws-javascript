function initMap() {
      const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 12,
          center: {
              lat: 51.204545,
              lng: -0.158548
          },
          mapTypeId: "satellite",
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

    const svgMarker = {
        path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
        fillColor: "pink",
        fillOpacity: 0.6,
        strokeWeight: 0,
        rotation: 0,
        scale: 2,
        anchor: new google.maps.Point(15, 30),
      };


    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
            icon: svgMarker,
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
