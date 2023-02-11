var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = [
    "muree",
    "hunza valley",
    "pak China border",
    "nathia galli",
    "naran",
];
console.log("Array : ", places);
console.log("In Alpahabetical order : ", __spreadArray([], places, true).sort());
console.log("Orginal Array : ", places);
console.log("In Reverse Alpahabetical order : ", __spreadArray([], places, true).sort().reverse());
console.log("Orginal Array : ", places);
places.reverse();
console.log("Order has changed : ", places);
places.reverse();
console.log("Order has changed again to its original order: ", places);
places.sort();
console.log("Array has been sorted in alphabetical order ", places);
places.sort().reverse();
console.log("Array has been sorted in reverse alphabetical order ", places);
