//create map
const map = L.map('mapid').setView([-20.9374971,-48.4959839], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
.addTo(map);


const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
})

let marker;
// create and add markers
map.on('click', (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng; 

  document.querySelector('[name=lat]').value = lat;
  document.querySelector('[name=lat]').value = lng;

  // remover icon
  marker && map.removeLayer(marker);

  //add icon tileLayer
  marker = L.marker([lat, lng], {icon})
  .addTo(map)
})
