var enemy = 100;
var attack;

window.alert("先頭開始!");

while (enemy > 0) {
  attack = parseInt(Math.floor(Math.random() * 31));
  console.log("モンスターに" + attack + "のダメージ!");
  enemy -= attack;
}

console.log("モンスターを倒した!");
