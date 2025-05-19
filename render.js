/* DOM Elements */
const inputBookTitle = document.getElementById('title');
const inputBookAuthor = document.getElementById('author');
const inputBookGenre = document.getElementById('genre');
const addBookBtn = document.getElementById('addBook');
const fileInput = document.getElementById('file-input');
const uploadButton = document.getElementById('upload-button');
const previewImage = document.getElementById('preview-image');
const statusText = document.getElementById('status-text');

// Variable to store the current image data
let currentImageData = null;

/* add book from the form to the interface */
function addBook(){
    const bookTitle = inputBookTitle.value.trim();
    const bookAuthor = inputBookAuthor.value.trim();
    const bookGenre = inputBookGenre.value.trim();

    if(bookTitle && bookAuthor && bookGenre){
        const newBook = {
            title: bookTitle,
            author: bookAuthor,
            genre: bookGenre,
            cover: currentImageData // Add the image data to the book object
        };

        booksData.push(newBook);
        console.log('Added new book with cover:', newBook.cover ? 'Yes' : 'No');

        // Reset form fields
        inputBookTitle.value = '';
        inputBookAuthor.value = '';
        inputBookGenre.value = '';
        previewImage.src = '';
        previewImage.style.display = 'none';
        currentImageData = null;
        statusText.textContent = '';

        // Save to localStorage
        saveBooks();

        // Update display
        renderBooks(booksData);
    } else {
        statusText.textContent = 'Please fill all the fields';
        statusText.style.color = 'red';
    }
}

/* saving the books to the local storage */
function saveBooks(){
    localStorage.setItem('books', JSON.stringify(booksData));
}

/* loading the books to the user interface by getting it from the local storage */
function loadBooks(){
    const savedBooks = localStorage.getItem('books');

    if(savedBooks){
        booksData = JSON.parse(savedBooks);
        renderBooks(booksData);
    }
}

/* rendering the books on the interface */
function renderBooks(books){
    console.log('renderBooks is called with', books.length, 'books');

    const bookDisplay = document.getElementById('book-display');
    /* check if the container exists */
    if(!bookDisplay) {
        console.log('Books Container does not exist');
        return;
    }

    bookDisplay.innerHTML = '';

    /* if no books are found, display empty message */
    if(books.length === 0){
        console.log('No books are found, showing empty message');
        bookDisplay.innerHTML = `<p id="noResults">No books found</p>`;
        return;
    }

    const bookElements = [];

    books.forEach(book => {
        if(!book || typeof book.title !== 'string'){
            console.warn('Invalid book object:', book);
            return;
        }

        const DisplayDiv = document.createElement('div');
        DisplayDiv.className = 'book-card';
        
        // Use default image if no cover is available
        const coverImage = book.cover || 'https://via.placeholder.com/150x200?text=No+Cover';
        
        DisplayDiv.innerHTML = `
            <div class="book-header">
                <img src="${coverImage}" alt="Book cover of ${book.title}" class="book-img">
                <h3>${book.title}</h3>
            </div>
            <p><strong>Author:</strong> ${book.author || 'Unknown'}</p>
            <p><strong>Genre:</strong> ${book.genre || 'Unknown'}</p>
            <button class="delete-btn" data-title="${book.title}">Delete Book</button>
        `; /* data-title is used to store the book title inside the button element for it to remember which title its associated with */
        bookElements.push(DisplayDiv);
    });

    bookElements.forEach(element => {
        bookDisplay.appendChild(element);
    });

    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function() {
            const titleToDelete = this.getAttribute('data-title');
            deleteBook(titleToDelete);
        });
    });//button function

    console.log(`Successfully rendered ${books.length} books`);

    updateBooksCount();
}

/* deleting book */
function deleteBook(title){
    const index = booksData.filter(book => book.title === title)
    if(index !== -1){
        booksData.splice(index, 1)
        saveBooks()
        renderBooks(booksData)
        updateBooksCount()
    }
}
/* updating the books count */
function updateBooksCount(){
    const totalBooks = booksData.length;
    const booksCountElement = document.getElementById('books-count');
    booksCountElement.textContent = `All Books: ${totalBooks}`;
}

function handleFileSelect(e) {
    const files = e.target.files;
    
    if (files.length) {
        handleFiles(files);
    }
}

function handleFiles(files) {
    const file = files[0]; // Only handle the first file
    
    // Check if the file is an image
    if (!file.type.match('image.*')) {
        statusText.textContent = 'Please select an image file.';
        statusText.style.color = 'red';
        return;
    }
            
    // Display image preview
    displayPreview(file);
}

function displayPreview(file) {
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const imageData = e.target.result;
        previewImage.src = imageData;
        previewImage.style.display = 'block';
        
        // Store the image data for later use
        currentImageData = imageData;
        
        statusText.textContent = 'Image selected successfully!';
        statusText.style.color = 'green';
    };
    
    reader.readAsDataURL(file);
}

// Event listeners
addBookBtn.addEventListener('click', addBook);

uploadButton.addEventListener('click', function() {
    fileInput.click();
});

fileInput.addEventListener('change', handleFileSelect);


// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    renderBooks(booksData);
    loadBooks();
});
