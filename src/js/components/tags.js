document.addEventListener("DOMContentLoaded", () => {
  const selectedTagsInput = document.querySelector("input[name='lessonTopic']");
  const tags = document.querySelectorAll(".form__tags .tag");
  const showMoreButton = document.getElementById("showMoreTags");
  const clearInputIcon = document.getElementById("clearInput");

  // Количество тегов, отображаемых на одной странице
  const tagsPerPage = 6;
  // Номер текущей страницы
  let currentPage = 1;

  // Функция для отображения тегов
  const showTags = () => {
    // Вычисляем индексы начала и конца тегов для текущей страницы
    const startIndex = (currentPage - 1) * tagsPerPage;
    const endIndex = startIndex + tagsPerPage;

    for (let i = 0; i < tags.length; i++) {
      // Проверяем, нужно ли отображать текущий тег
      if (i >= startIndex && i < endIndex) {
        tags[i].style.display = "block";
      }
    }

    currentPage++;

    // Если достигнут конец списка тегов, скрываем кнопку "Показать еще теги"
    // if (endIndex >= tags.length) {
    //   showMoreButton.style.display = "none";
    // }
  };

  // Функция для выбора тега
  const selectTag = (event) => {
    const clickedTag = event.target;
    // Проверяем, является ли элемент события тегом
    if (clickedTag.classList.contains("tag")) {
      const selectedTagText = clickedTag.textContent;
      const currentInputValue = selectedTagsInput.value;

      // Проверяем, был ли выбранный тег уже добавлен в поле ввода
      if (currentInputValue.indexOf(selectedTagText) === -1) {
        // Если поле ввода пустое, устанавливаем только текст тега
        if (currentInputValue === "") {
          selectedTagsInput.value = selectedTagText;
        } else {
          // В противном случае, добавляем текст тега с запятой и пробелом
          selectedTagsInput.value += `, ${selectedTagText}`;
        }
        // Показываем иконку очистки поля ввода
        clearInputIcon.style.display = "block";
      }
    }
  };

  // Функция для очистки поля ввода
  const clearInput = () => {
    selectedTagsInput.value = "";
    clearInputIcon.style.display = "none";
  };

  // Первоначально отображаем теги
  showTags();

  showMoreButton.addEventListener("click", showTags);
  document.querySelector(".form__tags").addEventListener("click", selectTag);
  clearInputIcon.addEventListener("click", clearInput);
});
