const router = require('express').Router();
const { Category, Product } = require('../../models');

//GET all categories
router.get('/', (req, res) => {
    Quotes.findAll({
        attributes: ['id', 'category_name'],
        include: {
            model: Product,
            attributes: ['id','product_name', 'price']
        }
    })
    .then(dbCatData => res.json(dbCatData))
    .catch(err => res.status(500).json(err));
});

//GET single category
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

//POST new category
router.post('/', (req, res) => {
    Quotes.create({
        category_name: req.body.category_name
    })
    .then(dbCatData => res.json(dbCatData))
    .catch(err => res.status(500).json(err));
});

//PUT update category
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

//DELETE category
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