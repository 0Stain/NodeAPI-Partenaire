const express = require('express')
const router = express.Router()
const Partenaire = require('../models/partenaire')


router.get('/', async(req,res) => {
    try{
           const partenaires = await Partenaire.find()
           res.json(partenaires)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const partenaire = await Partenaire.findById(req.params.id)
           res.json(partenaire)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const partenaire = new Partenaire({
        nom: req.body.nom,
        specialite: req.body.specialite,
        domaine: req.body.domaine,
        nationalite: req.body.nationalite,
    })

    try{
        const a1 =  await partenaire.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

//update a partenaire
router.patch('/:id', async(req,res) => {
    try{
        const partenaire = await Partenaire.findById(req.params.id) 
        partenaire.nom = req.body.nom
        partenaire.specialite = req.body.specialite
        partenaire.domaine = req.body.domaine
        partenaire.nationalite = req.body.nationalite
        const a1 =  await partenaire.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

module.exports = router