function describe_city(city: string, country: string = "pakistan") {
  console.log(`${city} is in ${country}`);
}

describe_city("Lahore");
describe_city("Islamabad", "pakistan");
describe_city("New York", "USA");
