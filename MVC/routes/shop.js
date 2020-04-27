const express = require('express');
const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getShopProducts);

router.get('/products/:productId',shopController.getShopProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.post('/create-order', shopController.postOrder);


router.post('/cart-delete-item', shopController.deleteCartItem);


router.get('/orders', shopController.getOrders);


router.get('/checkout', shopController.getCheckout);


module.exports = router;
