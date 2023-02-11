function make_album(artistName, title, numberOfTracks) {
    if (numberOfTracks === void 0) { numberOfTracks = 0; }
    return { artistName: artistName, title: title, numberOfTracks: numberOfTracks };
}
console.log(make_album("Musfir", "gh"));
console.log(make_album("Ahsan", "power"));
console.log(make_album("Zaid", "virlog"));
console.log(make_album("Aslam", "sdl", 5));
