const buttonAddBook = document.querySelector('.btn-add-book');
const formAddBook = document.querySelector('.add-book-form');
const cardContainer = document.querySelector('.card-container');
const card = document.querySelector('.card');
const cardContent = document.querySelector('.card-content');
const buttonRemoveBook = document.querySelector('.btn-remove-book');
const buttonToggleRead = document.querySelector('.btn-toggle-read');


const myLibrary = [];

// the constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    };
}


function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    console.log(myLibrary);
}


formAddBook.addEventListener('submit', (e) => {
    e.preventDefault();
    // What these are missing I think is when the 'add book' button is clicked, updating the 'value' attribute
    const titleValue = document.getElementById('title').value;
    const authorValue = document.getElementById('author').value;
    const pagesValue = document.getElementById('pages').value;
    const readValue = document.getElementById('read').checked;
    addBookToLibrary(titleValue, authorValue, pagesValue, readValue);
});

const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
    // .card - title.innerTextContent = title;
    
});




// digits.forEach((digit) => {
//     digit.addEventListener('click', () => {
//         if (startNewCalculation) {
//             displayValue = '';
//             startNewCalculation = false;
//         }
//         // Add all numbers inputted to the display value
//         displayValue += digit.textContent;
//         // Then we need to show the displayValue in the display div's textContent.
//         display.textContent = displayValue;
//         // If there's no operator
//         if (!operator) {
//             // Convert what's in the display to a number and assign to the first number
//             firstNum = Number(displayValue);
//             // Put the first number in the first argument of the expression array
//             expression[0] = firstNum;
//             // If there is an operator
//         } else {
//             // Then add the input to the second number
//             secondNum = Number(displayValue);
//             // Then we add the second number to the expression array
//             expression[2] = secondNum;
//         }
//     });
// });


// const operators = document.querySelectorAll('.operator');
// operators.forEach((op) => {
//     op.addEventListener('click', () => {
//         if (startNewCalculation) {
//             // If starting a new calculation after a result, keep the result as firstNum
//             expression = [firstNum]; // Start with the previous result
//             startNewCalculation = false;
//         } else if (expression.length === 3) {
//             // If an operation is already in progress, calculate it before starting the next
//             result = operate(...expression);
//             display.textContent = String(result);
//             expression = [result]; // Use the result as the starting point for the next operation
//             firstNum = result;
//         }
//         operator = op.textContent; // Set the new operator
//         expression[1] = operator; // Update the expression with the new operator
//         displayValue = ''; // Reset displayValue for new number input
//     });
// });





// Write a function that loops through the array and displays each book on the page. 
// You can display them in some sort of table, or each on their own “card”. 
// It might help for now to manually add a few books to your array so you can see the display.


// create the function that toggles a book’s read status on your Book prototype instance.