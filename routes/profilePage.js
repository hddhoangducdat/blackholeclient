var express = require("express");
var isAuthenticated = require("../middlewares/isAuthenticated");
var profileController = require("../controllers/userController");
var router = express.Router();
var multer = require("multer");
var path = require("path");

const storage = multer.diskStorage({
  destination: "public/uploads/",
  filename: function(req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  }
});

const upload = multer({
  storage
}).single("userImage");

router.get("/", isAuthenticated, profileController.profile_info);

router.post(
  "/submit",
  isAuthenticated,
  upload,
  profileController.upload_profile
);

module.exports = router;
