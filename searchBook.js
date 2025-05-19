/* DOM Elements */
const searchInput = document.getElementById('searchInput')
const searchButton = document.getElementById('searchButton')
const bookDisplay = document.getElementById('book-display')

/* function to perform search */
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

/* event listeners */
searchButton.addEventListener('click', performSearch)
searchInput.addEventListener('keyup', function(event){
    if(event.key === 'Enter'){
        performSearch()
    }
})
searchInput.addEventListener('input', performSearch) /* real time search  */
