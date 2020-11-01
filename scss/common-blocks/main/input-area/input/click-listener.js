//То же самый inputListener, но только проверяю при клике на поле
import { errorPopup } from './input-error-popup.js';
import { correctPopup } from './input-correct-popup.js';
export function clickListener(i, event) {
    switch (i) {

        case 0:
            if (event.target.value.trim() == '') {
                errorPopup(i)
            } else {
                correctPopup(i)
            }
            break

        case 1:
            {
                var st = new RegExp(/[а-яё|\s]/i);
                if (st.test(event.target.value) || event.target.value == '') {
                    errorPopup(i)
                } else {
                    correctPopup(i)
                }
                break
            }

        case 2:
            {
                var st = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/);
                if (!st.test(event.target.value) || event.target.value == '') {
                    errorPopup(i)
                } else {
                    correctPopup(i)
                }
                break
            }

        case 3:
            {
                if (event.target.value.length != 18) {
                    errorPopup(i)
                } else {
                    correctPopup(i)
                }
                break;
            }

        case 4:
            if (event.target.value.trim() == '') {
                errorPopup(i)
            } else {
                correctPopup(i)
            }
            break

        case 5:
            if (event.target.value.trim() == '') {
                errorPopup(i)
            } else {
                correctPopup(i)
            }
            break

        default:
            break
    }

}