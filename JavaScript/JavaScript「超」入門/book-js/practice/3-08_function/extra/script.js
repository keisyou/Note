document.addEventListener("DOMContentLoaded", function () {
  var total = function (price) {
    var tax = 0.08;
    return price + price * tax;
  }

  document.getElementById("output1").textContent = "コーヒーメーカーの値段は" + total(8000) + "円(税込)です。";
  document.getElementById("output2").textContent = "コーヒーフィルターの値段は" + total(200) + "円(税込)です。";
  document.getElementById("output3").textContent = "コーヒー豆の値段は" + total(1000) + "円(税込)です。";
});
