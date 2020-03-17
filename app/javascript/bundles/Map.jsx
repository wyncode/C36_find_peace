import React, { useState, useEffect } from "react";
import axios from "axios";
import mapboxgl, {Map as MapBox, GeolocateControl, NavigationControl} from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import { loadPosition, geolocationOptions } from "./utils";
require('dotenv').config()

// Import Geocoder so that it can be used in the map. (import Geocoder from 'react-mapbox-gl-geocoder')
// Import Yogamap.css so that the map can be designed porperly. (import './yogamap.css)

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
    // Initializings the map.
    const map = new MapBox(mapOptions);
    setMap(map);
    const { accessToken } = mapboxgl;

    // These function enables the three map controls (direction , geolocate, and navigation) to be used on the map.
    // Direction Control enables the user to get directions in the way of driving.
    // Geolocate Control enables a button and calls on the Mapbox Api to find the users loaction.
    // Navigation Control enables two buttons on the map to zoom in and zoom out.
    //  Adds a scale to the left hand corner of the map.
    const directionControls = new MapboxDirections({
      accessToken,
      profile: "mapbox/driving"
    });

    const geolocateControls = new GeolocateControl({
      geolocationOptions,
      trackUserLocation: true
    });

    const navigationControls = new NavigationControl();

    const scale = new mapboxgl.ScaleControl({
        maxWidth: 80,
        unit: 'imperial'
    });

    // Controls are added to the map.
    map.addControl(directionControls, "top-left");
    map.addControl(navigationControls, "top-right");
    map.addControl(geolocateControls);
    map.addControl(scale);

    map.on("load", async () => {
      // Finds the origin and desitnation for the directionControls.
      const [origin, destination] = await Promise.all([
        getAddressFromCoordinates(currentUserPositions),
       
        // Coordinates (longitude / latitude) for the shelters that our database containes.
        getAddressFromCoordinates([-80.254170, 25.820250], [-80.431824, 25.514771], [-77.981190, 39.474790],
        [-80.227000, 25.771910], [-80.206700, 25.790840], [-80.254170, 25.820250], [-80.199210, 25.789780],
        [-80.187800, 25.834600], [-80.199210, 25.789780], [-80.208990, 25.788960], [-80.241800, 25.793020],
        [-80.321640, 25.859760], [-80.187800, 25.834600], [-80.132670, 25.813870], [-80.175670, 25.891060],
        [-80.188470, 25.812760], [-80.213280, 25.792259])
      ]);

      // Sets the origin and destination
      directionControls.setOrigin(origin);
      directionControls.setDestination(destination);
    });
  };

  // Adding longitude , latitude and enabled zoom in and zoom out to the map of Miami, Florida.
  // Access token for Mapbox is included in this function.
  const setUpMap = async () => {
    // gets the current user's location
    const position = await loadPosition();

    // Default longitude and latitude hardcoded for the middle of Miami , Florida.
    const { longitude = -80.191788, latitude = 25.761681 } = position.coords;

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

  // Component did mount.
  useEffect(() => void setUpMap(), []);

  return (
    <div
      style={{ height: 700, width: 800, border: "1px solid black" }}
      id="map-container"
    />
  );
};

export default () => <Map />;
