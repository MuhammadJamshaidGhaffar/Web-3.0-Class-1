function make_car(manufacturer: string, modelName: string, kwargs: object) {
  return { manufacturer, modelName, ...kwargs };
}

console.log(make_car("honda civic", "2020", { color: "red", damage: "none" }));
console.log(make_car("honda city", "2000", { color: "white" }));
console.log(make_car("Corola", "2014", { hydraulics: "yes", damage: "none" }));
