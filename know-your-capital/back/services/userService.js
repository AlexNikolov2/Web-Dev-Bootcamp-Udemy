const User = require("../models/User");

const userService = {
  getUser: async (id) => {
    return await User.findById(id);
  },

  getAllUsers: async () => {
    return await User.find();
  },

  register: async (userData) => {
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      throw new Error("User already exists with this email");
    }
    const user = new User(userData);
    await user.save();
    return user;
  },

  login: async (userData) => {
    const user = await User.findOne({ email: userData.email });
    if (!user || user.password !== userData.password) {
      throw new Error("Invalid email or password");
    }
    return "dummy-token";
  },
};

module.exports = userService;
