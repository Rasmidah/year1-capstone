/* DOM Elements */
const closeBtn = document.getElementById('closeForm')
const openBtn = document.getElementById('openForm')

/* Function to open and close the form */
function openForm() {
    document.getElementById("bookForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("bookForm").style.display = "none";
}

/* Event Listeners */
closeBtn.addEventListener('click', closeForm)
openBtn.addEventListener('click', openForm)