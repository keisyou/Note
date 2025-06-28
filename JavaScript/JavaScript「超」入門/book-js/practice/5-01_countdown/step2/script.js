document.addEventListener("DOMContentLoaded", function () {
  function countdown(due) {
    var now = new Date();

    var rest = due.getTime() - now.getTime();
    var sec = Math.floor(rest / 1000) % 60;
    var min = Math.floor(rest / 1000 / 60) % 60;
    var hours = Math.floor(rest / 1000 / 60 / 60) % 24;
    var date = Math.floor(rest / 1000 / 60 / 60 / 24);
    var count = { date: date, hours: hours, min: min, sec };

    return count;
  }

  var due = new Date();
  due.setHours(23);
  due.setMinutes(59);
  due.setSeconds(59);

  setInterval(() => {
    var counter = countdown(due);
    document.getElementById("timer").textContent = `${counter.hours}時間${counter.min}分${counter.sec}秒`;
  }, 1000);
});
