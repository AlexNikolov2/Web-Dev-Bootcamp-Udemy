const User = require("../models/User");

const userService = {
  getUser: async (id) => {
    return await User.findById(id);
  },

  getAllUsers: async () => {
    return await User.find();
  },

  register: async (userData) => {
    const user = new User(userData);
    await user.save();
    return user;
  },

  login: async (userData) => {
    const user = await User.findOne({ email: userData.email });
    if (!user || user.password !== userData.password) {
      throw new Error("Invalid email or password");
    }
    // Generate a token here if needed
    return "dummy-token"; // Replace with actual token generation logic
  },
};

module.exports = userService;
