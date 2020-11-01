import { inputListener } from './input-listener.js'
import { clickListener } from './click-listener.js'

export function inputValidStorage() {

    const inputFileds = document.querySelectorAll('.input__field');

    inputFileds.forEach((val, i) => {

        if (localStorage.getItem(i))
            val.value = localStorage.getItem(i).trim()

        val.addEventListener('input', event => {
            inputListener(i, event);
        })

        val.addEventListener('click', event => {
            clickListener(i, event);
        })
    })
};