document.addEventListener("DOMContentLoaded", function () {
  function addZero(num, digit) {
    var numString = new String(num);
    while (numString.length < digit) {
      numString = "0" + numString;
    }
    return numString;
  }

  console.log(addZero(1, 2));
});
