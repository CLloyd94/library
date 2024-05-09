const dialog = document.querySelector('dialog');
const buttonAddBook = document.querySelector('.btn-add-book');
const formAddBook = document.querySelector('.add-book-form');
const buttonCloseDialog = document.querySelector('.btn-cancel');
const cardContainer = document.querySelector('.card-container');

const myLibrary = [];

// When the user clicks the button, the 'add book to library' form pops up
buttonAddBook.addEventListener('click', () => {
    dialog.showModal();
});

// When the user presses the 'cancel' button on the dialog, the dialog closes
buttonCloseDialog.addEventListener('click', () => {
    dialog.close();
})

// Create book class
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    info() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}

// Function for capturing user's input and creating a book, then calling the updateCardContainer function to update DOM
function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    updateCardContainer(book);
}

// When the form is submitted, capture the user's input and use it to add a book to the library, then close the dialog
formAddBook.addEventListener('submit', (e) => {
    e.preventDefault();
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
    // Find the index of the book in the array and store in the card as an ID so we can remove the card later
    const bookIndex = myLibrary.indexOf(book);
    card.className = 'card';
    card.id = 'card-' + bookIndex; // Give the card an ID that includes the index
    // Add the card with the data from the book object
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
    // Add event listener to the remove button of the new card
    const removeButton = card.querySelector('.btn-remove-book');
    removeButton.addEventListener('click', () => {
        removeBookFromLibrary(bookIndex);
    });
    // Add event listener to the 'toggle read button' of the new card
    const toggleReadButton = card.querySelector('.btn-toggle-read');
    toggleReadButton.addEventListener('click', () => {
        toggleReadStatus(book);
    });
}

// Logic for removing book from library and DOM using the card index, which corresponds to the array index of the book
function removeBookFromLibrary(bookIndex) {
    if (bookIndex > -1) {
        myLibrary.splice(bookIndex, 1); // Remove book from array
        // Also remove the card from the DOM
        const cardToRemove = document.getElementById('card-' + bookIndex);
        cardToRemove.remove();
    }
}

// Logic for toggling read status
function toggleReadStatus(book) {
    // Whatever the value of read is e.g. true, change it to the opposite boolean e.g. false
    book.read = !book.read;
    const bookIndex = myLibrary.indexOf(book);
    const card = document.getElementById('card-' + bookIndex);
    const readParagraph = card.querySelector('.card-read');
    const toggleReadButton = card.querySelector('.btn-toggle-read');

    // Change the text and button accordingly, depending on if the book as been read or not
    readParagraph.textContent = book.read ? 'Already read' : 'Not yet read';
    toggleReadButton.textContent = book.read ? 'Mark as unread' : 'Mark as read';
};