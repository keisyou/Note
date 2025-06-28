document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("form");
  var lang = document.querySelector("html").lang;
  var option;

  switch (lang) {
    case "ja":
      option = form.select.children[0];
      break;
    case "en":
      option = form.select.children[1];
      break;
    case "zh":
      option = form.select.children[2];
      break;
    default:
  }

  option.selected = true;

  form.addEventListener("change", function () {
    location.href = form.select.value;
  });
});
