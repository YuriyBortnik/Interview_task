import $ from "jquery";
import { modal, checked, typeInputs } from './scripts/main.js';

$(document).ready(() => {
    modal('#open-calc', 'addClass');
    modal('#hide-calc', 'removeClass');
    checked();
    typeInputs();
});

