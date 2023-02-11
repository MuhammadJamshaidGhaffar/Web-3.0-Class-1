let current_users = ["Jamshaid", "Musfir", "Abdullah", "Ahsan", "Aslam"];
let new_users = ["JAmshAid", "Ahsan", "Zaid", "Zain", "Sarim"];

new_users.forEach((new_user) => {
  if (
    current_users.find((user) => user.toLowerCase() == new_user.toLowerCase())
  ) {
    console.log(`${new_user} has already been used. Enter a new username`);
  } else {
    console.log(`${new_user} is available`);
  }
});
