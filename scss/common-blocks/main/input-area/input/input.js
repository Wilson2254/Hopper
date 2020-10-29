export function func() {
    const elements1 = document.querySelectorAll('.input__field');
    elements1.forEach((val, i) => {
        val.value = localStorage.getItem(i);
        val.addEventListener('input', event => {
            switch (i) {
                case 0:
                    if (event.target.value.trim() == '') {
                        document.querySelectorAll('.input')[i].classList.add('input--error')
                        document.querySelectorAll('.input__error-promt')[0].style.display = 'block'
                    } else {
                        document.querySelectorAll('.input')[i].classList.remove('input--error')
                        document.querySelectorAll('.input__error-promt')[0].style.display = 'none'
                    }
                    localStorage.setItem(i, event.target.value);
                    break
                case 4:
                    if (event.target.value.trim() == '') {
                        document.querySelectorAll('.input')[i].classList.add('input--error')
                        document.querySelectorAll('.input__error-promt')[1].style.display = 'block'
                    } else {
                        document.querySelectorAll('.input')[i].classList.remove('input--error')
                        document.querySelectorAll('.input__error-promt')[1].style.display = 'none'
                    }
                    localStorage.setItem(i, event.target.value);
                    break
                case 5:
                    if (event.target.value.trim() == '') {
                        document.querySelectorAll('.input')[i].classList.add('input--error')
                        document.querySelectorAll('.input__error-promt')[2].style.display = 'block'
                    } else {
                        document.querySelectorAll('.input')[i].classList.remove('input--error')
                        document.querySelectorAll('.input__error-promt')[2].style.display = 'none'
                    }
                    localStorage.setItem(i, event.target.value);
                    break
                default:
                    break
            }
        })
    })
};