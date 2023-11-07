import Choices from "choices.js";

const select = document.querySelector(".form__class-select");

 const choicesSelect = new Choices(select, {
   searchEnabled: false,
   shouldSort: false,
   itemSelectText: "",
 });
