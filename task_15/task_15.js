var peoples = ["Musfir", "Abdullah", "Ahsan"];
peoples.forEach(function (name) {
    return console.log("Hey ".concat(name, ". I am having a dinner party at my home and i want you to come. I want no excuses. Yo're coming. I will be waiting for you"));
});
console.log("\n\nOh! Abdullah Can't make it so i have to invite a new person\n\n");
peoples[1] = "ABdul Rehman";
peoples.forEach(function (name) {
    return console.log("Hey ".concat(name, ". I am having a dinner party at my home and i want you to come. I will be waiting for you"));
});
