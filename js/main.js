console.log("Hello, World.")

window.onload = function() {
    document.body.classList.remove("body-fade-in");
};

function calculate() {
    /* Grabs the variable values from the input boxes */
    let antHexaVal = parseFloat(document.getElementById("antHexaVal").value);
    let batHexaVal = parseFloat(document.getElementById("batHexaVal").value);
    let catHexaVal = parseFloat(document.getElementById("catHexaVal").value);
    let dogHexaVal = parseFloat(document.getElementById("dogHexaVal").value);
    let eelHexaVal = parseFloat(document.getElementById("eelHexaVal").value);
    let foxHexaVal = parseFloat(document.getElementById("foxHexaVal").value);

    /* Displays the total value entered by the user */
    let totalHexaVal = (antHexaVal + batHexaVal + catHexaVal + dogHexaVal + eelHexaVal + foxHexaVal);
    document.getElementById("totalHexaVal").innerHTML = totalHexaVal.toFixed(2);

    /* Distributes eelHexaVal and foxHexaVal out evenly among the other variables */
    let distributedAmount = (eelHexaVal + foxHexaVal) / 4;
    let antBoxVal = antHexaVal + distributedAmount;
    let batBoxVal = batHexaVal + distributedAmount;
    let catBoxVal = catHexaVal + distributedAmount;
    let dogBoxVal = dogHexaVal + distributedAmount;

    /* Displays the total value remaining */
    let totalBoxVal = (antBoxVal + batBoxVal + catBoxVal + dogBoxVal);
    document.getElementById("totalBoxVal").innerHTML = totalBoxVal.toFixed(2);
    
    /* Displays the new variable values */
    document.getElementById("antBoxVal").innerHTML = antBoxVal.toFixed(2);
    document.getElementById("batBoxVal").innerHTML = batBoxVal.toFixed(2);
    document.getElementById("catBoxVal").innerHTML = catBoxVal.toFixed(2);
    document.getElementById("dogBoxVal").innerHTML = dogBoxVal.toFixed(2);

    /* Divides the new variable values by 20 (gets % of $20) */
    let antBoxPer = antBoxVal / 20;
    let batBoxPer = batBoxVal / 20;
    let catBoxPer = catBoxVal / 20;
    let dogBoxPer = dogBoxVal / 20;
    document.getElementById("antBoxPer").innerHTML = (antBoxPer * 100).toFixed(2);
    document.getElementById("batBoxPer").innerHTML = (batBoxPer * 100).toFixed(2);
    document.getElementById("catBoxPer").innerHTML = (catBoxPer * 100).toFixed(2);
    document.getElementById("dogBoxPer").innerHTML = (dogBoxPer * 100).toFixed(2);

    /* Gets the values for the initial summary and percentage */
    let antHexaValSummary = antHexaVal;
    let antBoxPerSummary = (antHexaVal / totalHexaVal) * 100;

    let batHexaValSummary = batHexaVal;
    let batBoxPerSummary = (batHexaVal / totalHexaVal) * 100;

    let catHexaValSummary = catHexaVal;
    let catBoxPerSummary = (catHexaVal / totalHexaVal) * 100;

    let dogHexaValSummary = dogHexaVal;
    let dogBoxPerSummary = (dogHexaVal / totalHexaVal) * 100;

    let eelHexaValSummary = eelHexaVal;
    let eelBoxPerSummary = (eelHexaVal / totalHexaVal) * 100;

    let foxHexaValSummary = foxHexaVal;
    let foxBoxPerSummary = (foxHexaVal / totalHexaVal) * 100;

    /* Displays the total percent used in calculation */
    document.getElementById("totalBoxPer").innerHTML = (antBoxPer + batBoxPer + catBoxPer + dogBoxPer).toFixed(2) * 100;

    /* Multiplies the new variable values that were divided by 20 by 115 (converts % to $ of $115) */
    let antPerOf = antBoxPer * 115;
    let batPerOf = batBoxPer * 115;
    let catPerOf = catBoxPer * 115;
    let dogPerOf = dogBoxPer * 115;
    document.getElementById("antPerOf").innerHTML = antPerOf.toFixed(2);
    document.getElementById("batPerOf").innerHTML = batPerOf.toFixed(2);
    document.getElementById("catPerOf").innerHTML = catPerOf.toFixed(2);
    document.getElementById("dogPerOf").innerHTML = dogPerOf.toFixed(2);

    let totalPerOf = (antPerOf + batPerOf + catPerOf + dogPerOf)
    document.getElementById("totalPerOf").innerHTML = totalPerOf.toFixed(2);

    /* Updates first values in summary text */
    document.getElementById("antHexaValSummary").textContent = antHexaValSummary.toFixed(2);
    document.getElementById("batHexaValSummary").textContent = batHexaValSummary.toFixed(2);
    document.getElementById("catHexaValSummary").textContent = catHexaValSummary.toFixed(2);
    document.getElementById("dogHexaValSummary").textContent = dogHexaValSummary.toFixed(2);
    document.getElementById("eelHexaValSummary").textContent = eelHexaValSummary.toFixed(2);
    document.getElementById("foxHexaValSummary").textContent = foxHexaValSummary.toFixed(2);

    document.getElementById("antBoxPerSummary").textContent = antBoxPerSummary.toFixed(2);
    document.getElementById("batBoxPerSummary").textContent = batBoxPerSummary.toFixed(2);
    document.getElementById("catBoxPerSummary").textContent = catBoxPerSummary.toFixed(2);
    document.getElementById("dogBoxPerSummary").textContent = dogBoxPerSummary.toFixed(2);
    document.getElementById("eelBoxPerSummary").textContent = eelBoxPerSummary.toFixed(2);
    document.getElementById("foxBoxPerSummary").textContent = foxBoxPerSummary.toFixed(2);
    

    /* Updates second values in summary text */
    document.getElementById("antPerOfInvested").textContent = antPerOf.toFixed(2);
    document.getElementById("batPerOfInvested").textContent = batPerOf.toFixed(2);
    document.getElementById("catPerOfInvested").textContent = catPerOf.toFixed(2);
    document.getElementById("dogPerOfInvested").textContent = dogPerOf.toFixed(2);
}

