var peoples = ["Musfir", "Abdullah", "Ahsan"];
peoples.forEach(function (name) {
    return console.log("Hey ".concat(name, ". I am having a dinner party at my home and i want you to come. I want no excuses. Yo're coming. I will be waiting for you"));
});
console.log("\nI have found a bigger dinner table so i aminviting more guests\n\n");
peoples.splice(0, 0, "Abdul Rehman");
peoples.splice(2, 0, "Sarim");
peoples.push("Abdullan Anwar");
peoples.forEach(function (name) {
    return console.log("Hey ".concat(name, ". I am having a dinner party at my home and i want you to come. I will be waiting for you"));
});
console.log("\n\n\n\n");
for (var i = 0; i < 4; i++) {
    console.log("".concat(peoples.pop(), ", I am very sorry. I can't invite you to dinner today. I will some other day"));
}
console.log("\n\n");
peoples.forEach(function (name) {
    return console.log("Hey ".concat(name, ". I am having a dinner party at my home and you're still invited.I will be waiting for you"));
});
peoples.pop();
peoples.pop();
console.log(peoples);
