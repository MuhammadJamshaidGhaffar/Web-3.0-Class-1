function make_sandwich(items) {
    console.log("\n\nThis sandwich has followinf items on it");
    items.forEach(function (item, index) { return console.log("".concat(index + 1, " ) ").concat(item)); });
}
make_sandwich(["Cheese", "tika"]);
make_sandwich(["Shami", "tika"]);
make_sandwich(["malai", "ketchup"]);
