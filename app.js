// Set the date for the new bike launch
const launchDate = new Date("2025-03-01T00:00:00").getTime();

// Update the countdown every second
const timer = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = launchDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // Stop the countdown and display a message when the time is up
  if (timeLeft < 0) {
    clearInterval(timer);
    document.getElementById("countdown").textContent = "The new bike has launched!";
  }
}, 1000);
