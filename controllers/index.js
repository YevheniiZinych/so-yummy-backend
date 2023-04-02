const controllers = require("./AuthController");

module.exports = {
  register: controllers.register,
  login: controllers.login,
  getCurrent: controllers.getCurrent,
  logout: controllers.logout,
};
