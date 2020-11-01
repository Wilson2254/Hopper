export function sendForm() {
    const sendButton = document.querySelector('.buttons__send');
    sendButton.addEventListener('click', hideAlertShowDone)
}

function hideAlertShowDone() {
    document.querySelectorAll('.alert')[0].style.display = 'none'
    document.querySelectorAll('.complete-alert')[0].style.display = 'flex'
}