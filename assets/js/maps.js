function initMap() {
      const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 8,
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



    var svgMarker= {
      url: "assets/images/map-pin.svg",
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(35, 35)
    };



    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: {
              text: labels[i % labels.length],
              color: '#fff',
              fontSize: '10px',
              fontWeight: 'bold',
                  },
            icon: svgMarker,
            title: "These are some of the best locations in Surrey!",
        });



   //  map.addListener("center_changed", () => {
   //   window.setTimeout(() => {
   //     map.panTo(marker.getPosition());
   //   }, 3000);
   // });
   // marker.addListener("click", () => {
   //   map.setZoom(20);
   //   map.setCenter(marker.getPosition());
   // });

  });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
