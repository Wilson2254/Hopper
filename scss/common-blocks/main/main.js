//Точка входа всех модулей
import { inputValidStorage } from './input-area/input/input.js'; //Работа с полями
import { sendForm } from './work-detail/buttons/__send/buttons__send.js' //Скрыть Алерт и показать Done
import { alert } from './alert/alert.js' //Работа с алертом
inputValidStorage();
alert();
sendForm();