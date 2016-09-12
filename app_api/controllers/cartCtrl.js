var models = require('../models');

console.log("inside cart controller")

//SHOW ALL ITEMS
module.exports.showAllItems = function(req,res){

    models.User.findById(req.params.uid)
    .then(function(user){
        models.Cart.findById(req.params.cid)
        .then(function(carts){
            res.json(carts);
        })
        .catch(function(err){
            console.error(err);
            res.status(500);
            res.send(err);
        });
    })
};




module.exports.cartAddProduct = function(req,res){

    var item = req.body;
    item.CartId = req.params.cid;

    models.Item.create(item)
    .then(function(item){
        res.sendStatus(201);
    })
    .catch(function(err){
        console.error(err);
        res.status(500);
        res.send(err);
    });
};
