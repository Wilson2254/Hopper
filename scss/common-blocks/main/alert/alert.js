import { loadListener } from './load-listener.js' //Метод для проверки полей при загрузке страницы
import { count } from '../input-area/input/input-listener.js' //Захватил эту переменную, чтобы работать с кнопкой при загрузке страницы
export function alert() {

    // Перезагрузка страницы первый раз (для отображения алерта)
    window.onload = function() {
        if (localStorage.getItem('alert')) {
            reloaded();
        } else {
            localStorage.setItem('alert', true);
        }
    }

    const reloaded = function() {
        //Блокирую кнопку, если не все заполнено (жду пол секунды, пока пройдет метод loadListener и заполнит count)
        setTimeout(() => {
            if (count.includes(false)) {
                document.querySelector('.buttons__send').classList.add('buttons--disabled')
            } else {
                document.querySelector('.buttons__send').classList.remove('buttons--disabled')
            }
        }, 500)

        //Показываю Alert
        document.querySelector('.alert').style.display = 'flex'

        //Обращаюсь ко всем полям и проверяю их на валидность и заполненость
        const inputFileds = document.querySelectorAll('.input__field');
        inputFileds.forEach((val, i) => {
            loadListener(val, i);
        })
    }
}