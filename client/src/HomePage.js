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
    let foundData = [];
    let lostData = [];
    
    const getBuildings = async (building) => {
        axios.get(`http://localhost:8080/found/${building}`)
        .then ((response) => {
            foundData = response.data;
            setFound(foundData);
            console.log(foundData);
            console.log(response.data);
            console.log(found);
        })
        axios.get(`http://localhost:8080/lost/${building}`)
        .then ((response) => {
            lostData = response.data;
            setLost(lostData);
            console.log(lost);
    });
    }

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
                        point.coordinate[0],
                        point.coordinate[1]
                    ]}
                    eventHandlers={{
                        click: async(e) => {
                            await getBuildings(point.location);
                            //console.log(found);
                            //console.log(lost);
                            //console.log(foundData);
                        },
                    }}
                    >
                        <Popup>
                            <div>
                                Found
                                {foundData.map(value => {
                                    <div>
                                    {value.item} {value.name} {value.description} {value.location} {value.email}
                                    </div>
                                })}
                            </div>
                            <div>
                                Lost
                                {lost.map(value => {
                                    <div>
                                    {value.item} {value.name} {value.description} {value.location} {value.email}
                                    </div>
                                })}
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    )
    
}

export default HomePage;