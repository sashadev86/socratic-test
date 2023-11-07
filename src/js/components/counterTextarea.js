document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.querySelector(".form__purpose-textarea");
  const errorElement = document.querySelector(".error-message");
  const characterCountElement = document.querySelector(".character-count");

  const MAX_CHARACTERS = 200;

  textarea.addEventListener("input", () => {
    const text = textarea.value;
    const characterCount = text.length;

    // Обновляем счетчик символов
    characterCountElement.textContent = characterCount + " / " + MAX_CHARACTERS;

    // Проверяем, превышает ли количество символов максимум
    if (characterCount > MAX_CHARACTERS) {
      // Добавляем или удаляем классы стилей
      errorElement.classList.add("error-visible");
      textarea.classList.add("red-border");
      characterCountElement.classList.add("red-count");
    } else {
      // Скрываем сообщение об ошибке и восстанавливаем стили по умолчанию
      errorElement.classList.remove("error-visible");
      textarea.classList.remove("red-border");
      characterCountElement.classList.remove("red-count");
    }
  });
})
