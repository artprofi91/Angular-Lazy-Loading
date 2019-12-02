const express = require("express");
const router = express.Router();
const items = require("../../data/items_list");

// Get All items
router.get("/", (req, res) => res.json(items));

// Paginate Items
router.get("/page/:page_number/amount/:page_amount", (req, res) => {
  //! Note: since our server is running locally, responses will be almost instant. To simulate a live server that will be a lot slower, a 1-second timeout is added before the endpoint is sending the response back.
  const page = parseInt(req.params.page_number) - 1;
  const pageAmount = parseInt(req.params.page_amount);
  const found = items.slice(page * pageAmount, (page + 1) * pageAmount);

  if (found) {
    setTimeout(() => {
      res.json(found);
    }, 1000);
  } else {
    res.status(400).json({ msg: `No items with the specified parameters` });
  }
});

module.exports = router;
