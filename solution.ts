


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

        const diz = p.discount ?? 0;
        total = ((p.price*(1-diz/100)) * p.quantity ) + total; 
    }

    return total;

    }
}
