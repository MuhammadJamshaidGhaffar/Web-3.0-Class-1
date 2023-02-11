function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love typeScript"; }
    console.log("---------------------------------");
    console.log("|   Size : ".concat(size, "              |"));
    console.log("|   Message : ".concat(message, "        |"));
    console.log("---------------------------------");
}
make_shirt("large");
make_shirt("medium");
make_shirt("small", "ScbX");
