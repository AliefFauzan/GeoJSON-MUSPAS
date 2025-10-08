let map;

function drawViz(data) {
  if (!map) {
    map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -6.9, lng: 107.6 }, // West Java
      zoom: 8,
      mapTypeId: 'satellite'
    });

    map.data.loadGeoJson(
      'https://raw.githubusercontent.com/AliefFauzan/GeoJSON-MUSPAS/main/Mapping_Paroki_Jawa_Barat_Main_Layer_(3).GeoJSON'
    );

    map.data.setStyle({
      fillColor: '#1E90FF',
      fillOpacity: 0.4,
      strokeColor: '#FFFFFF',
      strokeWeight: 1
    });
  }

  // If you have a "Paroki" field from Excel, you can style or filter features here later
}

drawViz();
