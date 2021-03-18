import { select } from "async";
import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import locations from "../../utils/locations";
import "./style.css";
import mapStyle from "../../mapStyle";

const WrappedMap = withScriptjs(withGoogleMap(Map));

function Map() {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  function getColor(){
    if(selectedVehicle.battery >= 80){
      return 'green';
    } else if(selectedVehicle.battery < 80 && selectedVehicle.battery >= 40 ){
      return 'orange';
    } else {
      return 'red';
    }
  }
  return (
    <GoogleMap
      defaultZoom={9}
      defaultCenter={{ lat: 42.4544, lng: -83.385 }}
      defaultOptions={{ styles: mapStyle }}
    >
      {locations.map((vhLocation) => (
        <Marker
          key={vhLocation.id}
          position={{ lat: vhLocation.lat, lng: vhLocation.lng }}
          onClick={() => {
            setSelectedVehicle(vhLocation);
          }}
          icon={{
            url: "/car.svg",
            scaledSize: new window.google.maps.Size(55, 55),
          }}
        />
      ))}

      {selectedVehicle && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedVehicle(null);
          }}
          position={{ lat: selectedVehicle.lat, lng: selectedVehicle.lng }}
        >
          <div className="infoWindow">
            <p>Vehicle: {selectedVehicle.name}</p>
            <p
              style={{color: getColor()}}
              >Battery: {selectedVehicle.battery}%</p>
            <p>Driver: {selectedVehicle.driver.name}</p>
            <p>Ph: {selectedVehicle.driver.telephone}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const Main = () => {
  function getColor(vehicles){
    if(vehicles.battery >= 80){
      return 'green';
    } else if(vehicles.battery < 80 && vehicles.battery >= 40 ){
      return 'orange';
    } else {
      return 'red';
    }
  }
  return (
    <div className="container mainDiv">
      <div className="row">
        <div className="cardDiv col-3">
          {locations.map((vehicles) => {
            return (
              <div className="cardSection">
                <h2>Vehicle: {vehicles.name}</h2>
                <p style={{color: getColor(vehicles)}}>{vehicles.battery}% battery remaining</p>
                <p>Driver: {vehicles.driver.name}</p>
                <p>Notes: {vehicles.notes}</p>
              </div>
            );
          })}
        </div>
        <div className="col-9" style={{ width: "100vw", height: "90vh" }}>
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAG7ZRbokPv5-xQYLub5_yFbO5a04XygqY`}
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: "100%", width: "80vw" }} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
