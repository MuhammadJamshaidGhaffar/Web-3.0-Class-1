function show_magicians(magicians: string[]) {
  magicians.forEach((name) => console.log(name));
}

function make_great(magicians: string[]) {
  magicians.forEach((name, index, array) => {
    array[index] = "Great " + name;
  });
}

let magicians = ["jamshaid", "aslam", "ahmad"];
show_magicians(magicians);
make_great(magicians);
show_magicians(magicians);
