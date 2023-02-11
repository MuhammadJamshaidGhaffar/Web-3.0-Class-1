function make_album(artistName: string, title: string, numberOfTracks = 0) {
  return { artistName, title, numberOfTracks };
}

console.log(make_album("Musfir", "gh"));
console.log(make_album("Ahsan", "power"));
console.log(make_album("Zaid", "virlog"));
console.log(make_album("Aslam", "sdl", 5));
