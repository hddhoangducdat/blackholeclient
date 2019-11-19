var express = require('express');
var _ = require('lodash');
var router = express.Router();
var productModel = require('../models/productModel');

/* GET home page. */

router.get('/:type', async (req, res) => {
  let type;
  switch (req.params.type) {
    case 'fashion':
      type = 'Thời trang';
      break;
    case 'sport':
      type = 'Thể thao';
      break;
    case 'electronic':
      type = 'Điện tử';
      break;
    case 'lifestyle':
      type = 'Nhà cửa - đời sống';
      break;
    case 'toolkit':
      type = 'Phụ kiện - thiết bị số';
      break;
    case 'transport':
      type = 'Phương tiện';
      break;
    case 'book':
      type = 'Sách';
      break;
    case 'food':
      type = 'Thực phẩm';
      break;
    default:
      break;
  }
  if (type) {
    const carts = await productModel.find({
      Category: type
    });
    res.render('categories', {
      title: 'Black Hole',
      condition: false,
      carts
    });
  }
});

// router.get("/sport", async (req, res) => {
//   const carts = await productModel.find();

//   res.render("categories", {
//     title: "Black Hole",
//     condition: false,
//     carts: carts.filter(cart => {
//       return cart.Category === "Thể thao";
//     })
//   });
// });

// router.get("/fashion", async (req, res) => {
//   const carts = await productModel.find();
//   res.render("categories", {
//     title: "Black Hole",
//     condition: false,
//     carts: carts.filter(cart => {
//       return cart.Category === "Thời trang";
//     })
//   });
// });

// router.get("/electronic", async (req, res) => {
//   const carts = await productModel.find();
//   res.render("categories", {
//     title: "Black Hole",
//     condition: false,
//     carts: carts.filter(cart => {
//       return cart.Category === "Điện tử";
//     })
//   });
// });

// router.get("/transport", async (req, res) => {
//   const carts = await productModel.find();

//   res.render("categories", {
//     title: "Black Hole",
//     condition: false,
//     carts: carts.filter(cart => {
//       return cart.Category === "Phương tiện";
//     })
//   });
// });

// router.get("/book", async (req, res) => {
//   const carts = await productModel.find();

//   res.render("categories", {
//     title: "Black Hole",
//     condition: false,
//     carts: carts.filter(cart => {
//       return cart.Category === "Sách";
//     })
//   });
// });

// router.get("/toolkit", async (req, res) => {
//   const carts = await productModel.find();

//   res.render("categories", {
//     title: "Black Hole",
//     condition: false,
//     carts: carts.filter(cart => {
//       return cart.Category === "Phụ kiện - thiết bị số";
//     })
//   });
// });

// router.get("/food", async (req, res) => {
//   const carts = await productModel.find();
//   res.render("categories", {
//     title: "Black Hole",
//     condition: false,
//     carts: carts.filter(cart => {
//       return cart.Category === "Thực phẩm";
//     })
//   });
// });

// router.get("/lifestyle", async (req, res) => {
//   const carts = await productModel.find();
//   res.render("categories", {
//     title: "Black Hole",
//     condition: false,
//     carts: carts.filter(cart => {
//       return cart.Category === "Nhà cửa - đời sống";
//     })
//   });
// });

module.exports = router;
