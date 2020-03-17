import React, { useState, useEffect } from "react";
import axios from "axios";
import mapboxgl, {
  Map as MapBox,
  GeolocateControl,
  NavigationControl
} from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import { loadPosition, geolocationOptions } from "./utils";
require('dotenv').config()

// Import Geocoder so that it can be used in the map. (import Geocoder from 'react-mapbox-gl-geocoder')
// Import Yogamap.css so that the map can be designed porperly. (import './yogamap.css)

// @import url("https://fonts.googleapis.com/css?family=Halant|Roboto|Montserrat|Noto+Serif|Source+Sans+Pro|Oswald|Nunito|Nunito+Sans&display=swap");

const Map = () => {
  // these may not have to be states at all, left this here for scalability
  const [map, setMap] = useState();
  const [currentUserPositions, setCurrentUserPositions] = useState([]);

  // takes an number[] of coords then calls mapbox's geolocation api to get address for those coords
  const getAddressFromCoordinates = async coords => {
    const { data } = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${coords[0]},${coords[1]}.json?access_token=${mapboxgl.accessToken}`
    );
    const location = data.features[0];
    return location ? location.place_name : coords;
  };

  const createMap = (mapOptions, currentUserPositions) => {
    // initialize the map
    const map = new MapBox(mapOptions);
    setMap(map);
    const { accessToken } = mapboxgl;

    // initializes the three map controls - direction, geolocator, and navigation
    const directionControls = new MapboxDirections({
      accessToken,
      profile: "mapbox/driving"
      // uncomment out the lines below if you want to disable turn-by-turn insutrctions
      //   controls: {
      //       instructions: false
      //   }
    });
    const geolocateControls = new GeolocateControl({
      geolocationOptions,
      trackUserLocation: true
    });
    const navigationControls = new NavigationControl();

    // adds the controls to the map
    map.addControl(directionControls, "top-left");
    map.addControl(geolocateControls);
    map.addControl(navigationControls, "top-right");

    map.on("load", async () => {
      // find the origin and desitnation for the directionControls
      const [origin, destination] = await Promise.all([
        getAddressFromCoordinates(currentUserPositions),
        // please replace these coordinates with shelter coordinates
        getAddressFromCoordinates([-80.1918, 25.7617])
      ]);

      // sets the origin and destination
      directionControls.setOrigin(origin);
      directionControls.setDestination(destination);
    });
  };

  // Adding longitude , latitude and enabled zoom in and zoom out to the map of Miami, Florida.
  // Access token for Mapbox is included in this function.
  const setUpMap = async () => {
    // gets the current user's location
    const position = await loadPosition();

    // change these hardcoded default to whereever you'd like
    const { longitude = -80.1918, latitude = 25.7617 } = position.coords;

    const currentUserPositions = [longitude, latitude];
    setCurrentUserPositions(currentUserPositions);

    const mapOptions = {
      container: "map-container",
      style: "mapbox://styles/mapbox/streets-v11",
      zoom: 14,
      center: currentUserPositions
    };

    createMap(mapOptions, currentUserPositions);
  };

  // component did mount
  useEffect(() => void setUpMap(), []);

  return (
    <div
      style={{ height: 700, width: 800, border: "1px solid black" }}
      id="map-container"
    />
  );
};

export default () => <Map />;
