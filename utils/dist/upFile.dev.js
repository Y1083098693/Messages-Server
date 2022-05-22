"use strict";

// 上传文件的配置
var _require = require("./index"),
    formatDate = _require.formatDate,
    randomName = _require.randomName;

var fs = require("fs");

var multer = require("multer");

var storage = multer.diskStorage({
  /**设置上传路径，跨可以使用函数或者字符串来设置 */
  destination: function destination(req, file, cb) {
    var date = formatDate(new Date(), false);
    var path = "./public/uploads";
    var isExitPath = fs.existsSync(path);
    var pathDate = "./public/uploads/" + date;
    var isExitPathDate = fs.existsSync(pathDate); // 判断路径是否存在

    if (!isExitPath) {
      // 如果不存在，创建路径
      fs.mkdirSync(path);
    } // 判断路径是否存在


    if (!isExitPathDate) {
      // 如果不存在，创建路径
      fs.mkdirSync(pathDate);
    } // 设置回调路径


    cb(null, pathDate);
  },
  // 重命名文件
  filename: function filename(req, file, cb) {
    cb(null, file.fieldname + "-" + randomName() + "-" + file.originalname);
  }
});
/**
 * multer使用可以参考以下：
 * 1. https://www.npmjs.com/package/multer
 * 2. https://www.jianshu.com/p/42714ca7b6ce
 */

var uploadFile = multer({
  storage: storage
});
module.exports = {
  uploadFile: uploadFile
};