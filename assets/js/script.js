const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const footer = document.querySelector("i");
let hour = new Date().getHours();
let minutes = new Date().getMinutes();
let image = document.querySelector("img");
const hourText = document.querySelector(".hours");
const minutesText = document.querySelector(".minutes");
hourText.innerHTML = hour;
if (minutes < 10) {
  minutes = "0" + minutes;
}
minutesText.innerHTML = minutes;

if (hour >= 6 && hour <= 12) {
  body.style.backgroundColor = "rgb(207, 251, 125)";
  h1.style.color = "black";
  footer.style.color = "black";
  image.setAttribute("src", "assets/images/morning.jpg");
} else if (hour >= 13 && hour <= 18) {
  body.style.backgroundColor = "rgb(116, 111, 47)";
  image.setAttribute("src", "assets/images/afternoon.jpg");
} else {
  body.style.backgroundColor = "rgb(64, 63, 63)";
  image.setAttribute("src", "assets/images/night.jpg");
}
