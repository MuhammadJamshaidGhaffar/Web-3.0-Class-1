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
make_great(magicians);
show_magicians(magicians);
