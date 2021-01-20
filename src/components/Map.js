import React from "react";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
    height: "40vh",
    width: "100%",
};
const center = {
    lat: 32.99854242977387,
    lng: -96.92106544603939,
};

export default function Map() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyB7M3lkWp_5q0_SbhhhTmehkYALDFF1Ttk",
        libraries,
    });
// messing around with react hooks use state
    const [markers, setMarkers] = React.useState([]);
    const [selected, setSelected] = React.useState(null);
    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";
    
    return <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
    >
        <Marker key="Mar Thoma Church of Dallas, Carrollton" position = {center}/>
    </GoogleMap>
    
}