var express = require("express");
var _ = require("lodash");
var router = express.Router();
var productModel = require("../models/productModel");

/* GET home page. */
router.get("/:nsx", async (req, res) => {
  // const carts = await productModel.find({ CreatedBy: req.params.nsx });
  const carts = [
    {
      _id: ObjectId("5dcf56ddf95543bab5602b73"),
      Name: "Áo sơ mi nam The Cosmo Jeffrey shirt màu xanh dươngTC1022079BL",
      Code: "",
      Metatitle: "",
      Description:
        "Áo sơ mi nam tay dài, cổ bẻ, phom suông cơ bản, chất cotton mềm mịn, thoáng mát. Bảng màu đa dạng, hiện đại, mang đến cho bạn nhiều lựa chọn. 100% Cotton",
      Images: [
        "https://salt.tikicdn.com/cache/w1200/ts/product/4e/d9/e4/7766d7aa83e444740c4f4233e22a831b.jpg"
      ],
      Price: "349.000",
      PromotionPrice: "",
      IncludedVAT: "true",
      Quantity: "150",
      Category: "Thời trang",
      CategoryUrl: "/categories/fashion",
      Detail: "",
      CreatedDate: "12/11/2019",
      CreatedBy: "THE COSMO",
      ModifiedBy: "",
      ModifiedDate: "",
      MetaKeywords: ""
    }
  ];

  res.render("createdBy", {
    title: "Black Hole",
    condition: false,
    carts
  });
});

module.exports = router;
