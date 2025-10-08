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
    console.log("UserService: Editing user with ID:", id);
    console.log("UserService: Data to update:", userData);

    const user = await User.findById(id);
    if (!user) {
      throw new Error("User not found");
    }

    console.log("UserService: User before update:", user.toObject());
    Object.assign(user, userData);
    console.log("UserService: User after assign:", user.toObject());

    await user.save();
    console.log("UserService: User after save:", user.toObject());

    return user;
  },
};

module.exports = userService;
