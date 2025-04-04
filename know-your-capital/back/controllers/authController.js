const { Router } = require("express");
const userService = require("../services/userService");

const router = Router();

router.post("/register", async (req, res) => {
  try {
    const user = await userService.register(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { token, user } = await userService.login(req.body);
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
