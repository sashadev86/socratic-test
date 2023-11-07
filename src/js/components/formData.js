document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");
  const clearInputIcon = document.getElementById("clearInput");
  const characterCountElement = document.querySelector(".character-count");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Собираем данные из формы
    const formData = {
      lessonTopic: document.querySelector('input[name="lessonTopic"]').value,
      classNumber: document.querySelector('select[name="classNumber"]').value,
      purpose: document.querySelector('textarea[name="purpose"]').value,
    };

    console.log(formData);

    const classSelect = window.choicesSelect;
    classSelect.setChoiceByValue("1");

    // Очистка значений полей после отправки
    document.querySelector('input[name="lessonTopic"]').value = "";
    document.querySelector('textarea[name="purpose"]').value = "";

    clearInputIcon.style.display = "none";
    characterCountElement.textContent = "0 / 200";
  });
});
