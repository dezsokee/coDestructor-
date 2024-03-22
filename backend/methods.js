let models = [];

fetch("new_recipes.json")
  .then((response) => response.json())
  .then((data) => {
    for (let key in data) {
      models.push(data[key]);
    }
    // Ezután meghívjuk a getRecipes függvényt, ha szükséges
    // const nation = getNation(); // Itt helyezzük el a getNation() hívást
    // console.log(`Monthly topic: ${nation}`);
    //document.write(`<img src="./images/${nation}.png" style="width: 200px;">`);
    //console.log(`<img src="./images/${nation}.png" style="width: 200px;">`);
    // const [recipe1, recipe2] = useRecipes();
    // console.log(`Weekly recipe 1:`, recipe1);
    // console.log(`Weekly recipe 2:`, recipe2);
    //useRecipes();
  })
  .catch((error) => {
    console.error("Hiba történt: ", error);
  });

const countries = ["italy", "french", "greek", "mexican", "USA", "hungarian"];
function getNation() {
  const nation = countries[Math.floor(Math.random() * countries.length)];
  return nation;
}

function getRecipes() {
  const nation = getNation();
  const recipes = models.filter((model) => model.country === nation);

  // Válaszd ki a 2 véletlenszerű receptet
  const recipe1 = recipes[Math.floor(Math.random() * recipes.length)];
  let recipe2 = recipes[Math.floor(Math.random() * recipes.length)];

  while (recipe1 === recipe2) {
    recipe2 = recipes[Math.floor(Math.random() * recipes.length)];
  }

  //   const fs = require("fs");

  //   const data = "data aeifh";

  //   // Asynchronously writes data to a file, replacing the file if it already exists.
  //   fs.writeFile("prev.json", data, (err) => {
  //     if (err) throw err;
  //     console.log("The file has been saved!");
  //   });
  return [recipe1, recipe2];
}

function useRecipes() {
  const [a, b] = getRecipes();
  return [a, b];
}

//document.write(`<img src="./images/${countries[5]}.png" style="width: 200px;">`);

//(`<img src="${countries[0]}.png">`);
