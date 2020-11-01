import { errorPopup } from '../input-area/input/input-error-popup.js';
import { correctPopup } from '../input-area/input/input-correct-popup.js';
export function loadListener(val, i) {
    switch (i) {

        case 0:
            if (val.value.trim() == '') {
                errorPopup(i)
            } else {
                correctPopup(i)
            }
            break

        case 1:
            {
                var st = new RegExp(/[а-яё|\s]/i);
                if (st.test(val.value) || val.value == '') {
                    errorPopup(i)
                } else {
                    correctPopup(i)
                }
            }
            break

        case 2:
            {
                var st = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/);
                if (!st.test(val.value) || val.value == '') {
                    errorPopup(i)
                } else {
                    correctPopup(i)
                }
            }
            break

        case 3:
            {
                if (val.value.length != 18) {
                    errorPopup(i)
                } else {
                    correctPopup(i)
                }
            }
            break

        case 4:
            if (val.value.trim() == '') {
                errorPopup(i)
            } else {
                correctPopup(i)
            }
            break

        case 5:
            if (val.value.trim() == '') {
                errorPopup(i)
            } else {
                correctPopup(i)
            }
            break

        default:
            break
    }

}