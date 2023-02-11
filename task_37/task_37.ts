function make_shirt(
  size: "large" | "medium" | "small" = "large",
  message: string = "I love typeScript"
) {
  console.log(`---------------------------------`);
  console.log(`|   Size : ${size}              |`);
  console.log(`|   Message : ${message}        |`);
  console.log(`---------------------------------`);
}

make_shirt("large");
make_shirt("medium");
make_shirt("small", "ScbX");
