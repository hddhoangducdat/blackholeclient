// var userModel = require("../../models/userModel");

document.getElementById("form").addEventListener("submit", event => {
  event.preventDefault();
  console.log(event.target);
  //   console.log(event.target.phone.value);
  //   userModel.findByIdAndUpdate("5defe2a4e33b1c23da4e5c86", {
  //     phone: event.target.phone.value,
  //     address: event.target.address.value,
  //     sex: event.target.sex.value
  //   });
});
