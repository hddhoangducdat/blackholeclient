const express = require('express');
const productModel = require('../models/productModel');
// const isAuthenticated = require('../middlewares/isAuthenticated');
const router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  const carts = await productModel.find();

  res.render('homePage', {
    title: 'Black Hole',
    condition: false,
    user: req.user,
    carousel: [
      {
        cartId: 1,
        picture: 'https://cdn.mos.cms.futurecdn.net/HvjfsxzQHCZxpUYTVgyBDM.jpg',
        caption: 'MacBook Air (2019)',
        condition: true,
        id: 0
      },
      {
        cartId: 5,
        picture:
          'https://cdn.motor1.com/images/mgl/MoVM6/s1/lamborghini-sc18-alston.jpg',
        caption: 'Lamborghini Aventador Successor Allegedly Arriving In 2020',
        condition: false,
        id: 1
      },
      {
        cartId: 6,
        picture:
          'https://tallypress.com/wp-content/uploads/2018/09/Best-Fiction-and-Nonfiction-Books-of-2017.jpg',
        caption: 'Tuyển tập những quyển sách hay',
        condition: false,
        id: 2
      }
    ],
    carts
  
  });
});

module.exports = router;
