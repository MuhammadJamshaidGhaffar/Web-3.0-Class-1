const places = [
  "muree",
  "hunza valley",
  "pak China border",
  "nathia galli",
  "naran",
];

console.log("Array : ", places);
console.log("In Alpahabetical order : ", [...places].sort());
console.log("Orginal Array : ", places);
console.log("In Reverse Alpahabetical order : ", [...places].sort().reverse());
console.log("Orginal Array : ", places);
places.reverse();
console.log("Order has changed : ", places);
places.reverse();
console.log("Order has changed again to its original order: ", places);
places.sort();
console.log("Array has been sorted in alphabetical order ", places);
places.sort().reverse();
console.log("Array has been sorted in reverse alphabetical order ", places);
