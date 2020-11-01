import { errorPopup } from './input-error-popup.js';
import { correctPopup } from './input-correct-popup.js';

export let count = new Array(inputFileds).fill(false);

export function inputListener(i, event) {
    switch (i) {

        case 0:
            if (event.target.value.trim() == '') {
                errorPopup(i)
                count[i] = false;
            } else {
                correctPopup(i)
                count[i] = true;
            }
            localStorage.setItem(i, event.target.value);
            break

        case 1:
            {
                var st = new RegExp(/[а-яё|\s]/i);
                if (st.test(event.target.value) || event.target.value == '') {
                    errorPopup(i)
                    count[i] = false;
                } else {
                    correctPopup(i)
                    count[i] = true;
                }
                localStorage.setItem(i, event.target.value);
                break
            }

        case 2:
            {
                var st = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/);
                if (!st.test(event.target.value) || event.target.value == '') {
                    errorPopup(i)
                    count[i] = false;
                } else {
                    correctPopup(i)
                    count[i] = true;
                }
                localStorage.setItem(i, event.target.value);
                break
            }

        case 3:
            {
                let x = event.target.value
                    .replace(/\D/g, "") //Удаляю все кроме цифр
                    .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/); //Маска
                if (x[1] !== 7) x[1] = '+7'; //Первый символ всегда будет +7
                //Так как получается массив, то я вывожу его правильной последовательностью
                event.target.value = !x[2] ?
                x[1] : x[1] +
                    " (" +
                    x[2] +
                    (x[3] ? ") " + x[3] : "") +
                    (x[4] ? "-" + x[4] : "") +
                    (x[5] ? "-" + x[5] : "");
                localStorage.setItem(i, event.target.value);
                if (event.target.value.length != 18) {
                    errorPopup(i)
                    count[i] = false;
                } else {
                    correctPopup(i)
                    count[i] = true;
                }
                break;
            }

        case 4:
            if (event.target.value.trim() == '') {
                errorPopup(i)
                count[i] = false;
            } else {
                correctPopup(i)
                count[i] = true;
            }
            localStorage.setItem(i, event.target.value);
            break

        case 5:
            if (event.target.value.trim() == '') {
                errorPopup(i)
                count[i] = false;
            } else {
                correctPopup(i)
                count[i] = true;
            }
            localStorage.setItem(i, event.target.value);
            break

        default:
            break
    }
    return count
}