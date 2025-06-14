document.addEventListener("DOMContentLoaded", function () {
  var todo = ["デザインカンプ作成", "データ整理", "コーディング", "テスト"];
  todo.push("納品");

  var ulElement = document.getElementById("list");

  for (var i = 0; i < todo.length; i++) {
    var liElement = document.createElement("li");
    liElement.textContent = todo[i];
    ulElement.appendChild(liElement);
  }
});
