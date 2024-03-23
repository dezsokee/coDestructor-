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

app.get("/recipeByIngredients", async (req, res) => {
  try {
    const fetch = await import("node-fetch");

    // Meghívjuk a /userIngredients végpontot, hogy lekérdezzük a felhasználó által megadott összetevőket
    const userIngredientsResponse = await fetch.default(
      "http://localhost:8081/userIngredients"
    );
    const userIngredientsData = await userIngredientsResponse.json();

    // Kinyerjük az összetevők neveit egy tömbbe
    const ingredients = userIngredientsData.map((item) => item.ingredient);
    const length = ingredients.length;

    const nationQuery = await client.query(`SELECT nation FROM "nation";`);
    const p_nation = nationQuery.rows;

    let randomNation = p_nation[Math.floor(Math.random() * p_nation.length)];
    const nation = randomNation.nation;

    let recipesQuery;

    switch (length) {
      case 1: {
        const queryString = `
          SELECT *
          FROM recipes
          WHERE ingredients LIKE '%${ingredients[0]}%' 
          AND country = '${nation}';
        `;
        recipesQuery = await client.query(queryString);

        break;
      }

      case 2: {
        const queryString = `
        SELECT *
        FROM recipes
        WHERE ingredients LIKE '%${ingredients[0]}%'
        AND ingredients LIKE '%${ingredients[1]}%' 
        AND country = '${nation}';
      `;
        recipesQuery = await client.query(queryString);

        break;
      }

      case 3: {
        const queryString = `
          SELECT *
          FROM recipes
          WHERE ingredients LIKE '%${ingredients[0]}%' 
          AND ingredients LIKE '%${ingredients[1]}%' 
          AND ingredients LIKE '%${ingredients[2]}%' 
          AND country = '${nation}';
        `;
        recipesQuery = await client.query(queryString);

        break;
      }

      case 4: {
        const queryString = `
        SELECT *
        FROM recipes
        WHERE ingredients LIKE '%${ingredients[0]}%' 
        AND ingredients LIKE '%${ingredients[1]}%' 
        AND ingredients LIKE '%${ingredients[2]}%' 
        AND ingredients LIKE '%${ingredients[3]}%'
        AND country = '${nation}';
        `;
        recipesQuery = await client.query(queryString);

        break;
      }

      case 5: {
        const queryString = `
        SELECT *
        FROM recipes
        WHERE ingredients LIKE '%${ingredients[0]}%' 
        AND ingredients LIKE '%${ingredients[1]}%' 
        AND ingredients LIKE '%${ingredients[2]}%' 
        AND ingredients LIKE '%${ingredients[3]}%'
        AND ingredients LIKE '%${ingredients[4]}%'
        AND country = '${nation}';
        `;
        recipesQuery = await client.query(queryString);

        break;
      }

      default:
        {
          console.error("Hiba a receptek lekérdezése során:");
          res.status(500).json();
        }
        break;
    }

    res.json(recipesQuery.rows);
  } catch (error) {
    console.error("Hiba a receptek lekérdezése során:", error);
    res.status(500).json({ error: error.message });
  }
});

app.get("/ingredients", async (req, res) => {
  try {
    const ingredients = await client.query(
      `SELECT ingredient_name FROM "ingredients";`
    );

    res.json(ingredients.rows);
  } catch (error) {
    console.error("Hiba a receptek lekérdezés során:", error);
    res.status(500).json({ error: error.message });
  }
});

app.get("/recipeByIngredients", async (req, res) => {
  try {
    const fetch = await import("node-fetch");

    // Meghívjuk a /userIngredients végpontot, hogy lekérdezzük a felhasználó által megadott összetevőket
    const userIngredientsResponse = await fetch.default(
      "http://localhost:8081/userIngredients"
    );
    const userIngredientsData = await userIngredientsResponse.json();

    // Kinyerjük az összetevők neveit egy tömbbe
    const ingredients = userIngredientsData.map((item) => item.ingredient);

    // Összetevők összefűzése vesszővel elválasztva szöveges karakterlánccá
    const ingredientList = ingredients.join(", ");

    // Keresünk a receptek között olyanokat, amelyek tartalmazzák az összes megadott összetevőt
    const queryString = `
      SELECT *
      FROM recipes
      WHERE ARRAY[${ingredientList}] <@ ingredients;
    `;
    const recipesQuery = await client.query(queryString);

    // Visszaküldjük a megtalált recepteket a kliensnek
    res.json(recipesQuery.rows);
  } catch (error) {
    console.error("Hiba a receptek lekérdezése során:", error);
    res.status(500).json({ error: error.message });
  }
});

app.use(express.json());
app.use(bodyParser.json());

app.post("/createIngredients", (req, res) => {
  const data = req.body;

  // res.status(200).json({ message: "Data received successfully" });
  const data_ingredient = [
    ...new Set(Object.values(data).filter((ingredient) => ingredient !== "")),
  ];

  client.query(`DELETE FROM user_ingredient;`);

  try {
    data_ingredient.forEach((element) => {
      client.query(
        `INSERT INTO user_ingredient (ingredient) VALUES ('${element}');`
      );
    });
  } catch (error) {
    console.log("Hiba a user_ingredient beszúrás során", error);
    res.status(500).json({ message: "Internal Server Error" });
  }

  res.status(200).json({ message: "Data received successfully" });
});

app.get("/userIngredients", async (req, res) => {
  try {
    const ingredients = await client.query(
      `SELECT ingredient FROM user_ingredient;`
    );
    res.json(ingredients.rows);
  } catch (error) {
    console.log(error, "Hiba a user_ingredient lekérdezés során");
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/getPoints", async (req, res) => {
  try {
    const points = await client.query(`SELECT points FROM point WHERE id = 1;`);
    res.json(points.rows);
  } catch (error) {
    console.log(error, "Hiba a user points lekérdezés során");
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/updatePoints", async (req, res) => {
  const points = req.body.points;

  try {
    await client.query(`UPDATE point SET points = ${points} WHERE id = 1`);
    res.status(200).json({ message: "Points updated successfully" });
  } catch (error) {
    console.error("Error updating points:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/increasePoints", async (req, res) => {
  const points = req.body.points;

  try {
    // Az SQL lekérdezés, amely növeli a pontokat a megadott értékkel
    const query = `
    UPDATE point
    SET points = points + ${points}
    WHERE id = 1;
    `;

    await client.query(query);
    res.status(200).json({ message: "Points updated successfully" });
  } catch (error) {
    console.error("Error increasing points:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(8081, () => {
  console.log("A szerver fut a 8081-es porton");
});
