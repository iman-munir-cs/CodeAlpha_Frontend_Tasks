 // Selecting DOM Elements
const screen = document.getElementById('calc-screen');
const buttons = document.querySelectorAll('.btn');

let currentInput = "";

// Loop through all buttons
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerText;

        // 1. If Clear Button is clicked
        if (buttonText === 'C') {
            currentInput = "";
            screen.value = "0";
        } 
        
        // 2. If Backspace Button is clicked
        else if (buttonText === '⌫') {
            currentInput = currentInput.slice(0, -1);
            screen.value = currentInput || "0";
        } 
        
        // 3. If Equal Button is clicked (Calculate)
        else if (buttonText === '=') {
            try {
                if (currentInput !== "") {
                    // Calculating the string expression
                    let result = eval(currentInput);
                    screen.value = result;
                    currentInput = result.toString(); // code continues with result
                }
            } catch (error) {
                screen.value = "Error";
                currentInput = "";
            }
        } 
        
        // 4. For regular numbers and operators
        else {
            // Prevent leading zeros issues
            if (screen.value === "0" && buttonText !== '.') {
                currentInput = buttonText;
            } else {
                currentInput += buttonText;
            }
            screen.value = currentInput;
        }
    });
});