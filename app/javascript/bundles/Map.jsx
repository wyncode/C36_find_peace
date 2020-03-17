import React, { useState, useEffect } from 'react';
import mapboxgl, { Map as MapBox } from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';

// Import Geocoder so that it can be used in the map. (import Geocoder from 'react-mapbox-gl-geocoder')
// Import Yogamap.css so that the map can be designed porperly. (import './yogamap.css)



// @import url("https://fonts.googleapis.com/css?family=Halant|Roboto|Montserrat|Noto+Serif|Source+Sans+Pro|Oswald|Nunito|Nunito+Sans&display=swap");

const Map = () => {
    const [map, setMap] = useState();

// Adding direction to the top - left hand corner of the map.
    const createMap = mapOptions => {
      const map = new MapBox(mapOptions)  
      const { accessToken } = mapboxgl
      map.addControl(new MapboxDirections({ accessToken }), 'top-left');
      setMap(map)
    }

// Adding longitude , latitude and enabled zoom in and zoom out to the map of Miami, Florida. 
// Access token for Mapbox is included in this function.
const setUpMap =  () => {
        const center = { longitude: -80.1918, latitude: 25.7617 }
        mapboxgl.accessToken = 'pk.eyJ1Ijoic3RyZW15c29uaWEiLCJhIjoiY2s3cWprMjRoMDQyYzNmbzFtbGdkMjc4cCJ9.4LDe2fqB-j4eQMROWbd6sA'
        const mapOptions = {
            container: 'map-container',
            style: 'mapbox://styles/mapbox/streets-v11',
            zoom: 12,
            center: [center.longitude, center.latitude]
        }
        createMap(mapOptions)
    }

    //  componentDidMount() {
    //     this.trackLocation();
    //     this.interval = setInterval(this.trackLocation, 60000);
    //     window.addEventListener('beforeunload', this.handleLeavePage);
    //   }
    
    //   componentWillUnMount = _ => {
    //     window.removeEventListener('beforeunload', this.handleLeavePage);
    //     clearInterval(this.interval);
    //   };
    useEffect(() => {
        setUpMap()
    }, [])
    
    // Giving style (height / width) to the map.
    return (
        <div>
            <div style={{ height: 500, width: 500}} id="map-container" />
        </div>
    )
}


export default () => <Map />;