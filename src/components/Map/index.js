import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import './style.css';

const setMap = () => {
    return(
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 42.3314, lng: -83.045 }}
            />
    )
}

const WrappedMap = withScriptjs(withGoogleMap(setMap));

export default function Map(){
    return(
        <div className='col-9' style={{width: '100vw', height: '90vh'}}>
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAG7ZRbokPv5-xQYLub5_yFbO5a04XygqY`}
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '100%' }} />}
                mapElement={<div style={{ height: '100%', width: '80vw' }} />}
            />
        </div>
    )
};