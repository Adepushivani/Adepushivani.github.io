function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat:17.45500796741276 , lng:78.39790385292318 };

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Vishnu Marg, Madhapur' // Title Location
    });
}