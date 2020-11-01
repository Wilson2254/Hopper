import { inputListener } from './input-listener.js'
import { clickListener } from './click-listener.js'

export function inputValidStorage() {

    let conf;

    const inputFileds = document.querySelectorAll('.input__field');

    inputFileds.forEach((val, i) => {

        if (localStorage.getItem(i))
            val.value = localStorage.getItem(i).trim()

        val.addEventListener('input', event => {
            conf = inputListener(i, event);
            if (conf.includes(false)) {
                document.querySelector('.buttons__send').classList.add('buttons--disabled')
            } else document.querySelector('.buttons__send').classList.remove('buttons--disabled')
        })

        val.addEventListener('click', event => {
            clickListener(i, event);
        })
    })

};