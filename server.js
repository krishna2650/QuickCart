const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());


// ===============================
// MONGODB CONNECTION
// ===============================

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB Connected Successfully!");
    })
    .catch((error) => {
        console.log("MongoDB Connection Error:", error);
    });


// ===============================
// CART SCHEMA
// ===============================

const cartSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    quantity: {
        type: Number,
        default: 1
    }
});

const Cart = mongoose.model("Cart", cartSchema, "cart");


// ===============================
// ADD PRODUCT
// ===============================

app.post("/add-to-cart", async (req, res) => {

    try {

        const existingProduct = await Cart.findOne({
            name: req.body.name
        });

        if (existingProduct) {

            existingProduct.quantity += 1;

            await existingProduct.save();

            res.json({
                message: "Product quantity increased!"
            });

        } else {

            const product = new Cart({
                name: req.body.name,
                price: req.body.price,
                image: req.body.image,
                quantity: 1
            });

            await product.save();

            res.json({
                message: "Product added to cart!"
            });
        }

    } catch (error) {

        res.status(500).json({
            message: "Error adding product",
            error: error.message
        });

    }

});


// ===============================
// GET CART
// ===============================

app.get("/cart", async (req, res) => {

    try {

        const cartItems = await Cart.find();

        res.json(cartItems);

    } catch (error) {

        res.status(500).json({
            message: "Error fetching cart",
            error: error.message
        });

    }

});


// ===============================
// INCREASE QUANTITY
// ===============================

app.put("/cart/increase/:id", async (req, res) => {

    try {

        const product = await Cart.findById(req.params.id);

        if (!product) {

            return res.status(404).json({
                message: "Product not found"
            });

        }

        product.quantity += 1;

        await product.save();

        res.json({
            message: "Quantity increased",
            product: product
        });

    } catch (error) {

        res.status(500).json({
            message: "Error increasing quantity",
            error: error.message
        });

    }

});


// ===============================
// DECREASE QUANTITY
// ===============================

app.put("/cart/decrease/:id", async (req, res) => {

    try {

        const product = await Cart.findById(req.params.id);

        if (!product) {

            return res.status(404).json({
                message: "Product not found"
            });

        }

        if (product.quantity > 1) {

            product.quantity -= 1;

            await product.save();

            res.json({
                message: "Quantity decreased",
                product: product
            });

        } else {

            await Cart.findByIdAndDelete(req.params.id);

            res.json({
                message: "Product removed from cart"
            });

        }

    } catch (error) {

        res.status(500).json({
            message: "Error decreasing quantity",
            error: error.message
        });

    }

});


// ===============================
// REMOVE PRODUCT
// ===============================

app.delete("/cart/remove/:id", async (req, res) => {

    try {

        await Cart.findByIdAndDelete(req.params.id);

        res.json({
            message: "Product removed from cart"
        });

    } catch (error) {

        res.status(500).json({
            message: "Error removing product",
            error: error.message
        });

    }

});


// ===============================
// START SERVER
// ===============================

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`QuickCart server running on port ${PORT}`);

});