const { Router } = require('jai-server');
const {getCartTotal} = require('../services/cart');

const router= new Router();


router.get('/', (req, res) => {
    let {products}=req.query;
    if(!products){
        res.status(400).send({error:"products query parameter is required"});
        return;
    }
    products=products.split(',').map(p => p.trim());
    res.send(getCartTotal(products));

})


module.exports=router;
