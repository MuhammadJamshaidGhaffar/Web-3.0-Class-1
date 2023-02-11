let peoples = ["Musfir", "Abdullah", "Ahsan"];

peoples.forEach((name) =>
  console.log(
    `Hey ${name}. I am having a dinner party at my home and i want you to come. I want no excuses. Yo're coming. I will be waiting for you`
  )
);

console.log(
  "\nI have found a bigger dinner table so i aminviting more guests\n\n"
);
peoples.splice(0, 0, "Abdul Rehman");
peoples.splice(2, 0, "Sarim");
peoples.push("Abdullan Anwar");

peoples.forEach((name) =>
  console.log(
    `Hey ${name}. I am having a dinner party at my home and i want you to come. I will be waiting for you`
  )
);
