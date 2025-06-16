document.addEventListener("DOMContentLoaded", function () {
  var spans = document.getElementsByTagName("span");
  spans[0].textContent = Math.PI;
  spans[1].textContent = Math.floor(Math.PI);

  function point(num, digit) {
    var time = Math.pow(10, digit);
    return Math.floor(num * time) / time;
  }

  document.getElementById("output").textContent = point(Math.PI, 2);
});
