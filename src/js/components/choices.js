import Choices from "choices.js";

document.addEventListener("DOMContentLoaded", () => {
  const select = document.querySelector(".form__class-select");

  const choicesSelect = new Choices(select, {
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: "",
  });

  window.choicesSelect = choicesSelect;
})
