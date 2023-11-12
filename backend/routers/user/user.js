const express = require("express");
const router = express.Router();

router.get("/list/:cur/:page_size", (req, res, next) => {
    const { cur, page_size } = req.params;
    try {
        res.send(200).json({
            result: {
                code: 200,
                data: {}
            }
        })
    } catch (e) {
        console.error(e);
        throw new Error(e.message);
    }
});

module.exports = router;
