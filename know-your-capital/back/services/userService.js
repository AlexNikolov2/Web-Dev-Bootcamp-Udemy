const User = require("../models/User");
const bcrypt = require("bcrypt");

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
    if (!user) {
      console.error("User not found");
      throw new Error("Invalid email or password");
    }
    const isPasswordValid = await bcrypt.compare(
      userData.password,
      user.password
    );
    if (!isPasswordValid) {
      console.error("Invalid password");
      throw new Error("Invalid email or password");
    }
    return { token: "dummy-token", user };
  },

  editUser: async (id, userData) => {
    const user = await User.findById(id);
    if (!user) {
      throw new Error("User not found");
    }

    Object.assign(user, userData);

    await user.save();

    return user;
  },
};

module.exports = userService;
