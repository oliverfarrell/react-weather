export * from "./spacing";
export * from "./typography";
export * from "./colors";

export const MEDIA_QUERIES = {
  MOBILE: "320px",
  TABLET: "641px",
  DESKTOP: "1099px"
};

export function chunkBy(array, key) {
  return array.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}

export function getDay(date) {
  // some browsers don't support yyyy-mm-dd
  const trimmed = date.replace(/-/g, "/");
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const index = new Date(trimmed).getDay();

  return days[index];
}

export function formatTime(date) {
  // some browsers don't support yyyy-mm-dd
  const trimmed = date.replace(/-/g, "/");
  const time = new Date(trimmed);

  return time.toLocaleString("en-GB", { hour: "numeric", hour12: true });
}

export function formatDate(timestamp) {
  // some browsers don't support yyyy-mm-dd
  const trimmed = timestamp.replace(/-/g, "/");
  const date = new Date(trimmed);
  const options = { year: "numeric", month: "long", day: "numeric" };

  return date.toLocaleDateString("en-GB", options);
}
