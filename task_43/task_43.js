var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    magicians.forEach(function (name, index, array) {
        array[index] = "Great " + name;
    });
}
var magicians = ["jamshaid", "aslam", "ahmad"];
show_magicians(magicians);
var copy = __spreadArray([], magicians, true);
make_great(copy);
show_magicians(copy);
show_magicians(magicians);
