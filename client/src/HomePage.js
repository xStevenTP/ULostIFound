import NavbarMap from "./NavBarMap.js";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import {locationData} from "./data.js";
import { Icon } from "leaflet";
import "./HomePage.css";
import axios from "axios";
import React from "react";

function HomePage(){
    const [lost, setLost] = React.useState([]);
    const [found, setFound] = React.useState([]);
    
    const getBuildings = async (building) => {
        const foundArr = await axios.get(`http://localhost:8080/found/${building}`);
        const lostArr = await axios.get(`http://localhost:8080/lost/${building}`);
        console.log(foundArr.data);
        setFound(foundArr.data);
        setLost(lostArr.data);
    };

    return(
        <div>    
            <MapContainer center={[42.38971485670958, -72.52828108428928]} zoom={17} >
                <TileLayer
                    url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoib2J0dXNldHVydGxlIiwiYSI6ImNsYWVtcGYwczBlNG4zcG8zNGo3MTlsZ2oifQ.Zp-jgwMIdlAhjO6BbRd7Pw"
                    attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                />
                {locationData.map(point => (
                    <Marker
                    position={[
                        point.coorindate[0],
                        point.coorindate[1]
                    ]}
                    eventHandlers={{
                        click: (e) => {
                            getBuildings(point.location);
                        },
                    }}
                    >
                        <Popup>
                            Found
                            {found.forEach(value => {
                                <div>
                                {value.item} {value.name} {value.description} {value.location} {value.email}
                                </div>
                            })}
                            Lost
                            {lost.forEach(value => {
                                <div>
                                {value.item} {value.name} {value.description} {value.location} {value.email}
                                </div>
                            })}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    )
    
}

export default HomePage;