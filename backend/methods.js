const { Client } = require("pg");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

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
    const nationQuery = await client.query(`SELECT nation FROM "nations";`);
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
    // console.log(ingredients.rows);

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

app.use(express.json());
app.use(bodyParser.json());

app.post("/createIngredients", (req, res) => {
  const data = req.body;

  res.status(200).json({ message: "Data received successfully" });

  client.query(`DELETE FROM user_ingredient;`);

  const data_ingredients = [
    ...new Set(
      Object.values(data[0]).filter((ingredient) => ingredient !== "")
    ),
  ];

  data_ingredients.forEach((element) => {
    client.query(
      `INSERT INTO user_ingredient (ingredient) VALUES ('${element}');`
    );
  });

  console.log(data_ingredients);
});

app.get("/userIngredients", async (req, res) => {
  const ingredients = await client.query(`SELECT ingredient FROM user_ingredient;`);
  res.json(ingredients.rows);
});

app.listen(8081, () => {
  console.log("A szerver fut a 8081-es porton");
});
