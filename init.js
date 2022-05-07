const initDB = require("./controller/init");

initDB.initSystemUser();
initDB.initAccountPool();
initDB.initSuperUser();
initDB.initBlogCategory();
initDB.initBlogTag();
