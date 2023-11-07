document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");
  const inputs = form.querySelectorAll('input[type="text"], select, textarea');
  const nextButton = form.querySelector(".form__btn-next");

  const checkFields = () => {
    // Проверяем, все ли поля заполнены
    let allFieldsFilled = true;
    inputs.forEach(function (input) {
      if (!input.value) {
        allFieldsFilled = false;
      }
    });

    // Включаем или выключаем кнопку "Следующий шаг"
    if (allFieldsFilled) {
      nextButton.removeAttribute("disabled");
    } else {
      nextButton.setAttribute("disabled", "disabled");
    }
  }

  // Вызываем функцию при изменении полей ввода
  inputs.forEach((input) => {
    input.addEventListener("input", checkFields);
  });

  // Добавляем обработчик события для отправки формы
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Предотвращаем стандартное действие отправки формы

    // Очищаем значения полей
    inputs.forEach((input) => {
      input.value = "";
    });

    // Задизейбливаем кнопку "Следующий шаг" после отправки
    nextButton.setAttribute("disabled", "disabled");
  });
});
