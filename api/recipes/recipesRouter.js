const express = require('express')

const Recipe = require('../recipes/recipesModel')

const router = express.Router()

router.get("/", (req, res) => {
    Recipe.getRecipes().then(recipes => {
        res.status(200).json(recipes)
    }).catch(err => {
        res.status(500).json({message: err.message})
    })
})

router.get("/:id/ingredients", (req, res) => {
    const idVar = req.params.id
    Recipe.getShoppingList(idVar).then(ingred => {
        res.status(200).json(ingred)
    }).catch(err => {
        res.status(500).json({message: err.message})
    })
})

router.get("/:id/instructions", (req, res) =>{
    const idVar = req.params.id
    Recipe.getInstructions(idVar).then(instruct => {
        res.status(200).json(instruct)
    }).catch(err => {
        res.status(500).json({message: err.message})
    })
})
module.exports = router