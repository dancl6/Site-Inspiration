const router = require('express').Router();
const { Quotes, User, User_Quotes, Reason } = require('../../models');

//GET all quotes
router.get('/', (req, res) => {
    Quotes.findAll({
        // attributes: ['id', 'category_name'],
        include: [
        {
            model: Reason
        },
        {
            model: User
        }
    ]
    
        
    })
    .then(dbQuotesData => res.json(dbQuotesData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
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
        reason_id: req.body.reason_id,
        userIds: req.body.userIds,
        include: {
            model: 'user_quotes',
            attributes: ['user_id'],
        }
       })
        .then((quotes) => {
            if (req.body.userIds.length) {
            const userIdArr = req.body.userIds.map((user_id) => {
                console.log("quote id is :", quotes.id)
                console.log("user_id is :", user_id)

                return {
                    quotes_id: quotes.id,
                    user_id,
                }
            });
            console.log("userIdArr is :", userIdArr)
            return User_Quotes.bulkCreate(userIdArr);
        }
        // if no user id, just respond
        res.status(200).json(quote);
    })
    .then((userIds) => res.status(200).json(userIds))
    // } res.json(dbCatData))
    .catch(err =>{
        console.log(err);
        res.status(400).json(err);
    })
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