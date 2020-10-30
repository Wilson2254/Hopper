export function errorPopup(i) {
    document.querySelectorAll('.input')[i].classList.add('input--error')
    document.querySelectorAll('.input')[i].classList.remove('input--correct')
    document.querySelectorAll('.input__error-promt')[i].style.display = 'block'
    document.querySelectorAll('.input__promt')[i].style.color = '#F64C4C'
}