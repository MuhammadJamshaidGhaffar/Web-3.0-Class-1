function make_sandwich(items: string[]) {
  console.log("\n\nThis sandwich has followinf items on it");
  items.forEach((item, index) => console.log(`${index + 1} ) ${item}`));
}

make_sandwich(["Cheese", "tika"]);
make_sandwich(["Shami", "tika"]);
make_sandwich(["malai", "ketchup"]);
