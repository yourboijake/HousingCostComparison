//function for home price slider
document.getElementById('home-price-slider').addEventListener('input',
function() {
    var val = this.value;
    document.getElementById('home-price-value').value = val;
    updateResult();
})

//function for down payment % slider
document.getElementById('down-payment-%-slider').addEventListener('input',
function() {
    var val = this.value;
    document.getElementById('down-payment-%-value').value = val;
    updateResult();
})

//function for interest rate % slider
document.getElementById('interest-rate-%-slider').addEventListener('input',
function() {
    var val = this.value;
    document.getElementById('interest-rate-%-value').value = val;
    updateResult();
})

//function for HOA slider
document.getElementById('hoa-slider').addEventListener('input',
function() {
    var val = this.value;
    document.getElementById('hoa-value').value = val;
    updateResult();
})

//run updateResult when compute button is clicked
document.getElementById('compute').addEventListener('click', updateResult);

function updateResult() {
    var homePrice = Number(document.getElementById('home-price-value').value);
    var downPaymentPercent = Number(document.getElementById('down-payment-%-value').value);
    var interestPercent = Number(document.getElementById('interest-rate-%-value').value);
    var HOAPayment = Number(document.getElementById('hoa-value').value);

    //console.log(homePrice, downPaymentPercent, interestPercent, HOAPayment);

    var equityCost = (0.02 * (homePrice * downPaymentPercent)) / 12;
    var debtCost = (interestPercent * homePrice * (1 - downPaymentPercent)) / 12;
    var otherCosts = (0.02 * homePrice) / 12 + HOAPayment;

    //console.log(equityCost, debtCost, otherCosts);

    document.getElementById('result').innerHTML = Math.round(equityCost + debtCost + otherCosts);
}