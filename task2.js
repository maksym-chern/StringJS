const citiesString = "Київ, Львів, Одеса, Харків";
const citiesArray = citiesString.split(", ");
citiesArray.push("Дніпро");
const resultString = citiesArray.join(" - ");
console.log(resultString);