document.addEventListener("DOMContentLoaded", function () {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var date = now.getDate();
  var hour = now.getHours();
  var minutes = now.getMinutes();

  document.getElementById("time").textContent = `${year}/${month}/${date} ${hour}:${minutes}`
});
