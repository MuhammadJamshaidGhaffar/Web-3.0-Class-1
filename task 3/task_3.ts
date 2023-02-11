let Name = "Muhammad Jamshaid Ghaffar";

console.log(Name.toLowerCase());
console.log(Name.toUpperCase());
// to title cased
console.log(
  Name.split(" ")
    .map((str) => str[0].toUpperCase() + str.slice(1))
    .join(" ")
);
