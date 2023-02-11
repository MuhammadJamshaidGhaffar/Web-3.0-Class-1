let users = ["Jamshaid", "Ahmad", "Aslam", "Musfir", "admin"];

users.forEach((user) => {
  if (user == "admin") {
    console.log("Hello admin! Would you like to see a status report");
  } else {
    console.log(`Hello ${user}, thank you for logging in again`);
  }
});
