let currentDisplay = "0";
let allBtns = document.querySelectorAll(".boxes");

// Selecting All buttons
for(btn of allBtns){
    btn.addEventListener("click", (e) => {
        appendToDisplay(value);
    });
}

function appendToDisplay(value) {
    if (currentDisplay === "0") {
        currentDisplay = value;
    } else {
        currentDisplay += value;
    }
    // function call
    updateDisplay();
}

// Updating The Display
function updateDisplay() {
    // change to innerText 
    const displayElement = document.getElementById("output");
    displayElement.innerText = currentDisplay;
}

// Calculating the result and adding it to Display
function evaluateResult() {
    try {
        // Using eval() function to evaluate mathematical expression
        const result = eval(currentDisplay);

        // convert to String and then append to Display
        currentDisplay = result.toString();

        updateDisplay();

    } catch (error) {
        currentDisplay = "Error";
        updateDisplay();
    }
}

// Deleting the last character
function del() {
    if (currentDisplay.length > 1) {
        currentDisplay = currentDisplay.slice(0, -1); // Remove the last character
    } else {
        currentDisplay = "0"; // Reset to "0" if only one character is left
    }
    updateDisplay();
}

// Clearing the output screen
function clearDisplay() {
    currentDisplay = "0";
    updateDisplay();
}
