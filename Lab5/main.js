function populateTimeSlots(start, end, interval) {
    const select = document.getElementById('appointment');
    var currentTime = start;

    while (currentTime < end) {
        const option = document.createElement('option');
        const timeString = new Date(currentTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
        option.value = timeString;
        option.textContent = timeString;
        console.log(option)
        select.appendChild(option);

        // Increment the current time by the interval
        currentTime.setMinutes(currentTime.getMinutes() + interval);
    }
}

const startTime = new Date();
startTime.setHours(12, 0, 0);

const endTime = new Date();
endTime.setHours(18, 0, 0);

populateTimeSlots(startTime, endTime, 15);

// Additional code for lab5:
function handleBookingSubmit() {
    // can add form validation and processing here
    // 
    //
    // placeholder for additional code if need validation..
    //
    //
    // just showing the credit card modal below
    $('#section6').modal('show');
}
