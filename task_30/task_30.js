var users = ["Jamshaid", "Ahmad", "Aslam", "Musfir", "admin"];
users.forEach(function (user) {
    if (user == "admin") {
        console.log("Hello admin! Would you like to see a status report");
    }
    else {
        console.log("Hello ".concat(user, ", thank you for logging in again"));
    }
});
