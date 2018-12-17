
var mymap = L.map('mapid').setView([40.734636,-73.994997], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    // accessToken: 'your.mapbox.access.token'
    accessToken: 'pk.eyJ1Ijoidm9ucmFtc3kiLCJhIjoiY2pveGF0aDV2MjIyOTNsbWxlb2hhMmR4dCJ9.JJdYD_jWgRwUeJkDWiBz3w'
}).addTo(mymap);

for (var i = 0; i < meetings.length; i++) {
    L.marker( [+meetings[i].lat, +meetings[i].long] ).bindPopup(JSON.stringify(meetings[i].address)).addTo(mymap);
}

