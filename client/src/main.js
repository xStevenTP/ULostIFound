import NavbarMap from "./NavBarMap.js";

function test(){
    const apikey = "pk.eyJ1Ijoib2J0dXNldHVydGxlIiwiYSI6ImNsYWVtcGYwczBlNG4zcG8zNGo3MTlsZ2oifQ.Zp-jgwMIdlAhjO6BbRd7Pw";

    const mymap = L.map('map').setView([42.38971485670958, -72.52828108428928], 17);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: apikey
    }).addTo(mymap);

    const marker = L.marker([42.38977530511156, -72.52824515703774]).addTo(mymap);

    marker.on("click", NavbarMap())

    return(
        
    )
}

export default test;