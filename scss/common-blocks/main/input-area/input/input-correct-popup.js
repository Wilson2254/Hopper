//Подсвечиваю синим цветом, если в поле все ок
export function correctPopup(i) {
    document.querySelectorAll('.input')[i].classList.remove('input--error')
    document.querySelectorAll('.input')[i].classList.add('input--correct')
    document.querySelectorAll('.input__error-promt')[i].style.display = 'none'
    document.querySelectorAll('.input__promt')[i].style.color = '#2F80ED'
}