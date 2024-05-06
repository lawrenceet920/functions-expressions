const greet = function welcomeUser (fName) {
    // Welcome the user by their first name
    return `Welcome to Career Tech, ${fName}!`;
}
// Call the welcomeUser function and use the alert ( ) method to display the welcome message in an alert box
const firstName = 'Joshua';
alert(greet(firstName));