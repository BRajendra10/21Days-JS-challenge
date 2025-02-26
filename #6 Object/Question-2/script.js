const books = [
    {
        name: "Think and grow rich",
        autor: "Nepoleon hill",
        published: 1937,
        price: 240,
        copyes: 10000000,
    },
    {
        name: "The richest man in babylon",
        autor: "George S.Clason",
        published: 1926,
        price: 129,
        copyes: 200000,
    },
    {
        name: "Think and grow rich",
        autor: "Nepoleon hill",
        published: 1937,
        price: 240,
        copyes: 10000000,
    },
    {
        name: "crime and punishment",
        author: "fyodor dostoyvsky",
        published: 1866,
        price: 450.00,
        copyes: 15000000
    }
];

function recomendBook(Books, Price1, Price2) {
    for(book of Books){
        let bookPrice = book.price
        
        if(bookPrice >= price1 && bookPrice <= price2){
            console.log(book);
        }
        
    }
}

let price1 = prompt("Enter price range1: ");
price1 = parseInt(price1);

let price2 = prompt("Enter price range2: ");
price2 = parseInt(price2);

recomendBook(books, price1, price2);
// let myBook;
// let book1Price = books[0].price;
// let book2Price = books[1].price;
// let book3Price = books[2].price;
// let book4Price = books[3].price;

// if(book1Price >= price1 && book1Price <= price2){
//     myBook = books[0];
// }
// else if(book1Price >= price1 && book1Price <= price2){
//     myBook = books[1]; 
// }
// else if(book1Price >= price1 && book1Price <= price2){
//     myBook = books[2];
// }
// else if(book1Price >= price1 && book1Price <= price2){
//     myBook = books[3];
// }
// else{
//     console.log(`There is no book in this price range ${price1} to ${price2}`);
// }


// console.log(myBook);

// console.log(books[0]);