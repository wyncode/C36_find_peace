export const geolocationOptions = {
  enableHighAccuracy: true,
  maximumAge: 10000,
  timeout: 10000
};

const getCurrentPosition = _ =>
  new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(
      resolve,
      reject,
      geolocationOptions
    )
  );

export const loadPosition = async _ => {
  try {
    return await getCurrentPosition();
  } catch (error) {
    console.log("catching", error);
    return {
      coords: {
        longitude: -80.2044,
        latitude: 25.8028
      }
    };
  }
};
