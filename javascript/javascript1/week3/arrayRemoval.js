//Item array removal

const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];

  const ahmadIndex = names.indexOf("Ahmad");

  const nameToRemove = names.splice(ahmadIndex,1);
  
  
  console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
