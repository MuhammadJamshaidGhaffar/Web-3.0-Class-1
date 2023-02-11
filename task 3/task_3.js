var Name = "Muhammad Jamshaid Ghaffar";
console.log(Name.toLowerCase());
console.log(Name.toUpperCase());
console.log(Name.split(" ")
    .map(function (str) { return str[0].toUpperCase() + str.slice(1); })
    .join(" "));
