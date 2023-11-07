document.addEventListener("DOMContentLoaded", () => {
  const selectedTagsInput = document.querySelector("input[name='lessonTopic']");
  const clearInputIcon = document.getElementById("clearInput");

  function updateClearIconVisibility() {
    clearInputIcon.style.display =
      selectedTagsInput.value.length > 0 ? "block" : "none";
  }

  function clearInput() {
    selectedTagsInput.value = "";
    clearInputIcon.style.display = "none";
  }

  // Устанавливаем значение атрибута data-preset-value при загрузке страницы
  selectedTagsInput.setAttribute("data-preset-value", selectedTagsInput.value);
  updateClearIconVisibility();

  selectedTagsInput.addEventListener("input", updateClearIconVisibility);
  clearInputIcon.addEventListener("click", clearInput);
});
