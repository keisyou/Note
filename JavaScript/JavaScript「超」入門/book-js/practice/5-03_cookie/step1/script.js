document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("form");
  form.addEventListener("submit", function (e) {
    var answered;
    if (document.cookie) {
      var answered = document.cookie.split(";").find(row => row.startsWith("answered")).split("=")[1];
    }

    if (answered === "yes") {
      window.alert("回答済みです。アンケートの回答は1回しかできません。");
    } else {
      document.cookie = "answered=yes;";
    }
  });

  var clearButton = document.getElementById("remove");
  clearButton.addEventListener("click", function () {
    document.cookie.split(";").forEach(cookie => {
      document.cookie = cookie + ";" + "max-age=0";
    });
  });
});
