import NavbarMap from "./NavBarMap.js";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "./HomePage.css";

function HomePage(){
    const apikey = "pk.eyJ1Ijoib2J0dXNldHVydGxlIiwiYSI6ImNsYWVtcGYwczBlNG4zcG8zNGo3MTlsZ2oifQ.Zp-jgwMIdlAhjO6BbRd7Pw";
    const id = 'mapbox/streets-v11';
    /*
    const mymap = L.map('map').setView([42.38971485670958, -72.52828108428928], 17);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: apikey
    }).addTo(mymap);

    const marker = L.marker([42.38977530511156, -72.52824515703774]).addTo(mymap);

    marker.on("click", NavbarMap())*/

    return(
        <div className="leaflet-container">
            <MapContainer center={[42.38971485670958, -72.52828108428928]} zoom={17} >
                <TileLayer
                    url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoib2J0dXNldHVydGxlIiwiYSI6ImNsYWVtcGYwczBlNG4zcG8zNGo3MTlsZ2oifQ.Zp-jgwMIdlAhjO6BbRd7Pw"
                    attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                />
                <Marker position = {[42.38972499338459, -72.52825871862946]} 
                  eventHandlers={{
                    click: (e) => {
                      console.log('marker clicked', e)
                    },
                  }}>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default HomePage;