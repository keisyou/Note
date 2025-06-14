var now = new Date();
var hour = now.getHours();

if (hour >= 19 && hour < 21) {
  window.alert("お弁当30%OFF");
} else if (hour === 9 || hour === 15) {
  window.alert("お弁当を1個買ったら1個おまけ！");
} else {
  window.alert("お弁当はいかがですか？");
}
