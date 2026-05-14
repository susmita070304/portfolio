document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".project-btn");

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      const url = button.getAttribute("data-url");
      if (url) {
        window.open(url, "_blank");
      } else {
        alert("Project link not available!");
      }
    });
  });
});
