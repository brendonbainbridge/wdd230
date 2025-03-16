function runOnMondayWednesdayFriday(hour, minutes, func) {
    const twentyFourHours = 86400000; // One day in milliseconds
    const now = new Date();
    const targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minutes, 0, 0);

    // Helper function: Check if today is Monday (1), Wednesday (3), or Friday (5)
    const isMondayWednesdayFriday = (day) => day === 1 || day === 3 || day === 5;

    // Calculate delay until the next valid execution day and time
    let eta_ms = targetTime.getTime() - now.getTime();
    while (!isMondayWednesdayFriday((now.getDay() + Math.floor(eta_ms / twentyFourHours)) % 7)) {
        eta_ms += twentyFourHours; // Skip to the next day
    }
    if (eta_ms < 0) {
        eta_ms += twentyFourHours; // Adjust if the time has already passed
    }

    // Schedule the function
    setTimeout(() => {
        func(); // Execute the function at the target time

        // Open modal after 5 seconds
        const modal = document.getElementById("myModal");
        const span = document.getElementsByClassName("close")[0];
        if (modal && span) {
            setTimeout(() => { modal.style.display = "block"; }, 5000);

            // Close modal when clicking on <span> (x)
            span.onclick = () => { modal.style.display = "none"; };

            // Close modal when clicking outside the modal
            window.onclick = (event) => {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            };
        }

        // Schedule the function for every Monday, Wednesday, and Friday moving forward
        setInterval(() => {
            const currentDay = new Date().getDay();
            if (isMondayWednesdayFriday(currentDay)) {
                func();
            }
        }, twentyFourHours);
    }, eta_ms);
}
