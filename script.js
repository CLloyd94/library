const dialog = document.querySelector('dialog');
const buttonAddBook = document.querySelector('.btn-add-book');
const formAddBook = document.querySelector('.add-book-form');
const buttonCloseDialog = document.querySelector('.btn-cancel');
const cardContainer = document.querySelector('.card-container');
const cardContent = document.querySelector('.card-content');
const buttonRemoveBook = document.querySelector('.btn-remove-book');
const buttonToggleRead = document.querySelector('.btn-toggle-read');

const myLibrary = [];

// When the user clicks the button, the 'add book to library' form pops up
buttonAddBook.addEventListener('click', () => {
    dialog.showModal();
});

buttonCloseDialog.addEventListener('click', () => {
    dialog.close();
})

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

// Function for capturing user's input and creating a book, then calling the updateCardContainer function
function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    console.log(myLibrary);
    updateCardContainer(book);
}

// When the form is submitted, call the addBookToLibrary function with the user's input
formAddBook.addEventListener('submit', (e) => {
    e.preventDefault();
    // What these are missing I think is when the 'add book' button is clicked, updating the 'value' attribute
    const titleValue = document.getElementById('title').value;
    const authorValue = document.getElementById('author').value;
    const pagesValue = document.getElementById('pages').value;
    const readValue = document.getElementById('read').checked;
    addBookToLibrary(titleValue, authorValue, pagesValue, readValue);
    dialog.close();
});

// Add card to card container
function updateCardContainer(book) {
    const card = document.createElement('div');
    card.className = 'card';
    // Add the book's index in the array as a hidden number in the card. Will probably need to iterate through with a for loop
    card.innerHTML = `
        <div class="card-content">
            <h3 class="card-title">${book.title}</h3>
            <h4 class="card-author">${book.author}</h3>
            <p class="card-pages">${book.pages} pages</p>
            <p class="card-read">${book.read ? 'Already read' : 'Not yet read'}</p>
            <button class="btn-remove-book">Remove from Library</button>
            <button class="btn-toggle-read">${book.read ? 'Mark as unread' : 'Mark as read'}</button>
        </div>
    `;
    cardContainer.appendChild(card);
}

buttonRemoveBook.addEventListener('click', () => {
    // Retrieve the card's number
    // This number should be the same as the index of the book in the array 
    // Then, go through the array and remove the book at that index
});

function toggleReadStatus() {
    // This is where we would access the read status on the Book's prototype
    // if the text Content of the toggleRead is markUnread
    // change the read status property to false
    // Else change it to true
};

buttonToggleRead.addEventListener('click', () => {
    // Call the toggleReadStatus function
    

});