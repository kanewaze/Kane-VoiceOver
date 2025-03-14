document.addEventListener("DOMContentLoaded", function () {
    const ratePer30SecInput = document.getElementById("ratePer30Sec");
    const durationSecInput = document.getElementById("durationSec");
    const durationMinInput = document.getElementById("durationMin");
    const priceUSD = document.getElementById("priceUSD");
    const priceEGP = document.getElementById("priceEGP");

    const exchangeRate = 50;

    function calculatePrice() {
        let ratePer30Sec = parseFloat(ratePer30SecInput.value);
        let durationSec = parseFloat(durationSecInput.value);

        if (isNaN(ratePer30Sec) || isNaN(durationSec) || durationSec <= 0) {
            priceUSD.textContent = "0";
            priceEGP.textContent = "0";
            return;
        }

        let priceInUSD = (durationSec / 30) * ratePer30Sec;
        let priceInEGP = priceInUSD * exchangeRate;

        priceUSD.textContent = priceInUSD.toFixed(2);
        priceEGP.textContent = priceInEGP.toFixed(2);
    }

    ratePer30SecInput.addEventListener("input", calculatePrice);
    durationSecInput.addEventListener("input", calculatePrice);
    durationMinInput.addEventListener("input", function () {
        durationSecInput.value = durationMinInput.value * 60;
        calculatePrice();
    });

    calculatePrice();
});
