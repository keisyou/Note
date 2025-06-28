document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("form");
  form.addEventListener("change", function () {
    location.href = form.select.value;
  });
});
