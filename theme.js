const themeBtn = document.getElementById('theme')

/* load theme preference from the local storage */
if(localStorage.getItem('theme') === 'dark'){
    document.body.classList.add('dark-theme')
}

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme')

    /* saving theme preference on the local storage */
    if(document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark')
    } else{
        localStorage.setItem('theme', 'light')
    }
})

/* keyboard shortcut */
document.addEventListener('keydown', function(e){
    if(e.shiftKey && e.key === 'B'){
        themeBtn.click()
    }
})