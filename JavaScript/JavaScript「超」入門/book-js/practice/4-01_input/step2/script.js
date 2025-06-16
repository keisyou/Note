document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form").onsubmit = function () {
    var search = document.getElementById("form").word.value;
    document.getElementById("output").textContent = search;
    return false;
  }
});
