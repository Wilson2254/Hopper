//Метод валидации при работе с полями
import { inputListener } from './input-listener.js'
//Метод для подстветки полей при клике
import { clickListener } from './click-listener.js' //С этим методом работаю только 1 раз, когда поля не подсвечены (при открытии страницы), что-то вроде touch-метода

export function inputValidStorage() {

    //Массив для проверки заполненности полей (для кнопки Send)
    let correctFields;

    //Список полей
    const inputFileds = document.querySelectorAll('.input__field');

    inputFileds.forEach((val, i) => {

        //Заполняю поля из локала, если есть
        if (localStorage.getItem(i))
            val.value = localStorage.getItem(i).trim()

        //Работа c полями при вводе
        val.addEventListener('input', event => {
            correctFields = inputListener(i, event)
                //Блокирю кнопку Send, если 1 из полей не заполнено
            if (correctFields.includes(false)) {
                document.querySelector('.buttons__send').classList.add('buttons--disabled')
            } else {
                document.querySelector('.buttons__send').classList.remove('buttons--disabled')
            }
        })

        //Работа с полями при клике
        val.addEventListener('click', event => {
            clickListener(i, event)
        })
    })

};