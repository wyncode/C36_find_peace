import React, { useState, useEffect } from "react";
import axios from "axios";
import mapboxgl, {
  Map as MapBox,
  GeolocateControl,
  NavigationControl
} from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import { loadPosition, geolocationOptions } from "./utils";

// Import Geocoder so that it can be used in the map. (import Geocoder from 'react-mapbox-gl-geocoder')
// Import Yogamap.css so that the map can be designed porperly. (import './yogamap.css)

// @import url("https://fonts.googleapis.com/css?family=Halant|Roboto|Montserrat|Noto+Serif|Source+Sans+Pro|Oswald|Nunito|Nunito+Sans&display=swap");

const Map = () => {
  // these may not have to be states at all, left this here for scalability
  const [map, setMap] = useState();
  const [currentUserPositions, setCurrentUserPositions] = useState([]);

  const getAddressFromCoordinates = async coords => {
    const { data } = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${coords[0]},${coords[1]}.json?access_token=${mapboxgl.accessToken}`
    );
    const location = data.features[0];
    return location ? location.place_name : coords;
  };

  // Adding direction to the top - left hand corner of the map.
  const createMap = (mapOptions, currentUserPositions) => {
    const map = new MapBox(mapOptions);
    setMap(map);
    const { accessToken } = mapboxgl;
    const directionControls = new MapboxDirections({
      accessToken,
      profile: "mapbox/driving"
    });
    map.addControl(directionControls, "top-left");
    map.addControl(
      new GeolocateControl({ geolocationOptions, trackUserLocation: true })
    );
    map.addControl(new NavigationControl(), "top-right");
    map.on("load", async () => {
      const [origin, destination] = await Promise.all([
        getAddressFromCoordinates(currentUserPositions),
        // please replace these coordinates with shelter coordinates
        getAddressFromCoordinates([-80.1918, 25.7617])
      ]);
      directionControls.setOrigin(origin);
      directionControls.setDestination(destination);
    });
  };

  // Adding longitude , latitude and enabled zoom in and zoom out to the map of Miami, Florida.
  // Access token for Mapbox is included in this function.
  const setUpMap = async () => {
    const position = await loadPosition();

    // reset these default values to center of miami
    const { longitude = -80.1918, latitude = 25.7617 } = position.coords;
    const currentUserPositions = [longitude, latitude];
    setCurrentUserPositions(currentUserPositions);
    // please hide key when you get the chance
    mapboxgl.accessToken =
      "pk.eyJ1Ijoic3RyZW15c29uaWEiLCJhIjoiY2s3cWprMjRoMDQyYzNmbzFtbGdkMjc4cCJ9.4LDe2fqB-j4eQMROWbd6sA";
    const mapOptions = {
      container: "map-container",
      style: "mapbox://styles/mapbox/streets-v11",
      zoom: 14,
      center: currentUserPositions
    };
    createMap(mapOptions, currentUserPositions);
  };

  useEffect(() => {
    setUpMap();
  }, []);

  // Giving style (height / width) to the map.
  return (
    <div>
      <div
        style={{ height: 700, width: 800, border: "1px solid black" }}
        id="map-container"
      />
    </div>
  );
};

export default () => <Map />;
