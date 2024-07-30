function getTime(s) {
  let [h, m, sec] = s.split(":");

  if (sec.substring(2, sec.length) == "AM") {
    if (h == "12") {
      h = h * 1 - 12;
    }
  } else if (sec.substring(2, sec.length) == "PM") {
    if (h != "12") {
      h = h * 1 + 12;
    }
  }

  if (
    (h == 12 && sec.substring(2, sec.length) == "AM") ||
    (h == 0 && sec.substring(2, sec.length) == "AM")
  ) {
    console.log(`0${h}:${m}:${sec.substring(0, 2)}`);
  } else {
    console.log(`${h}:${m}:${sec.substring(0, 2)}`);
  }
}
getTime("06:40:03AM");
getTime("12:40:22AM");
getTime("12:45:54PM");
