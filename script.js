document.addEventListener("DOMContentLoaded", () => {
  const tripType = document.getElementById("tripType");
  const dropoffWrapper = document.getElementById("dropoffWrapper");
  const hourlyWrapper = document.getElementById("hourlyWrapper");
  const dropoffInput = document.getElementById("dropoff");
  const hoursInput = document.getElementById("hours");

  function updateTripFields() {
    const val = tripType.value;

    if (val === "Hourly") {
      hourlyWrapper.classList.remove("hidden");
      dropoffWrapper.classList.add("hidden");

      if (dropoffInput) dropoffInput.required = false;
      if (hoursInput) hoursInput.required = true;
    } else {
      hourlyWrapper.classList.add("hidden");
      dropoffWrapper.classList.remove("hidden");

      if (dropoffInput) dropoffInput.required = true;
      if (hoursInput) hoursInput.required = false;
    }
  }

  tripType.addEventListener("change", updateTripFields);
  updateTripFields(); // run once on load
});
