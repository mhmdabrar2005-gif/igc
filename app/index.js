function calculateamount() {
    var initialInvestment = parseFloat(document.getElementById("initialInvestment").value) || 0;
    var expectedGrowth = parseFloat(document.getElementById("expectedGrowth").value) || 0;
    var investmentDuration = parseFloat(document.getElementById("investmentDuration").value) || 0;
    var stepUp = parseFloat(document.getElementById("stepUp").value) || 0;

    var amount=0
    var i=1
    var montlygrowth=expectedGrowth/12;
    while((investmentDuration*12)+1>i){
        amount=(amount+initialInvestment)*(1+montlygrowth/100);
        if(i%12==0){
            initialInvestment*= (1 + stepUp/100);
        }
        i++;
    }
    var compoundingPeriod = parseFloat(document.getElementById("compoundingPeriod").value) || 0;
    while (compoundingPeriod > 0) {
        amount *= (1 + expectedGrowth / 100);
        compoundingPeriod--;
    }
    var finalAmount = document.getElementById("finalAmount");
    finalAmount.innerHTML = "Your final amount will be: " + amount.toFixed(0);
}