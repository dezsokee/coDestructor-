let models = []

fetch("new_recipes.json")
.then(response => response.json())
.then(data => {
    for (let key in data) {
        models.push(data[key]);
    }
    console.log(models);
})
.catch(error => {
    console.error("Hiba tortent: ", error);
})