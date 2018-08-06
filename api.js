const express = require ("express");
//const models = require("./mongo");
const items = require("./items");

const router = express.Router();

router.post("/login", (req,res) => {
  console.log(req.body);
  res.send('OK');

})



router.get("/items", (req,res) => {
    res.json(items);
});

router.get("/item/:id", (req,res) => {
  const id = req.params.id;
  item = items.find(el => el.id.toString() === id.toString());
  if (item)
    res.json(item);
  else
    res.send("There is no such item in the list");
});

router.post("/item", (req,res) => {
  //console.log(req.query);
  const reqItem = req.body;
  console.log(reqItem);
  const item = items.find(el => el.name.toString() === reqItem.name.toString());
  if (item) {
    res.statusCode = 404;
    res.json({"error": "Such item does already exist"});
  }
  else {
    res.statusCode = 201;
    items.push(reqItem);
    res.send("Added");
  }


  // model.Item.findOne({name: reqItem.name, price: reqItem.price}).then((item)=>{
  //   if(!!item.name) {
  //     res.statusCode = 404;
  //     res.json({
  //       error: "Item exists"
  //     })
  //   }
  // });
  // item = new models.Item({name: reqItem.name, price: reqItem.price});
  // res.send("Item added");
});

router.get("/cart", (req,res) => {
  res.send("Implementation is in progress");
});

router.get("/orders", (req,res) => {
  res.send("Implementation is in progress");
});

// router.post("/cart/add", (req,res) => {
//   //console.log(req.query);

//   res.send("Added to cart");
// });

// router.post("/cart/purchase", (req,res) => {
//   //console.log(req.query);
  
//   res.send("purchase");
// });

// router.delete("cart/item/:id", (req,res) => {
//   const id = req.params.id;
//   res.send(`Delete the item`);// ${items[id]}
// });


module.exports = router;