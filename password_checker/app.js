// Goal: Check if the password is longer than or equal to 6 characters 
// and does not include space

let userInput = prompt("Please enter your password");

if (userInput.length >= 6 && userInput.indexOf(' ') === -1) {
    console.log("Valid Password!!");
} else if (userInput.indexOf(' ') !== -1) {
    console.log("Password cannot contain space");
} else {
    console.log("Password must be 6+ characters");
}