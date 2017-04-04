const express = require('express');
const router = express.Router();

const Beer = require('../models/beer');

// get all drinks
router.get('/beer', function (req, res, next) {
    res.send({ type: 'GET' });
});

// add drinks
router.post('/beer', function (req, res, next) {

    // var newBeer = new Beer(req.body);
    // newBeer.save(function () {
    //     console.log('Beer saved');
    // });

    Beer.create(req.body).then(function (beer) {
        res.send(
            {
                beer: beer
            }
        );
    }).catch(next);


});

// update a drink from db
router.put('/beer/:id', function (req, res, next) {
    Beer.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(beer){
        res.send({
            beer : beer 
        });
    }).catch(next);
});

// delete drink from db
router.delete('/beer/:id', function (req, res, next) {

    Beer.findByIdAndRemove({ _id: req.params.id }).then(function (beer) {
        res.send({ beer: beer });
    }).catch(next);

});

module.exports = router;