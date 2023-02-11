var current_users = ["Jamshaid", "Musfir", "Abdullah", "Ahsan", "Aslam"];
var new_users = ["JAmshAid", "Ahsan", "Zaid", "Zain", "Sarim"];
new_users.forEach(function (new_user) {
    if (current_users.find(function (user) { return user.toLowerCase() == new_user.toLowerCase(); })) {
        console.log("".concat(new_user, " has already been used. Enter a new username"));
    }
    else {
        console.log("".concat(new_user, " is available"));
    }
});
