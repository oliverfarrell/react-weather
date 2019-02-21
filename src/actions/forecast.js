import { chunk } from "utils";

export function getForecast(latitude, longitude) {
  return function getForecastThunk(dispatch) {
    return fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=160784ae78a4455a21b77fd6a676ce92`
    )
      .then(response => response.json())
      .then(forecast => {
        const days = chunk(forecast.list, 8).map(hours => {
          return hours.map(hour => ({
            timestamp: hour.dt_txt,
            temperature: {
              min: Math.round(hour.main.temp_min),
              max: Math.round(hour.main.temp_max),
              current: Math.round(hour.main.temp)
            },
            humidity: hour.main.humidity,
            wind: hour.wind.speed,
            weather: {
              description: hour.weather[0].description,
              id: hour.weather[0].id
            }
          }));
        });

        const payload = {
          location: forecast.city,
          days
        };

        return dispatch({
          type: "SET_FORECAST",
          payload
        });
      });
  };
}
