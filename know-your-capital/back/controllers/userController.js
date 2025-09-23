const { Router } = require("express");
const userService = require("../services/userService");

const router = Router();

router.put("/:id/edit", async (req, res) => {
  try {
    const user = await userService.editUser(req.params.id, req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
