const { Client } = require("pg");
const express = require("express");
const cors = require("cors");

const client = new Client({
  host: "localhost",
  user: "postgres",
<<<<<<< HEAD
  password: "geriike",
=======
>>>>>>> a18683ad09ae389734e0499e72416d79dac1849d
  port: 5432,
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

app.get("/recipeByIngredients/:ingredients{[]}", async (req, res) => {
  //const p_array = ["milk", "egg", "flour", "beef", "chicken"];

  const p_array = req.params;
  console.log(p_array);

  let p_array_random = [];
  p_array_random.push(p_array[Math.floor(Math.random() * p_array.length)]);
  for (let i = 1; i < 3; i++) {
    p_array_random.push(p_array[Math.floor(Math.random() * p_array.length)]);
    while (p_array_random[i] === p_array_random[i - 1]) {
      p_array_random[i] = p_array[Math.floor(Math.random() * p_array.length)];
    }
  }

  console.log(p_array_random);

  const recipesQuery = await client.query(
    `SELECT * FROM "recipes" WHERE ingredients LIKE '%${p_array_random[0]}%' OR ingredients LIKE
    '%${p_array_random[1]}%' OR ingredients LIKE '%${p_array_random[2]}%' FETCH FIRST 2 ROWS ONLY;`
  );

  console.log(recipesQuery.rows);

  res.json(recipesQuery.rows);

  
});

app.listen(8081, () => {
  console.log("A szerver fut a 8081-es porton");
});
