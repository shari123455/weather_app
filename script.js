
// const getWeather = (city) => {
//   cityname.innerHTML = city

//   let p = fetch("https://goweather.herokuapp.com/weather/" + city)
//   p.then((value1) => {
//     // console.log(value1.status)
//     // console.log(value1.ok)

//     return value1.json()

//   })
//     .then((value2) => {
//       console.log(value2)
//       temperature.innerHTML = value2.temperature
//       wind.innerHTML = value2.wind
//       description.innerHTML = value2.description
//       // forecast.innerHTML= value2.forecast
//       var forecast = '[{"day": "1", "temperature": "+34 °C", "wind": "32 km/h"}, {"day": "2", "temperature": "+34 °C", "wind": "33 km/h"}, {"day": "3", "temperature": "+30 °C", "wind": "31 km/h"}]';

// // Parse the JSON data
// var dataArray = JSON.parse(forecast);

// // Access the array data and build the HTML content
// var forecastHTML = '';
// for (var i = 0; i < dataArray.length; i++) {
//   var item = dataArray[i];
//   forecastHTML += "Day: " + item.day + ", Temperature: " + item.temperature + ", Wind: " + item.wind + "<br>";
// }

// // Update the HTML content of the forecast container
// var forecast = document.getElementById('forecast');
// forecast.innerHTML = forecastHTML;

      


      
  








      
      



//     })
//   //   var forecast = '[{"day": "1", "temperature": "+34 °C" ,  "wind": "32 km/h"}, {"day": "2", "temperature": "+34 °C" ,  "wind": "33 km/h"},{"day": "3", "temperature": "+30 °C" ,  "wind": "31 km/h"} ]';

//   // // Parse the JSON data
//   // var dataArray = JSON.parse(forecast);

//   // // Access the array data
//   // for (var i = 0; i < dataArray.length; i++) {
//   //   var item = dataArray[i];
//   //   console.log("day: " + item.day + ", temperature: " + item.temperature," wind: " + item.wind);
//   // }
  
    

// }
// submit.addEventListener("click", (e) => {
//   e.preventDefault()
//   getWeather(city.value)
// })
// getWeather("karachi")

  //////////////////////////////////this is new version of code////////////////////////////////////////


const getWeather = (city) => {
  cityname.innerHTML = city;

  let p = fetch("https://goweather.herokuapp.com/weather/" + city);
  p.then((value1) => {
    return value1.json();
  })
    .then((value2) => {
      console.log(value2);
      temperature.innerHTML = value2.temperature;
      wind.innerHTML = value2.wind;
      description.innerHTML = value2.description;
      
      // Fetch the forecast data for the new city
      fetch("https://goweather.herokuapp.com/weather/" + city)
        .then((response) => response.json())
        .then((data) => {
          // Update the forecast array with the new data
          var forecast = data.forecast;
          
          // Access the forecast array data and build the HTML content
          var forecastHTML = '';
          for (var i = 0; i < forecast.length; i++) {
            var item = forecast[i];
            forecastHTML += "Day: " + item.day + ", Temperature: " + item.temperature + ", Wind: " + item.wind + "<br>";
          }
          
          // Update the HTML content of the forecast container
          var forecastContainer = document.getElementById('forecast');
          forecastContainer.innerHTML = forecastHTML;
        })
        .catch((error) => {
          console.error('Error fetching forecast data:', error);
        });
    });
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
getWeather("karachi");
