const displayTimer = document.getElementById('display-timer')
function startTimer(){
    console.log('Starting session timer')

    /* check if timer already exists to prevent duplicates */
    if(document.getElementById('sessionTimer')){
        console.log('Timer already exists, not creating a new one')
        return;
    }

    /* initializes session timer */
    let sessionSeconds = 0;

    /* create timer display element */
    const timerElement = document.createElement('div')
    timerElement.id = "sessionTimer"
    timerElement.backgroundColor = "var(--background-color)"
    timerElement.style.color= "var(--text-color)"
    timerElement.style.fontSize = "14px"
    displayTimer.appendChild(timerElement)

    updateTimerDisplay(timerElement, sessionSeconds)

    let timerInterval = setInterval(() => {
        sessionSeconds++;
        updateTimerDisplay(timerElement, sessionSeconds)

        sessionStorage.setItem('timeOnPage', sessionSeconds.toString())

        if(sessionSeconds === 300){
            showLongSessionMessage()
        }
    }, 1000)

    window.addEventListener('beforeunload', () => {
        console.log('Page unloading, stopping timer')
        clearInterval(timerInterval)
    })
}
/* updating the timer */
function updateTimerDisplay(element, totalSeconds){
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    let timeText = `⌚Time on page:`

    if(hours > 0){
        timeText += ` ${hours}h`
    }

    if(hours > 0 || minutes > 0){
        timeText += ` ${minutes}m`
    }

    timeText += ` ${seconds}s`
    
    element.textContent = timeText
}

/* showing message on the interface after 5 minutes */
function showLongSessionMessage(){
    console.log('Showing long session message (5 minutes)')

    if(document.getElementById('longSessionMessage')) {
        console.log('Long session message already exists')
        return;
    }

    const messageDiv = document.createElement('div')
    messageDiv.id = "longSessionMessage"
    messageDiv.style.backgroundColor = 'var(--bg-color)'
    messageDiv.style.color = 'var(--text-color)'
    messageDiv.style.borderRadius ='8px'
    messageDiv.style.textAlign = 'center'
    messageDiv.innerHTML = `
        <p> You've been exploring for 5 minutes! Thanks for your interest in Book Management. </p>
            <button id="dismissMessage" style="mergin-top: 10px; padding: 5px 10px; border:none; border-radius: 4px; cursor:pointer;">  Dismiss </button>
    `

    const timerElement = document.getElementById('sessionTimer')
    if(timerElement) {
        displayTimer.insertBefore(messageDiv, timerElement)
    } else{
        displayTimer.appendChild(messageDiv)
    }
    const dismissButton = document.getElementById('dismissMessage')

    if(dismissButton){
        dismissButton.addEventListener('click', function() {
            const message = document.getElementById('longSessionMessage')
            if(message){
                message.remove()
            }
        })
    }
}

startTimer()