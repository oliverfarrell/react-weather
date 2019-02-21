export default function forecastReducer(state = null, action) {
  if (action.type === "SET_FORECAST") {
    return Object.assign({}, state, { ...action.payload });
  } else {
    return state;
  }
}
