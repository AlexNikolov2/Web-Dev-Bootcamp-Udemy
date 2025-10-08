const { Router } = require("express");
const userService = require("../services/userService");

const router = Router();

router.get("/:id", async (req, res) => {
  try {
    const user = await userService.getUser(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/:id/edit", async (req, res) => {
  try {
    console.log("Received edit request for user ID:", req.params.id);
    console.log("Request body:", req.body);

    const user = await userService.editUser(req.params.id, req.body);
    res.status(200).json(user);
  } catch (error) {
    console.error("Edit user error:", error);
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
