// Получаем элементы из DOM
const textarea = document.querySelector(".form__purpose-textarea");
const errorElement = document.querySelector(".error-message");
const characterCountElement = document.querySelector(".character-count");

// Максимальное количество символов
const MAX_CHARACTERS = 200;

// Обработчик события ввода текста в textarea
textarea.addEventListener("input", function () {
  const text = textarea.value;
  const characterCount = text.length;

  // Обновляем счетчик символов
  characterCountElement.textContent = characterCount + " / " + MAX_CHARACTERS;

  // Проверяем, превышает ли количество символов максимум
  if (characterCount > MAX_CHARACTERS) {
    // Добавляем или удаляем классы для установки стилей через CSS
    errorElement.classList.add("error-visible");
    textarea.classList.add("red-border"); // Добавляем класс для красного бордера
    characterCountElement.classList.add("red-count"); // Добавляем класс для красного текста
  } else {
    // Скрываем сообщение об ошибке и восстанавливаем стили по умолчанию
    errorElement.classList.remove("error-visible");
    textarea.classList.remove("red-border"); // Удаляем класс для красного бордера
    characterCountElement.classList.remove("red-count"); // Удаляем класс для красного текста
  }
});
