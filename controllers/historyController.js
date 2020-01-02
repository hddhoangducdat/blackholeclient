var historyModel = require("../models/historyModel");
var cartModel = require("../models/cartModel");

exports.history_list = async (req, res) => {
  let response = await historyModel.find({ userId: req.user._id });
  const result = response.map(r => {
    let condition1, condition2, condition3, condition4;
    condition4 = false;
    let sum = 0;
    r.bill.forEach(cart => (sum = sum + parseInt(cart.price) * cart.number));
    switch (r.history) {
      case "findItem":
        condition1 = "active";
        break;
      case "shipping":
        condition2 = "active";
        break;
      case "cancle":
        condition4 = true;
        break;
      default:
        condition3 = "active";
        break;
    }
    return {
      _id: r._id,
      bill: r.bill,
      condition1,
      condition2,
      condition3,
      condition4,
      sum
    };
  });
  console.log(result);
  res.render("historyPage", {
    title: "Black Hole",
    condition: response ? false : true,
    user: req.user,
    history: result
  });
};

exports.purchase_product = async (req, res) => {
  let bill = await cartModel.findOne({ userId: req.user._id });
  if (bill && bill.carts.length !== 0) {
    console.log(sum);
    let history = new historyModel({
      userId: req.user._id,
      history: "findItem",
      bill: bill.carts
    });
    await history.save();
    bill.carts = [];
    await bill.save();
  }
};

exports.cancle_bill = async (req, res) => {
  console.log("haha");
  let bill = await historyModel.findById(req.body.id);
  bill.history = "cancle";
  await bill.save();
};
