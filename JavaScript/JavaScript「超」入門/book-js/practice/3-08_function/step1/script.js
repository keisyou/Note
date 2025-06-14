var total = function(price) {
  var tax = 0.08;
  return price + price * tax;
}

console.log("コーヒーメーカーの値段は" + total(8000) + "円(税込)です。");
