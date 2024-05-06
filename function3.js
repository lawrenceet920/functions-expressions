const bio = function showBiography (fName, lName, userAge) {
    // Build a template string containing the user's full name and age
    return `Hello! My name is ${fName} ${lName} and I am ${userAge} years old.`;
}
// Call the showBiography function and display the info
// about the user in the browser console
const firstName = 'Tania';
const lastName = 'Rascia';
const age = 24;
console.log(bio(firstName, lastName, age));