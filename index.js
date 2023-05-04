const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors());

app.get('/', (req, res) =>{
    res.send('JS FoodHub is running')
})



const chefs = require('./data/chefData.json')

app.get('/chefs', (req, res) =>{
    res.send(chefs);
})

app.get('/chefs/:id', (req, res) =>{
    const id = req.params.id;
    console.log(id);
    const selectedChef = chefs?.find(chef => chef.id === id)
    res.send(selectedChef);
})

const recipes = require('./data/recipes.json')

app.get('/recipes', (req, res) =>{
    res.send(recipes);
})

const recipeCategory = require('./data/recipeCategory.json')
app.get('/recipe-category', (req, res) =>{
    res.send(recipeCategory);
})

// app.get('/all-chefs/:id', (req, res) =>{
//     const id = parseInt(req.params.id)
//     if(id === 0){
//         res.send(chefs)
//     }
//     else{
//         const allChefs = chefs.filter(chef => parseInt(chef.chef_id) === id)
//         res.send(allChefs); 
//     }
// })

app.listen(port, () =>{
    console.log(`JS FoodHub API is running on port : ${port}`);
})