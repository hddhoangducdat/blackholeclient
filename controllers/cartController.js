var cartModel = require("../models/cartModel");

exports.cart_list =  (req, res) => {
  //console.log(req.user._id);
  // const { carts } = await cartModel.findOne({
  //   userId: req.user._id
  // });

  let carts = req.session.Cart;
  let sum = 0;

  carts.forEach(cart => (sum = sum + parseInt(cart.productPrice)));

  res.render("cartPage", {
    title: "Black Hole",
    // user: req.user,
    // condition: false,
    sum,
    // carts
  });
};

exports.addToCart = async (req, res) => {
  if (!req.session.Cart) {
    req.session.Cart = [{
      productName: req.body.productName,
      productPrice: req.body.productPrice
    }]
  }
  else {
    req.session.Cart.push({
      productName: req.body.productName,
      productPrice: req.body.productPrice
    });
  }

  await req.session.save();
  console.log(req.session.Cart);
}
