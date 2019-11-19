var express = require("express");
var _ = require("lodash");
var router = express.Router();
var productModel = require("../models/productModel");

/* GET home page. */

router.get("/:type", async (req, res) => {
  let type;
  switch (req.params.type) {
    case "Thời%20trang":
      type = "Thời trang";
      break;
    case "Thể%20thao":
      type = "Thể thao";
      break;
    case "Điện%20tử":
      type = "Điện tử";
      break;
    case "Nhà%20cửa%20-%20đời%20sống":
      type = "Nhà cửa - đời sống";
      break;
    case "Phụ%20kiện%20-%20thiết%20bị%20số":
      type = "Phụ kiện - thiết bị số";
      break;
    case "Phương%20tiện":
      type = "Phương tiện";
      break;
    case "Sách":
      type = "Sách";
      break;
    default:
      break;
  }
  if (type) {
    const carts = await productModel.find({
      Category: type
    });
    res.render("categories", {
      title: "Black Hole",
      condition: false,
      carts
    });
  }
});

router.get("/sport", async (req, res) => {
  const carts = await productModel.find();

  res.render("categories", {
    title: "Black Hole",
    condition: false,
    carts: carts.filter(cart => {
      return cart.Category === "Thể thao";
    })
  });
});

router.get("/fashion", async (req, res) => {
  const carts = await productModel.find();
  res.render("categories", {
    title: "Black Hole",
    condition: false,
    carts: carts.filter(cart => {
      return cart.Category === "Thời trang";
    })
  });
});

router.get("/electronic", async (req, res) => {
  const carts = await productModel.find();
  res.render("categories", {
    title: "Black Hole",
    condition: false,
    carts: carts.filter(cart => {
      return cart.Category === "Điện tử";
    })
  });
});

router.get("/transport", async (req, res) => {
  const carts = await productModel.find();

  res.render("categories", {
    title: "Black Hole",
    condition: false,
    carts: carts.filter(cart => {
      return cart.Category === "Phương tiện";
    })
  });
});

router.get("/book", async (req, res) => {
  const carts = await productModel.find();

  res.render("categories", {
    title: "Black Hole",
    condition: false,
    carts: carts.filter(cart => {
      return cart.Category === "Sách";
    })
  });
});

router.get("/toolkit", async (req, res) => {
  const carts = await productModel.find();

  res.render("categories", {
    title: "Black Hole",
    condition: false,
    carts: carts.filter(cart => {
      return cart.Category === "Phụ kiện - thiết bị số";
    })
  });
});

router.get("/food", async (req, res) => {
  const carts = await productModel.find();
  res.render("categories", {
    title: "Black Hole",
    condition: false,
    carts: carts.filter(cart => {
      return cart.Category === "Thực phẩm";
    })
  });
});

router.get("/lifestyle", async (req, res) => {
  const carts = await productModel.find();
  res.render("categories", {
    title: "Black Hole",
    condition: false,
    carts: carts.filter(cart => {
      return cart.Category === "Nhà cửa - đời sống";
    })
  });
});

module.exports = router;
