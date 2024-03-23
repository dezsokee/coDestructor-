const { Client } = require("pg");
const express = require("express");
const cors = require("cors");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
<<<<<<< HEAD
<<<<<<< HEAD
  password: "geriike",
=======
  password: "200342",
>>>>>>> 71ba4994d3d798514224f71320395d6af75fb2f7
=======
  password: "geriike",
  password: "200342",
>>>>>>> e9f7e40904a7ce3dbf42b1a2faa28cf6a74f6c0d
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

    console.log(p_nation);

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

    console.log(recipe1);
    console.log(recipe2);

    res.json({ recipe1, recipe2 });
  } catch (error) {
    console.error("Hiba a lekérdezés során:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("A szerver fut a 8081-es porton");
});
