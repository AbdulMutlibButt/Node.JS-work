const req = require("request");
// const url =
//   "http://api.weatherstack.com/current?access_key=ba50f0841e3972445210dce550e03264&query=24.860735,67.001137";

// req({ url: url }, (error, response) => {
//   const data = JSON.parse(response.body);
//   console.log("there is currently " + data.current.temperature + " temperature");
//   console.log("there is currently " + data.current.weather_descriptions[0] + " temperature");
//   console.log("there is currently " + data.current.feelslike + " temperature");
// });
// const urls =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/karachi.json?access_token=pk.eyJ1IjoiYWJkdWxtdXRsaWIiLCJhIjoiY2wwMmM2aGttMDVvcTNmcWJlZXJ5MjR6OSJ9.TchqzsFIVfNfayYAtDIrnA";
// req({ url: urls, json: true }, (error, response) => {
//   if (error) {
//     console.log("please check your internet connection");
//   } else if (response.body.message) {
//     console.log(response.body.message);
//   } else {
//     console.log("longitutde", response.body.features[0].center[0]);
//     console.log("latitude", response.body.features[0].center[1]);
//   }
// });
const geocode = (address, callback) => {
  const urls =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiYWJkdWxtdXRsaWIiLCJhIjoiY2wwMmM2aGttMDVvcTNmcWJlZXJ5MjR6OSJ9.TchqzsFIVfNfayYAtDIrnA";
  req({ url: urls, json: true }, (error, response) => {
    if (error) {
      callback("please check your internet connection", undefined);
    } else if (response.body.message) {
      callback(response.body.message, undefined);
    } else {
      callback("", {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name,
      });
    }
  });
};

const forecast = (longitutde, latitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=ba50f0841e3972445210dce550e03264&query=" +
    longitutde +
    "," +
    latitude +
    " ";

  req({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("please check your internet connection", undefined);
    } else if (response.body.error) {
      callback("incorrect cordinates", undefined);
    } else {
      callback("", {
        location: response.body.location.name,
        temperature: response.body.current.temperature,
      });
    }
  });
};
const location = process.argv[2];
if (!location) {
  console.log("please provide the location");
} else {
  geocode(location, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      forecast(data.latitude, data.longitude, (error, data) => {
        console.log(error);
        console.log(data);
      });
    }
  });
}
