// Подсвечиваю поля при перезагрузке
import { errorPopup } from '../input-area/input/input-error-popup.js';
import { correctPopup } from '../input-area/input/input-correct-popup.js';
import { count } from '../input-area/input/input-listener.js'

//Проверяю поля на пустоту и валидность
export function loadListener(val, i) {
    switch (i) {

        case 0:
            if (val.value.trim() == '') {
                errorPopup(i)
                count[i] = false;
            } else {
                correctPopup(i)
                count[i] = true;
            }
            break

        case 1:
            {
                var st = new RegExp(/[а-яё|\s]/i);
                if (st.test(val.value) || val.value == '') {
                    errorPopup(i)
                    count[i] = false;
                } else {
                    correctPopup(i)
                    count[i] = true;
                }
            }
            break

        case 2:
            {
                var st = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/);
                if (!st.test(val.value) || val.value == '') {
                    errorPopup(i)
                    count[i] = false;
                } else {
                    correctPopup(i)
                    count[i] = true;
                }
            }
            break

        case 3:
            {
                if (val.value.length != 18) {
                    errorPopup(i)
                    count[i] = false;
                } else {
                    correctPopup(i)
                    count[i] = true;
                }
            }
            break

        case 4:
            if (val.value.trim() == '') {
                errorPopup(i)
                count[i] = false;
            } else {
                correctPopup(i)
                count[i] = true;
            }
            break

        case 5:
            if (val.value.trim() == '') {
                errorPopup(i)
                count[i] = false;
            } else {
                correctPopup(i)
                count[i] = true;
            }
            break

        default:
            break
    }

}