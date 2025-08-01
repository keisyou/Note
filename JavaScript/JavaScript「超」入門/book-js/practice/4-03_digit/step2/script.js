document.addEventListener("DOMContentLoaded", function () {
  function addZero(num, digit) {
    var numString = new String(num);
    while (numString.length < digit) {
      numString = "0" + numString;
    }
    return numString;
  }

  var songs = [
    "Stella By Starlight",
    "Satin Doll",
    "Caravan",
    "Besame Mucho",
    "My Favorite Things",
    "Taking A Chance On Love",
    "Fly Me To The Moon",
    "Waltz For Debby",
    "Willow Weep For Me",
    "Bluesette"
  ];

  for (var i = 0; i < songs.length; i++) {
    var paragraph = document.createElement("p");
    paragraph.textContent = addZero(i + 1, 2) + ". " + songs[i];
    document.getElementById("list").appendChild(paragraph);
  }
});
