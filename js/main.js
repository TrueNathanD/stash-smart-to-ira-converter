console.log("Hello, World.")

function calculate() {

    /* Grabs the variable values from the input boxes */
    var antHexaVal = parseFloat(document.getElementById("antHexaVal").value);
    var batHexaVal = parseFloat(document.getElementById("batHexaVal").value);
    var catHexaVal = parseFloat(document.getElementById("catHexaVal").value);
    var dogHexaVal = parseFloat(document.getElementById("dogHexaVal").value);
    var eelHexaVal = parseFloat(document.getElementById("eelHexaVal").value);
    var foxHexaVal = parseFloat(document.getElementById("foxHexaVal").value);

    /* Distributes eelHexaVal and foxHexaVal out evenly among the other variables */
    var distributedAmount = (eelHexaVal + foxHexaVal) / 4;
    var antBoxVal = antHexaVal + distributedAmount;
    var batBoxVal = batHexaVal + distributedAmount;
    var catBoxVal = catHexaVal + distributedAmount;
    var dogBoxVal = dogHexaVal + distributedAmount;
    
    /* Displays the new variable values */
    document.getElementById("antBoxVal").innerHTML = antBoxVal.toFixed(2);
    document.getElementById("batBoxVal").innerHTML = batBoxVal.toFixed(2);
    document.getElementById("catBoxVal").innerHTML = catBoxVal.toFixed(2);
    document.getElementById("dogBoxVal").innerHTML = dogBoxVal.toFixed(2);

    /* Divides the new variable values by 20 (gets % of $20) */
    var antBoxPer = antBoxVal / 20;
    var batBoxPer = batBoxVal / 20;
    var catBoxPer = catBoxVal / 20;
    var dogBoxPer = dogBoxVal / 20;
    document.getElementById("antBoxPer").innerHTML = antBoxPer.toFixed(2);
    document.getElementById("batBoxPer").innerHTML = batBoxPer.toFixed(2);
    document.getElementById("catBoxPer").innerHTML = catBoxPer.toFixed(2);
    document.getElementById("dogBoxPer").innerHTML = dogBoxPer.toFixed(2);

    /* Multiplies the new variable values that were divided by 20 by 115 (converts % to $ of $115) */
    var antPerOf = antBoxPer * 115;
    var batPerOf = batBoxPer * 115;
    var catPerOf = catBoxPer * 115;
    var dogPerOf = dogBoxPer * 115;
    document.getElementById("antPerOf").innerHTML = antPerOf.toFixed(2);
    document.getElementById("batPerOf").innerHTML = batPerOf.toFixed(2);
    document.getElementById("catPerOf").innerHTML = catPerOf.toFixed(2);
    document.getElementById("dogPerOf").innerHTML = dogPerOf.toFixed(2);
}

