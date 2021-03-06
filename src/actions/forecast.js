import { chunkBy } from "utils";

export function getForecast(latitude, longitude) {
  return function getForecastThunk(dispatch) {
    return fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=160784ae78a4455a21b77fd6a676ce92`
    )
      .then(response => response.json())
      .then(forecast => {
        const prep = forecast.list.map(hour => ({
          date: hour.dt_txt.substring(0, 10),
          timestamp: hour.dt_txt,
          temperature: {
            // round all values to 1 decimal place
            min: Math.round(hour.main.temp_min * 10) / 10,
            max: Math.round(hour.main.temp_max * 10) / 10,
            current: Math.round(hour.main.temp * 10) / 10
          },
          humidity: hour.main.humidity,
          wind: hour.wind.speed,
          weather: {
            description: hour.weather[0].description,
            id: hour.weather[0].id
          }
        }));

        const forecastGroupedByDay = chunkBy(prep, "date");

        const payload = {
          location: forecast.city,
          days: Object.values(forecastGroupedByDay)
        };

        return dispatch({
          type: "SET_FORECAST",
          payload
        });
      });
  };
}
