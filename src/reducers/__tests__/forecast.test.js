import reducers from "../";

test("forecast reducer", () => {
  let state;
  state = reducers(
    { forecast: null },
    {
      type: "SET_FORECAST",
      payload: {
        location: {
          id: 3333164,
          name: "City and Borough of Leeds",
          coord: { lat: 53.7964, lon: -1.5477 },
          country: "GB",
          population: 715404
        },
        days: [
          [
            {
              timestamp: "2019-02-21 21:00:00",
              temperature: { min: 7.1, max: 7.5, current: 7.1 },
              humidity: 87,
              wind: 2.57,
              weather: { description: "clear sky", id: 800 }
            },
            {
              timestamp: "2019-02-22 00:00:00",
              temperature: { min: 5.7, max: 6, current: 5.7 },
              humidity: 91,
              wind: 2.61,
              weather: { description: "clear sky", id: 800 }
            }
          ]
        ]
      }
    }
  );
  expect(state).toEqual({
    forecast: {
      location: {
        id: 3333164,
        name: "City and Borough of Leeds",
        coord: { lat: 53.7964, lon: -1.5477 },
        country: "GB",
        population: 715404
      },
      days: [
        [
          {
            timestamp: "2019-02-21 21:00:00",
            temperature: { min: 7.1, max: 7.5, current: 7.1 },
            humidity: 87,
            wind: 2.57,
            weather: { description: "clear sky", id: 800 }
          },
          {
            timestamp: "2019-02-22 00:00:00",
            temperature: { min: 5.7, max: 6, current: 5.7 },
            humidity: 91,
            wind: 2.61,
            weather: { description: "clear sky", id: 800 }
          }
        ]
      ]
    }
  });
});
