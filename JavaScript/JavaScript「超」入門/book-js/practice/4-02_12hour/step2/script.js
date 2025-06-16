document.addEventListener("DOMContentLoaded", function () {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var date = now.getDate();
  var hour = now.getHours();
  var minutes = now.getMinutes();

  var am_pm;
  if (hour < 12) {
    am_pm = "a.m.";
  } else {
    am_pm = "p.m.";
  }

  document.getElementById("time").textContent = `${year}/${month}/${date} ${hour}:${minutes} ${am_pm}`
});
