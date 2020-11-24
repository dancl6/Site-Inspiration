const router = require('express').Router();
const { Reason } = require('../../models');
const passport = require('../../utils/passport');
const isAuth = require('../../utils/middleware/isAuth');

// GET all reasons
router.get('/', (req, res) => {
    Reason.findAll({
        // attributes: ['id', 'category_name'],
        // include: {
        //     model: Product,
        //     attributes: ['id','product_name', 'price']
        // }
    })
    .then(dbCatData => res.json(dbCatData))
    .catch(err => res.status(500).json(err));
});

//POST new quote
router.post('/', (req, res) => {
    Reason.create({
        reason_tag:  req.body.reason_tag,
        // quote: req.body.quote,
        // reference: req.body.reference,
        // user_id: req.body.user_id,
        // reason_id: req.body.reason_id
       })
    .then(dbCatData => res.json(dbCatData))
    .catch(err => res.status(500).json(err));
});

module.exports = router