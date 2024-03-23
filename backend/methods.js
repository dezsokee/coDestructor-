const { Client } = require("pg");
const express = require("express");
const cors = require("cors");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "2002boti",
  database: "EF",
});

const app = express();
app.use(cors());

client
  .connect()
  .then(() => {
    console.log("Kapcsolódva a PostgreSQL adatbázishoz");
  })
  .catch((error) => {
    console.error(
      "Hiba a PostgreSQL adatbázishoz való kapcsolódás során:",
      error
    );
  });

app.get("/recipe", async (req, res) => {
  try {
    const nationQuery = await client.query(`SELECT nation FROM "nation";`);
    const p_nation = nationQuery.rows;

    let randomNation = p_nation[Math.floor(Math.random() * p_nation.length)];

    const recipesQuery = await client.query(
      `SELECT * FROM "recipes" WHERE "country" = '${randomNation.nation}';`
    );
    const recipes_array = recipesQuery.rows;

    const recipe1 =
      recipes_array[Math.floor(Math.random() * recipes_array.length)];
    let recipe2 =
      recipes_array[Math.floor(Math.random() * recipes_array.length)];
    while (recipe1 === recipe2) {
      recipe2 = recipes_array[Math.floor(Math.random() * recipes_array.length)];
    }

    // console.log(recipe1);
    // console.log(recipe2);

    res.json({ recipe1, recipe2 });
  } catch (error) {
    console.error("Hiba a lekérdezés során:", error);
    res.status(500).json({ error: error.message });
  }
});

app.get("/ingredients", async (req, res) => {
  try {
    const ingredients = await client.query(
      `SELECT ingredient_name FROM "ingredients";`
    );
    console.log(ingredients.rows);

    res.json(ingredients.rows);
  } catch (error) {}
});

app.get("/recipeByIngredients/:ingredient", async (req, res) => {
  const { ingredient } = req.params;

  try {
    const nationQuery = await client.query(`SELECT nation FROM "nation";`);
    const p_nation = nationQuery.rows;

    let randomNation = p_nation[Math.floor(Math.random() * p_nation.length)];

    const recipesQuery = await client.query(
      `SELECT * FROM "recipes" WHERE "country" = '${randomNation.nation}' AND ingredients LIKE '%${ingredient}%';`
    );
    const recipes_array = recipesQuery.rows;

    const recipe1 =
      recipes_array[Math.floor(Math.random() * recipes_array.length)];
    let recipe2 =
      recipes_array[Math.floor(Math.random() * recipes_array.length)];
    while (recipe1 === recipe2) {
      recipe2 = recipes_array[Math.floor(Math.random() * recipes_array.length)];
    }

    res.json({ recipe1, recipe2 });
  } catch (error) {
    console.error("Hiba a lekérdezés során:", error);
    res.status(500).json({ error: error.message });
  }
});

app.post("/createIngredients", (req, res) => {
  const { data } = req.body;
  console.log("Received data from React Native:", data);
  // Process the data as needed
  console.log(data);
  res.sendStatus(200);
});

app.listen(8081, () => {
  console.log("A szerver fut a 8081-es porton");
});
