var customerName = "bob";
function upperCaseCustomerName() {
    customerName=customerName.toUpperCase();
}
function setBestCustomer() {
    this.bestCustomer;
    bestCustomer = 'not bob';
}
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}
const leastFavoriteCustomer = '';
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'bob';
}