/* The reset function. Clears all fields of values */
function reset() {
    /* Clears the input fields */
    document.getElementById("antHexaVal").value = "0";
    document.getElementById("batHexaVal").value = "0";
    document.getElementById("catHexaVal").value = "0";
    document.getElementById("dogHexaVal").value = "0";
    document.getElementById("eelHexaVal").value = "0";
    document.getElementById("foxHexaVal").value = "0";

    /* Clears the calculated values */
    document.getElementById("totalHexaVal").innerHTML = "";

    document.getElementById("antBoxVal").innerHTML = "";
    document.getElementById("batBoxVal").innerHTML = "";
    document.getElementById("catBoxVal").innerHTML = "";
    document.getElementById("dogBoxVal").innerHTML = "";

    document.getElementById("antBoxPer").innerHTML = "";
    document.getElementById("batBoxPer").innerHTML = "";
    document.getElementById("catBoxPer").innerHTML = "";
    document.getElementById("dogBoxPer").innerHTML = "";

    document.getElementById("totalBoxVal").innerHTML = "";

    document.getElementById("totalBoxPer").innerHTML = "";

    document.getElementById("antPerOf").innerHTML = "";
    document.getElementById("batPerOf").innerHTML = "";
    document.getElementById("catPerOf").innerHTML = "";
    document.getElementById("dogPerOf").innerHTML = "";

    document.getElementById("totalPerOf").innerHTML = "";

    /* Clears the summary values */
    document.getElementById("antHexaValSummary").innerHTML = "";
    document.getElementById("batHexaValSummary").innerHTML = "";
    document.getElementById("catHexaValSummary").innerHTML = "";
    document.getElementById("dogHexaValSummary").innerHTML = "";
    document.getElementById("eelHexaValSummary").innerHTML = "";
    document.getElementById("foxHexaValSummary").innerHTML = "";

    document.getElementById("antBoxPerSummary").innerHTML = "";
    document.getElementById("batBoxPerSummary").innerHTML = "";
    document.getElementById("catBoxPerSummary").innerHTML = "";
    document.getElementById("dogBoxPerSummary").innerHTML = "";
    document.getElementById("eelBoxPerSummary").innerHTML = "";
    document.getElementById("foxBoxPerSummary").innerHTML = "";

    document.getElementById("antPerOfInvested").innerHTML = "";
    document.getElementById("batPerOfInvested").innerHTML = "";
    document.getElementById("catPerOfInvested").innerHTML = "";
    document.getElementById("dogPerOfInvested").innerHTML = "";
}

/* Adds an event listener for the reset button */
document.getElementById("resetButton").addEventListener("click", reset);

/* Adds an event listener for the calculate button */
document.getElementById("calculateButton").addEventListener("click", calculate);

