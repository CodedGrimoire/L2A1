function calculateTotalPrice(products) {
    if (products.length === 0) {
        return 0;
    }
    else {
        var total = 0;
        for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
            var p = products_1[_i];
            total = (p.price * p.quantity) + total;
        }
        return total;
    }
}
// Sample Input
var products = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 8, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];
console.log(calculateTotalPrice(products)); // 145
