document.addEventListener('DOMContentLoaded', () => {
    function updateTime() {
        const timezoneElement = document.querySelector('.timezone');
        const now = new Date();
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        };
        const timeString = now.toLocaleTimeString('en-US', options);
        timezoneElement.innerHTML = `Toronto, Ontario <span class="time">${timeString}</span>`;
    }

    updateTime();
    setInterval(updateTime, 1000); // Update the time every second
});