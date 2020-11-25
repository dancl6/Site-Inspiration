const router = require('express').Router();
const { Quotes, User } = require('../../models');

//GET all quotes
router.get('/', (req, res) => {
    Quotes.findAll({
        // attributes: ['id', 'category_name'],
        // include: {
        //     model: Product,
        //     attributes: ['id','product_name', 'price']
        // }
    })
    .then(dbCatData => res.json(dbCatData))
    .catch(err => res.status(500).json(err));
});

//GET single quote
router.get('/:id', (req, res) => {
    Quotes.findOne({
        where: {
            id: req.params.id
        },
        include: {
            model: Product,
            attributes: ['product_name', 'price']
        }
    })
    .then(dbCatData => {
        if (!dbCatData) {
            res.status(400).json({ message: 'No category found with this id!' });
            return
        }
        res.json(dbCatData)
    })
    .catch(err => res.status(500).json(err));
});

//POST new quote
router.post('/', (req, res) => {
    Quotes.create({
        author:  req.body.author,
        quote: req.body.quote,
        reference: req.body.reference,
        user_id: req.body.user_id,
        reason_id: req.body.reason_id,
        include: {
            model: 'user',
            attributes: ['user_id'],
        }
       })
    .then(dbCatData => res.json(dbCatData))
    .catch(err => res.status(500).json(err));
});

//PUT update quote
router.put('/:id', (req, res) => {
    Quotes.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(dbCatData => {
        if (!dbCatData) {
            res.status(400).json({ message: 'No category found with this id' })
            return
        }
        res.json(dbCatData)
    })
    .catch(err => res.status(500).json(err));
});

//DELETE quote
router.delete('/:id', (req, res) => {
    Quotes.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbCatData => {
        if (!dbCatData) {
            res.status(400).json({ message: 'No category found with this id' })
            return
        }
        res.json(dbCatData)
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router