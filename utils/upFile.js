// 上传文件的配置
const { formatDate, randomName } = require("./index");
const fs = require("fs");
const multer = require("multer");
const storage = multer.diskStorage({
  /**设置上传路径，跨可以使用函数或者字符串来设置 */
  destination(req, file, cb) {
    const date = formatDate(new Date(), false);
    const path = "./public/uploads";
    const isExitPath = fs.existsSync(path);
    const pathDate = "./public/uploads/" + date;
    const isExitPathDate = fs.existsSync(pathDate);
    // 判断路径是否存在
    if (!isExitPath) {
      // 如果不存在，创建路径
      fs.mkdirSync(path);
    }
    // 判断路径是否存在
    if (!isExitPathDate) {
      // 如果不存在，创建路径
      fs.mkdirSync(pathDate);
    }
    // 设置回调路径
    cb(null, pathDate);
  },
  // 重命名文件
  filename(req, file, cb) {
    cb(null, file.fieldname + "-" + randomName() + "-" + file.originalname);
  },
});

/**
 * multer使用可以参考以下：
 * 1. https://www.npmjs.com/package/multer
 * 2. https://www.jianshu.com/p/42714ca7b6ce
 */

const uploadFile = multer({
  storage,
});

module.exports = {
  uploadFile,
};
