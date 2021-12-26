// 生成验证码
const cvCodeList = require("./../const/index").cvCodeList;

const cvCode = () => {
  const timestamp = Date.now(); // 获取当前时间戳
  let code = "";
  for (let i = 0; i < 4; i++) {
    let random = Math.floor(Math.random() * cvCodeList.length); // 随机生成0-9的数字
    code += cvCodeList[random]; // 将生成的数字拼接到code中
  }
  return { code, timestamp }; // 返回生成的验证码和时间戳
};
module.exports = {
  cvCode,
};
