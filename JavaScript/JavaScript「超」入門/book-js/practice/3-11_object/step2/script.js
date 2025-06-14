var jsbook = { title: "JavaScript入門", price: 2500, stock: 3 };

for (var p in jsbook) {
  console.log(p + "=" + jsbook[p]);
}
