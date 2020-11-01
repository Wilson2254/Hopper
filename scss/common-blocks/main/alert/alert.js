import { loadListener } from './load-listener.js'
export function alert() {

    window.onload = function() {
        if (localStorage.getItem('alert')) {
            reloaded();
        } else {
            localStorage.setItem('alert', true);
        }
    }

    const reloaded = function() {

        document.querySelector('.alert').style.display = 'flex'

        const inputFileds = document.querySelectorAll('.input__field');

        inputFileds.forEach((val, i) => {
            loadListener(val, i);
        })
    }
}