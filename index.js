// Declare a variable in global scope using the var keyword
var customerName = 'bob';

// Write a function to uppercase the customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Write a function to set a global variable bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Write a function to overwrite the bestCustomer variable
function overwriteBestCustomer(newBestCustomer) {
  bestCustomer = newBestCustomer;
}

// Declare a constant in global scope
const leastFavoriteCustomer = 'Alice';

// Write a function that attempts to change a constant variable
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Bob'; // This line will throw an error
}

// Export the functions for testing
module.exports = {
  customerName,
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  changeLeastFavoriteCustomer,
};
