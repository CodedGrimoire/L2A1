type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};

function calculateTotalPrice(products: Product[]): number
{
    if (products.length === 0) 
    {
        return 0;
    }
    else{
    let total:number = 0;

    for (const p of products) 
        
    {
        total = (p.price * p.quantity) + total; 
    }

    return total;

    }
}

// // Sample Input
// const products = [
//   { name: 'Pen', price: 10, quantity: 2 },
//   { name: 'Notebook', price: 25, quantity: 8, discount: 10 },
//   { name: 'Bag', price: 50, quantity: 1, discount: 20 },
// ];

// console.log(calculateTotalPrice(products));  // 145
