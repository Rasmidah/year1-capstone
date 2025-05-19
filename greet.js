function greetUser(){
    /* check if the user had visitedbefore cookie exist */
    const hasVisitedBefore = document.cookie.includes('visitedBefore=true')
        if(hasVisitedBefore){
            alert("Welcome back")
        } else{
            /* sets cookie with 7 days expiry */
            const expiryDate = new Date()
            expiryDate.setDate(expiryDate.getDate() + 7);
            document.cookie = `visitedBefore=true; expires=${expiryDate.toUTCString()}; path=/`;
                alert("Welcome to the Book Management")
        }
}
greetUser()