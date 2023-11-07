document.addEventListener("DOMContentLoaded", function () {
  const selectedTagsInput = document.querySelector("input[name='lessonTopic']");
  const tags = document.querySelectorAll(".form__tags .tag");
  const showMoreButton = document.getElementById("showMoreTags");
  const clearInputIcon = document.getElementById("clearInput");

  const tagsPerPage = 6;
  let currentPage = 1;

  function showTags() {
    const startIndex = (currentPage - 1) * tagsPerPage;
    const endIndex = startIndex + tagsPerPage;

    for (let i = 0; i < tags.length; i++) {
      if (i >= startIndex && i < endIndex) {
        tags[i].style.display = "block";
      }
    }

    currentPage++;

    // if (endIndex >= tags.length) {
    //   showMoreButton.style.display = "none";
    // }
  }

  function selectTag(event) {
    const clickedTag = event.target;
    if (clickedTag.classList.contains("tag")) {
      const selectedTagText = clickedTag.textContent;
      const currentInputValue = selectedTagsInput.value;

      if (currentInputValue.indexOf(selectedTagText) === -1) {
        if (currentInputValue === "") {
          selectedTagsInput.value = selectedTagText;
        } else {
          selectedTagsInput.value += `, ${selectedTagText}`;
        }
        clearInputIcon.style.display = "block";
      }
    }
  }

  function clearInput() {
    selectedTagsInput.value = "";
    clearInputIcon.style.display = "none";
  }

  showTags();
  showMoreButton.addEventListener("click", showTags);
  document.querySelector(".form__tags").addEventListener("click", selectTag);
  clearInputIcon.addEventListener("click", clearInput);
});
