document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("bookingForm");
    const roomTypeSelect = document.getElementById("roomType");
    const roomRateParagraph = document.getElementById("roomRate");
    const advancePaymentInput = document.getElementById("advancePayment");
    const totalCostParagraph = document.getElementById("totalCost");
    const additionalChargesInput = document.getElementById("numberOfPeople");

    // Define room rates
    const roomRates = {
        single: 100,
        double: 150,
        suite: 200
    };

    // Update room rate and total cost when room type changes
    roomTypeSelect.addEventListener("change", function () {
        const selectedRoomType = roomTypeSelect.value;
        const roomRate = roomRates[selectedRoomType];
        roomRateParagraph.textContent = `Room Rate: $${roomRate}`;
        calculateTotalCost();
    });

    // Update total cost when advance payment or additional charges change
    advancePaymentInput.addEventListener("input", calculateTotalCost);
    additionalChargesInput.addEventListener("input", calculateTotalCost);

    // Calculate the total cost
    function calculateTotalCost() {
        const selectedRoomType = roomTypeSelect.value;
        const roomRate = roomRates[selectedRoomType];
        const advancePayment = parseFloat(advancePaymentInput.value) || 0;
        const additionalCharges = parseFloat(additionalChargesInput.value) || 0;

        const totalCost = roomRate + additionalCharges - advancePayment;
        totalCostParagraph.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
    }

    // Prevent the form from submitting
    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();
        // You can add code here to handle form submission, e.g., send data to a server.
    });
});