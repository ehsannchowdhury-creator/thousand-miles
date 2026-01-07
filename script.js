const tripType = document.getElementById("tripType");
const dropoff = document.getElementById("dropoffWrapper");
const hourly = document.getElementById("hourlyWrapper");

hourly.style.display = "none";

tripType.addEventListener("change", () => {
  if (tripType.value === "Hourly") {
    hourly.style.display = "block";
    dropoff.style.display = "none";
  } else {
    hourly.style.display = "none";
    dropoff.style.display = "block";
  }
});
