var express = require("express");
var router = express.Router();
var cartController = require("../controllers/cartController");
var isAuthenticated = require("../middlewares/isAuthenticated");

/* GET home page. */
router.get("/", cartController.cart_list);
router.post("/addtocart", isAuthenticated, cartController.addToCart);
router.post("/removeItem", isAuthenticated, cartController.remove_item);

module.exports = router;
