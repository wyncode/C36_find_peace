import React, { useState, useEffect } from 'react';
import mapboxgl, { Map as MapBox } from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';

const Map = () => {
    const [map, setMap] = useState();

    const createMap = mapOptions => {
      const map = new MapBox(mapOptions)  
      const { accessToken } = mapboxgl
      map.addControl(new MapboxDirections({ accessToken }), 'top-left');
      setMap(map)
    }

    const setUpMap =  () => {
        const center = { longitude: -80.2044, latitude: 25.8028 }
        mapboxgl.accessToken = 'pk.eyJ1Ijoic3RyZW15c29uaWEiLCJhIjoiY2s3cWprMjRoMDQyYzNmbzFtbGdkMjc4cCJ9.4LDe2fqB-j4eQMROWbd6sA'
        const mapOptions = {
            container: 'map-container',
            style: 'mapbox://styles/mapbox/streets-v11',
            zoom: 12,
            center: [center.longitude, center.latitude]
        }
        createMap(mapOptions)
    }

    useEffect(() => {
        setUpMap()
    }, [])
    
    return (
        <div>
            <div style={{ height: 500, width: 500}} id="map-container" />
        </div>
    )
}


export default () => <Map />;