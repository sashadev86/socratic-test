document.addEventListener("DOMContentLoaded", () => {
  // Выберите элемент формы
  const form = document.querySelector(".form");

  // Добавьте обработчик события для отправки формы
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвратите стандартное действие отправки формы

    // Соберите данные из формы
    const formData = {
      lessonTopic: document.querySelector('input[name="lessonTopic"]').value,
      classNumber: document.querySelector('select[name="classNumber"]').value,
      purpose: document.querySelector('textarea[name="purpose"]').value,
    };

    // Выведите данные из формы в консоль в виде объекта
    console.log(formData);

    // Очистите значения полей после отправки
    document.querySelector('input[name="lessonTopic"]').value = "";
    document.querySelector('select[name="classNumber"]').value = "1"; // Установите значение по умолчанию
    document.querySelector('textarea[name="purpose"]').value = "";
  });
})

