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

  var goal = new Date(2028, 7, 14);

  function recalc() {
    var counter = countdown(goal);

    document.getElementById("day").textContent = counter.date;
    document.getElementById("hour").textContent = counter.hours;
    document.getElementById("min").textContent = counter.min;
    document.getElementById("sec").textContent = counter.sec;

    refresh();
  }

  function refresh() {
    setTimeout(recalc, 1000);
  }

  recalc();
});
