document.addEventListener("DOMContentLoaded", () => {
  const selectedTagsInput = document.querySelector("input[name='lessonTopic']");
  const clearInputIcon = document.getElementById("clearInput");

  const updateClearIconVisibility = () => {
    clearInputIcon.style.display = selectedTagsInput.value.length > 0 ? "block" : "none";
  }

  const clearInput = () => {
    selectedTagsInput.value = "";
    clearInputIcon.style.display = "none";
  }

  updateClearIconVisibility();

  selectedTagsInput.addEventListener("input", updateClearIconVisibility);
  clearInputIcon.addEventListener("click", clearInput);
});
