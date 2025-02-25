//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    // Create a <p> element with id="timer"
    let timerElement = document.createElement("p");
    timerElement.id = "timer";
    document.body.appendChild(timerElement);

    // Function to update the time
    function updateTime() {
        let now = new Date();
        let formattedTime = now.toLocaleString(); // Format date and time
        timerElement.textContent = formattedTime;
    }

    // Update time every second
    setInterval(updateTime, 1000);

    // Initial call to display time immediately
    updateTime();
});

