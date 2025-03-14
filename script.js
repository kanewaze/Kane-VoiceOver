/* JavaScript File: script.js */
function calculatePrice() {
    let duration = document.getElementById('duration').value;
    let pricePer30Sec = document.getElementById('pricePer30Sec').value;
    let dollarToEgp = 50;
    let priceInDollars = (duration / 30) * pricePer30Sec;
    let priceInEgp = priceInDollars * dollarToEgp;
    document.getElementById('result').innerText = `التكلفة: ${priceInDollars.toFixed(2)} دولار (${priceInEgp.toFixed(2)} جنيه)`;
}

function syncMinutes() {
    let seconds = document.getElementById('duration').value;
    document.getElementById('durationMin').value = (seconds / 60).toFixed(2);
}

function syncSeconds() {
    let minutes = document.getElementById('durationMin').value;
    document.getElementById('duration').value = Math.round(minutes * 60);
}