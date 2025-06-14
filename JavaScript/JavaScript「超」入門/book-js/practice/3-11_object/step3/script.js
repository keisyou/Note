document.addEventListener("DOMContentLoaded", function () {
  var jsbook = { title: "JavaScript入門", price: 2500, stock: 3 };

  for (var p in jsbook) {
    document.getElementById(p).textContent = jsbook[p];
  }
});
