function calculateTotalPrice(products) {
    var _a;
    if (products.length === 0) {
        return 0;
    }
    else {
        var total = 0;
        for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
            var p = products_1[_i];
            var diz = (_a = p.discount) !== null && _a !== void 0 ? _a : 0;
            total = ((p.price * (1 - diz / 100)) * p.quantity) + total;
        }
        return total;
    }
}
// // Sample Input
var products = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];
console.log(calculateTotalPrice(products)); // 145
