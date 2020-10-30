export function inputValidStorage() {
    const elements1 = document.querySelectorAll('.input__field');

    elements1.forEach((val, i) => {
        if (localStorage.getItem(i))
            val.value = localStorage.getItem(i).trim()

        val.addEventListener('input', event => {

            switch (i) {
                case 0:
                    if (event.target.value.trim() == '') {
                        document.querySelectorAll('.input')[i].classList.add('input--error')
                        document.querySelectorAll('.input')[i].classList.remove('input--correct')
                        document.querySelectorAll('.input__error-promt')[i].style.display = 'block'
                        document.querySelectorAll('.input__promt')[i].style.color = '#F64C4C'
                    } else {
                        document.querySelectorAll('.input')[i].classList.remove('input--error')
                        document.querySelectorAll('.input')[i].classList.add('input--correct')
                        document.querySelectorAll('.input__error-promt')[i].style.display = 'none'
                        document.querySelectorAll('.input__promt')[i].style.color = '#2F80ED'
                    }
                    localStorage.setItem(i, event.target.value);
                    break
                case 1:
                    {
                        var st = new RegExp(/[а-яё|\s]/i);
                        if (st.test(event.target.value) || event.target.value == '') {
                            document.querySelectorAll('.input')[i].classList.add('input--error')
                            document.querySelectorAll('.input')[i].classList.remove('input--correct')
                            document.querySelectorAll('.input__error-promt')[i].style.display = 'block'
                            document.querySelectorAll('.input__promt')[i].style.color = '#F64C4C'
                        } else {
                            document.querySelectorAll('.input')[i].classList.remove('input--error')
                            document.querySelectorAll('.input')[i].classList.add('input--correct')
                            document.querySelectorAll('.input__error-promt')[i].style.display = 'none'
                            document.querySelectorAll('.input__promt')[i].style.color = '#2F80ED'
                        }
                        localStorage.setItem(i, event.target.value);
                        break
                    }
                case 2:
                    {
                        var st = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/);
                        if (!st.test(event.target.value) || event.target.value == '') {
                            document.querySelectorAll('.input')[i].classList.add('input--error')
                            document.querySelectorAll('.input')[i].classList.remove('input--correct')
                            document.querySelectorAll('.input__error-promt')[i].style.display = 'block'
                            document.querySelectorAll('.input__promt')[i].style.color = '#F64C4C'
                        } else {
                            document.querySelectorAll('.input')[i].classList.remove('input--error')
                            document.querySelectorAll('.input')[i].classList.add('input--correct')
                            document.querySelectorAll('.input__error-promt')[i].style.display = 'none'
                            document.querySelectorAll('.input__promt')[i].style.color = '#2F80ED'
                        }
                        localStorage.setItem(i, event.target.value);
                        break
                    }
                case 4:
                    if (event.target.value.trim() == '') {
                        document.querySelectorAll('.input')[i].classList.add('input--error')
                        document.querySelectorAll('.input')[i].classList.remove('input--correct')
                        document.querySelectorAll('.input__error-promt')[i].style.display = 'block'
                        document.querySelectorAll('.input__promt')[i].style.color = '#F64C4C'
                    } else {
                        document.querySelectorAll('.input')[i].classList.remove('input--error')
                        document.querySelectorAll('.input')[i].classList.add('input--correct')
                        document.querySelectorAll('.input__error-promt')[i].style.display = 'none'
                        document.querySelectorAll('.input__promt')[i].style.color = '#2F80ED'
                    }
                    localStorage.setItem(i, event.target.value);
                    break

                case 5:
                    if (event.target.value.trim() == '') {
                        document.querySelectorAll('.input')[i].classList.add('input--error')
                        document.querySelectorAll('.input')[i].classList.remove('input--correct')
                        document.querySelectorAll('.input__error-promt')[i].style.display = 'block'
                        document.querySelectorAll('.input__promt')[i].style.color = '#F64C4C'
                    } else {
                        document.querySelectorAll('.input')[i].classList.remove('input--error')
                        document.querySelectorAll('.input')[i].classList.add('input--correct')
                        document.querySelectorAll('.input__error-promt')[i].style.display = 'none'
                        document.querySelectorAll('.input__promt')[i].style.color = '#2F80ED'
                    }
                    localStorage.setItem(i, event.target.value);
                    break
                default:
                    break
            }
        })
    })
};