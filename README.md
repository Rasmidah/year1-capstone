# Book Management System JavaScript Code Explanation
This document provides a detail explanation of JavaScript code of the Book Management system. The application is a simple yet complete book management built with HTML, CSS, and JavaScript.

### Table of Contents
1. [Naming Variable and Indentation](#naming-variable-and-indentation)
2. [Function Naming and Modularity](#function-naming-and-modularity)
3. [Arrays and Objects Usage](#arrays-and-objects-usage)
4. [Array Methods](#array-methods)
5. [Looping or Iteration](#looping-or-iteration)
6. [JSON Handling](#json-handling)
7. [Web Storage](#web-storage)
8. [Saving and Retrieving User Books Data](#saving-and-retrieving-user-books-data)
9. [Cookie Handling with Expiry](#cookie-handling-with-expiry)
10. [DOM Manipulation](#dom-manipulation)
11. [CSS Manipulation via JS](#css-manipulation-via-js)
12. [Theme Preference](#theme-preference)
13. [Error Handling](#error-handling)
14. [Timer and Date Object](#timer-and-date-object)
15. [Math method](#math-method)
16. [Event Listeners and Shortcuts](#event-listeners-and-shortcuts)
17. [Real-time Search](#real-time-search)
18. [Error Handling](#error-handling)
19. [Regex Handling](#regex-handling)
20. [Comments and Code Readability](#comments-and-code-readability)

### JavaScript Functionality
The JavaScript code handles all the dynamic behaviour of the Book Management System

#### Naming Variable and Indentation
```javascript
const inputBookTitle = document.getElementById('title');
const inputBookAuthor = document.getElementById('author');
const inputBookGenre = document.getElementById('genre');
const addBookBtn = document.getElementById('addBook');
const fileInput = document.getElementById('file-input');
const uploadButton = document.getElementById('upload-button');
const previewImage = document.getElementById('preview-image');
const statusText = document.getElementById('status-text');
```
This section selects all the necessary DOM elements that will be manipulated. Descriptive camelCase names and consistent indentation.

#### Function Naming and Modularity
```javascript
function addBook(){...}
function saveBooks(){...}
function loadBooks(){...}
function renderBooks(books){...}
```
Clear function names, verb-based, clearly named, modular function.

#### Arrays and Objects Usage
```javascript
const booksData = 
[
    {
        title: "The Broken Vows", 
        author: "Catharina Maura",
        genre: "Cotemporary Romance",
        cover: "./images/theBrokenVows.jpg"
    },
    {
        title: "The Wrong Bride", 
        author: "Catharina Maura",
        genre: "Cotemporary Romance",
        cover: "./images/theWrongBride.jpg"

    },
    {
        title: "The Secret Fiance", 
        author: "Catharina Maura",
        genre: "Cotemporary Romance",
        cover:"./images/theSecretFiance.jpg"

    }
];
```
Use of arrays, objects, and nesting.

#### Array Methods
```javascript
const filteredProducts = books.filter(book => {
    const titleMatch = book.title.toLowerCase().includes(searchTerm)
    const authorMatch = book.author.toLowerCase().includes(searchTerm)
    const genreMatch = book.genre.toLowerCase().includes(searchTerm)

    return titleMatch || authorMatch || genreMatch;
    })
```
Use of `filter` method, an array method that creates a new array containing only the items that match a condition.

#### Looping or Iteration
```javascript
bookElements.forEach(element => {
        bookDisplay.appendChild(element);
    });
```
Efficient iteration through books data for dynamic rendering.

#### JSON Handling
```javascript
function saveBooks(){
    localStorage.setItem('books', JSON.stringify(booksData));
}

function loadBooks(){
    const savedBooks = localStorage.getItem('books');

    if(savedBooks){
        booksData = JSON.parse(savedBooks);
        renderBooks(booksData);
    }
}
```
Stores `localStorage.setItem` , parses `JSON.parse`, and manipulates JSON.

#### Web Storage
```javascript
sessionStorage.setItem('timeOnPage', sessionSeconds.toString())
```
Session storage for tracking time.

#### Saving and Retrieving User Books Data
```javascript
localStorage.setItem('books', JSON.stringify(booksData));

const savedBooks = localStorage.getItem('books');
```
Saving `setItem` and retrieving `getItem` user's books data.

#### Cookie Handling with Expiry
```javascript
const expiryDate = new Date()
    expiryDate.setDate(expiryDate.getDate() + 7);
    document.cookie = `visitedBefore=true; expires=${expiryDate.toUTCString()}; path=/`;
```
Set, read, and delete cookie with expiry.

#### DOM Manipulation
```javascript
DisplayDiv.innerHTML = `
    <div class="book-header">
    <img src="${coverImage}" alt="Book cover of ${book.title}" class="book-img">
    <h3>${book.title}</h3>
    </div>
    <p><strong>Author:</strong> ${book.author || 'Unknown'}</p>
    <p><strong>Genre:</strong> ${book.genre || 'Unknown'}</p> `;
```
Dynamically create and updates DOM elements.

#### CSS Manipulation via JS
```javascript
messageDiv.id = "longSessionMessage"
messageDiv.style.backgroundColor = 'var(--bg-color)'
messageDiv.style.color = 'var(--text-color)'
messageDiv.style.borderRadius ='8px'
messageDiv.style.textAlign = 'center'
```
Alter CSS dynamically.

#### Theme Preference
```javascript
const themeBtn = document.getElementById('theme')

if(localStorage.getItem('theme') === 'dark'){
    document.body.classList.add('dark-theme')
}

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme')

    if(document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark')
    } else{
        localStorage.setItem('theme', 'light')
    }
})
```
Toggle theme `toggle` as well as saving `setItem` and loading `getItem` user preference.

#### Error Handling
```javascript
if(!book || typeof book.title !== 'string'){
    console.warn('Invalid book object:', book);
    return;
}

```
Debugging and validation via `console.warn`

#### Regex Handling
```javascript
if (!file.type.match('image.*')) {
    statusText.textContent = 'Please select an image file.';
    return;
}
```
Regex used to validate image file types.

#### Timer and Date Object
```javascript
let timerInterval = setInterval(() => { ... }, 1000);
const expiryDate = new Date();
expiryDate.setDate(expiryDate.getDate() + 7);
```
Timer for session tracking and `Date` for cookie expiry.

#### Real-time Search
```javascript
function performSearch(){
    const searchTerm = searchInput.value.toLowerCase().trim()
    const savedBooks = localStorage.getItem('books') 
    books = JSON.parse(savedBooks)

    if(searchTerm === ''){
        renderBooks(books)
        return;
    }

    const filteredProducts = books.filter(book => {
        const titleMatch = book.title.toLowerCase().includes(searchTerm)
        const authorMatch = book.author.toLowerCase().includes(searchTerm)
        const genreMatch = book.genre.toLowerCase().includes(searchTerm)

        return titleMatch || authorMatch || genreMatch;
    })

    renderBooks(filteredProducts)

}
searchInput.addEventListener('input', performSearch)
```
Dynamic filtering on input (real-time search).

#### Math method
```javascript
const hours = Math.floor(totalSeconds / 3600)
const minutes = Math.floor((totalSeconds % 3600) / 60)
```
Math methods to convert the seconds into hours and minutes.

#### Event Listeners and Shortcuts
```javascript
addBookBtn.addEventListener('click', addBook);
 // Add click event to the upload button
 uploadButton.addEventListener('click', function() {
    fileInput.click();
});
  // Listen for file selection
 fileInput.addEventListener('change', handleFileSelect);

 /* keyboard shortcut */
document.addEventListener('keydown', function(e){
    if(e.shiftKey && e.key === 'B'){
        themeBtn.click()
    }
})
```
Event Listeners `click` and `change` to the buttons. `Shift+B` is the keyboard shortcut for toggle the theme.

#### CRUD Functionality
```javascript
booksData.push(newBook)
renderBooks(booksData)
deleteBook(title)
```
The `push` to create a book. `deleteBook(title)` to delete a book from the data. Then, `renderBooks()` read the data files to update the user interface.

#### Comments and Code Readability
```javascript
/* load theme preference from the local storage */
if(localStorage.getItem('theme') === 'dark'){
    document.body.classList.add('dark-theme')
}

/* check if timer already exists to prevent duplicates */
if(document.getElementById('sessionTimer')){
    console.log('Timer already exists, not creating a new one')
    return;
}
```
The `push` to create a book. `deleteBook(title)` to delete a book from the data. Then, `renderBooks()` read the data files to update the user interface.
