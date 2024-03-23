const fs = require("fs");
const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "geriike",
  database: "EF",
});

fs.readFile("new_recipes.json", "utf8", (err, data) => {
  if (err) {
    console.error("Hiba a JSON fájl olvasása során:", err);
    return;
  }

  try {
    // JSON adatok átalakítása JavaScript objektummá
    const recipes = JSON.parse(data);

    client
      .connect()
      .then(() => {
        console.log("Kapcsolódva a PostgreSQL adatbázishoz");

        // Tömb az összes beszúrási Promise tárolásához
        const insertPromises = [];

        // JSON objektumok feldolgozása és beszúrása
        recipes.forEach((recipe) => {
          const name = recipe.Name;
          const ingredientsArray = recipe.Ingredients;
          let ingredients = "";

          ingredientsArray.forEach((ingredientString) => {
            ingredients += "/" + ingredientString;
          });

          console.log(ingredients);

          const methodArray = recipe.Method;
          let method = "";

          methodArray.forEach((step) => {
            method += "/" + step;
          });

          const description = recipe.Description;
          const country = recipe.country;

          // Beszúrás a PostgreSQL adatbázisba
          const insertPromise = client.query('INSERT INTO recipes (name, description, ingredients, method, country) VALUES ($1, $2, $3, $4, $5)', [name, description, ingredients, method, country])
            .then(() => {
              console.log('Recept sikeresen beszúrva');
            })
            .catch(error => {
              console.error('Hiba a recept beszúrása során:', error);
            });

          insertPromises.push(insertPromise);
        });

        // Várjuk meg, amíg az összes beszúrási Promise befejeződik
        Promise.all(insertPromises)
          .then(() => {
            console.log("Összes recept sikeresen beszúrva");
          })
          .catch((error) => {
            console.error("Hiba az összes recept beszúrása során:", error);
          })
          .finally(() => {
            // Kliens lezárása
            client.end();
          });
      })
      .catch((error) => {
        console.error(
          "Hiba a PostgreSQL adatbázishoz való kapcsolódás során:",
          error
        );
      });
  } catch (error) {
    console.error("Hiba a JSON adatok feldolgozása során:", error);
  }
});
