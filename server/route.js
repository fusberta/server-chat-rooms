const express = require("express");
const router = express.Router();

router.get("/", (req, resp) => {
    resp.send("Это только мой мир!");
});

module.exports = router;