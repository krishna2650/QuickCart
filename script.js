// ===============================
// PRODUCT IMAGE MAP
// ===============================

const productImages = {
    "Amul Taaza Milk": "Images/Amul milk.jpg",
    "Fresh Red Apple": "Images/Apple.jpg",
    "Brown Bread": "Images/Bread.jpg",
    "Farm Fresh Eggs": "Images/egg.jpg",
    "Chocolate Cookies": "Images/Cookie.jpg",
    "Fresh Bananas": "Images/Banana.jpg",
    "Fresh Tomatoes": "Images/Tomato.jpg",
    "Fresh Potatoes": "Images/Potato.jpg",
    "Pepsi": "Images/Pepsi.jpg",
    "Maggi Noodles": "Images/maggi.webp"
};


// ===============================
// ADD PRODUCT
// ===============================

const addButtons = document.querySelectorAll(".add-btn");

addButtons.forEach((button) => {

    button.addEventListener("click", async () => {

        const name = button.getAttribute("data-name");

        const price = Number(
            button.getAttribute("data-price")
        );

        const image = button
            .closest(".product-card")
            .querySelector("img")
            .getAttribute("src");


        try {

            const response = await fetch(
                "https://quickcart-ojtf.onrender.com/add-to-cart",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        name: name,
                        price: price,
                        image: image
                    })
                }
            );


            const data = await response.json();


            if (response.ok) {

                alert(name + " added to cart!");

                button.innerText = "Added ✓";


                setTimeout(() => {

                    button.innerText = "Add";

                }, 1000);

            } else {

                alert(
                    data.message ||
                    "Something went wrong!"
                );

            }

        } catch (error) {

            console.error(
                "Add Product Error:",
                error
            );

            alert(
                "Cannot connect to server!"
            );

        }

    });

});


// ===============================
// LOAD CART
// ===============================

async function loadCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartTotal =
        document.getElementById("cartTotal");


    try {

        const response =
            await fetch(
                "https://quickcart-ojtf.onrender.com/cart"
            );


        const cart =
            await response.json();


        cartItems.innerHTML = "";


        // ===============================
        // EMPTY CART
        // ===============================

        if (!cart || cart.length === 0) {

            cartItems.innerHTML = `

                <div class="empty-cart">

                    <h3>
                        🛒 Your cart is empty
                    </h3>

                    <p>
                        Add some products
                        to your cart.
                    </p>

                </div>

            `;

            cartTotal.innerText = "0";

            return;
        }


        let total = 0;


        // ===============================
        // DISPLAY CART
        // ===============================

        cart.forEach((product) => {

            const quantity =
                product.quantity || 1;


            const price =
                Number(product.price) || 0;


            const productTotal =
                price * quantity;


            total += productTotal;


            // ===============================
            // GET CORRECT IMAGE
            // ===============================

            let imagePath =
                productImages[product.name];


            // If product name is not found,
            // use the image stored in MongoDB

            if (!imagePath) {

                imagePath =
                    product.image;

            }


            // Encode spaces and special characters
            // correctly

            const finalImagePath =
                imagePath
                    ? encodeURI(imagePath)
                    : "";


            // ===============================
            // CREATE CART ITEM
            // ===============================

            const cartItem =
                document.createElement(
                    "div"
                );


            cartItem.className =
                "cart-item";


            cartItem.innerHTML = `

                <div class="cart-product-info">

                    <div class="cart-image-box">

                        <img
                            src="${finalImagePath}"
                            alt="${product.name}"
                            class="cart-product-image"
                        >

                    </div>


                    <div class="cart-product-details">

                        <h3>
                            ${product.name}
                        </h3>

                        <p>
                            ₹${price} × ${quantity}
                        </p>

                    </div>

                </div>


                <div class="cart-product-price">


                    <div class="quantity-controls">

                        <button
                            class="quantity-btn decrease-btn">
                            −
                        </button>


                        <span
                            class="quantity-number">
                            ${quantity}
                        </span>


                        <button
                            class="quantity-btn increase-btn">
                            +
                        </button>

                    </div>


                    <strong>
                        ₹${productTotal}
                    </strong>


                    <button
                        class="remove-btn">
                        🗑️
                    </button>

                </div>

            `;


            // ===============================
            // PLUS BUTTON
            // ===============================

            const increaseButton =
                cartItem.querySelector(
                    ".increase-btn"
                );


            increaseButton.addEventListener(
                "click",
                async () => {

                    try {

                        await fetch(
                            `https://quickcart-ojtf.onrender.com/cart/increase/${product._id}`,
                            {
                                method: "PUT"
                            }
                        );


                        loadCart();

                    } catch (error) {

                        console.error(
                            "Increase Error:",
                            error
                        );

                    }

                }
            );


            // ===============================
            // MINUS BUTTON
            // ===============================

            const decreaseButton =
                cartItem.querySelector(
                    ".decrease-btn"
                );


            decreaseButton.addEventListener(
                "click",
                async () => {

                    try {

                        await fetch(
                            `https://quickcart-ojtf.onrender.com/cart/decrease/${product._id}`,
                            {
                                method: "PUT"
                            }
                        );


                        loadCart();

                    } catch (error) {

                        console.error(
                            "Decrease Error:",
                            error
                        );

                    }

                }
            );


            // ===============================
            // REMOVE BUTTON
            // ===============================

            const removeButton =
                cartItem.querySelector(
                    ".remove-btn"
                );


            removeButton.addEventListener(
                "click",
                async () => {

                    try {

                        await fetch(
                            `https://quickcart-ojtf.onrender.com/cart/remove/${product._id}`,
                            {
                                method: "DELETE"
                            }
                        );


                        loadCart();

                    } catch (error) {

                        console.error(
                            "Remove Error:",
                            error
                        );

                    }

                }
            );


            cartItems.appendChild(
                cartItem
            );

        });


        // ===============================
        // TOTAL
        // ===============================

        cartTotal.innerText =
            total;


    } catch (error) {

        console.error(
            "Cart Error:",
            error
        );


        cartItems.innerHTML = `

            <div class="empty-cart">

                <h3>
                    ⚠️ Unable to load cart
                </h3>

                <p>
                    Make sure the server
                    is running.
                </p>

            </div>

        `;

    }

}


// ===============================
// CART BUTTON
// ===============================

const cartButton =
    document.getElementById(
        "cartButton"
    );


if (cartButton) {

    cartButton.addEventListener(
        "click",
        (event) => {

            event.preventDefault();


            loadCart();


            const cartSection =
                document.getElementById(
                    "cart"
                );


            if (cartSection) {

                cartSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

}


// ===============================
// CHECKOUT
// ===============================

const checkoutButton =
    document.getElementById(
        "checkoutBtn"
    );


if (checkoutButton) {

    checkoutButton.addEventListener(
        "click",
        () => {

            alert(
                "Checkout coming soon! 🛒"
            );

        }
    );

}