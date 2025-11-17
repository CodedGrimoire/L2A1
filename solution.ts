


function formatValue(value: number | string  | boolean): number | string | boolean
 {
    if (typeof value === "string") 
      
      {
         let temp=value.toUpperCase();
        return temp;
    } 
  if (typeof value === "number") 
    
    {
      let temp =value*10;
        return temp;
    } 
    if(typeof value==="boolean") 
      
      {
        return !value;
    }


    return value;
}

// // Sample Input
// console.log(formatValue('helloOOgh')); // HELLO
// console.log(formatValue(-1));       // 50
// console.log(formatValue(false));    // false



function getLength(value: any[]| string): number 

{

    let temp:number;
    if (typeof value === "string")
        
    {
        temp =value.length;
        return temp;
    }
    
    if (Array.isArray(value))
        
    {
        temp =value.length;
        return temp;
    }

    
    return 0;
}


// console.log(getLength(''));   // 10
// console.log(getLength([])); // 4


class Person {

    name: string;
    age: number;

    constructor(name: string, age: number)
     {
        this.name = name;
        this.age = age;
    }

    getDetails(): string 
    
    {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}


// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());
type Boooks = {
    title: string;
    rating: number;
};

function filterByRating(Bookz: Boooks[]): Boooks[] 

{

     let temp: Boooks[] = []; 
      temp = Bookz.filter(Boooks => Boooks.rating >= 4);
    return temp;
}

// // Sample Input
// const books = [
//   { title: 'Book A', rating: 4.5 },
//   { title: 'Book B', rating: 3.2 },
//   { title: 'Book C', rating: 5.0 },
// ];

// console.log(filterByRating(books));
type Userss = {
    id: number;
     email: string;

      isActive: boolean;
    name: string;
   
   
};

function filterActiveUsers(Userz: Userss[]): Userss[] 

{
    let temp: Userss[] = [];                       

    temp = Userz.filter(Userss => Userss.isActive === true);

    return temp;
}

// // Sample Input
// const users = [
//   { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
//   { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
//   { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: false },
// ];

// console.log(filterActiveUsers(users));
interface Book {
    title: string;

     publishedYear: number;

      isAvailable: boolean;

    author: string;
   
   
}

function printBookDetails(book: Book): void 

{
    let availability = book.isAvailable ? "Yes" : "No";

    console.log(
        `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`  );
   
}

// // Sample Input
// const myBook: Book = {
//     title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald',
//     publishedYear: 1925,
//     isAvailable: false,
// };

// printBookDetails(myBook);
function getUniqueValues(
  arr1: (number | string)[],
  arr2: (number | string)[]
): (number | string)[] 
{

    let final: ( string | number)[] = [];
    let i:number;

    let p:number;
    let k:number;

    function exists(value: number | string): boolean 
    {
        for (i = 0; i < final.length; i++)
             {
            if (final[i] === value) 
                {
                return true;
            }
        }
        return false;
    }

    for (p = 0; p < arr1.length; p++) 
        {
        const val = arr1[p];
        if (val !== undefined && !exists(val)) 
        {
            final[final.length] = val;
        }
    }

    for (k = 0; k < arr2.length; k++) 
        
        {
        const val = arr2[k];
        if (val !== undefined && !exists(val)) 
            
        {
            final[final.length] = val;
        }
    }

    return final;
}

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];

// console.log(getUniqueValues(array1, array2));

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
