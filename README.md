# 🛒 QuickCart

QuickCart is a full-stack grocery shopping web application where users can browse grocery products, add products to their cart, increase or decrease quantities, remove products, and view the total cart amount.

The project combines a responsive frontend with a Node.js, Express.js and MongoDB backend.

---

## ✨ Features

- 🛍️ Browse grocery products
- 🔍 Product search bar
- 📍 Delivery location display
- 🛒 Add products to cart
- ➕ Increase product quantity
- ➖ Decrease product quantity
- 🗑️ Remove products from cart
- 💰 Automatic cart total calculation
- 📱 Responsive mobile-friendly design
- 💻 Desktop and tablet support
- 🗄️ MongoDB database integration
- ⚡ Node.js and Express.js backend
- 🔄 Real-time cart updates

---

## 🛠️ Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- Node.js
- Express.js
- Mongoose
- CORS

### Database

- MongoDB
- MongoDB Compass

### Development Tools

- Visual Studio Code
- Git
- GitHub
- Live Server

---

## 📁 Project Structure

```text
QuickCart/
│
├── Images/
│   ├── Amul milk.jpg
│   ├── Apple.jpg
│   ├── Banana.jpg
│   ├── Bread.jpg
│   ├── Cookie.jpg
│   ├── egg.jpg
│   ├── maggi.webp
│   ├── Pepsi.jpg
│   ├── Potato.jpg
│   └── Tomato.jpg
│
├── node_modules/
│
├── .gitignore
├── index.css
├── index.html
├── package-lock.json
├── package.json
├── script.js
├── server.js
└── README.md
```

---

## 🛒 Cart Functionality

QuickCart provides a complete shopping cart experience.

### Add Product

Users can click the **Add** button on any product to add it to their cart.

### Increase Quantity

Users can click the **+** button to increase the quantity of a product.

### Decrease Quantity

Users can click the **−** button to decrease the quantity.

### Remove Product

Users can remove a product from the cart when they no longer want it.

### Automatic Total

The cart automatically calculates the total price based on product price and quantity.

Example:

```text
Fresh Red Apple
₹120 × 2

Total = ₹240
```

---

## 🗄️ MongoDB Integration

QuickCart uses MongoDB to store cart information.

The application connects to the local MongoDB database:

```text
mongodb://localhost:27017/Quickcart
```

The cart collection stores information such as:

- Product name
- Product price
- Product quantity
- Total price

MongoDB Compass can be used to view and manage the stored cart data.

---

## ⚙️ Installation & Setup

Follow these steps to run QuickCart on your computer.

### 1. Clone the Repository

```bash
git clone https://github.com/krishna2650/QuickCart.git
```

### 2. Open the Project

```bash
cd QuickCart
```

### 3. Install Dependencies

```bash
npm install
```

This installs the required packages such as:

- Express
- Mongoose
- CORS

### 4. Start MongoDB

Make sure MongoDB is running on your computer.

MongoDB should be available at:

```text
mongodb://localhost:27017
```

### 5. Start the Backend Server

Run:

```bash
node server.js
```

You should see:

```text
QuickCart server running on port 3000
MongoDB Connected Successfully!
```

The backend server will run on:

```text
http://localhost:3000
```

### 6. Run the Frontend

Open `index.html` using VS Code Live Server.

The frontend will normally open at:

```text
http://127.0.0.1:5500
```

---

## 🔄 Application Flow

```text
User
  │
  ▼
QuickCart Website
  │
  ├── Browse Products
  │
  ├── Add Product
  │
  ▼
Shopping Cart
  │
  ├── Increase Quantity
  ├── Decrease Quantity
  └── Remove Product
  │
  ▼
Node.js + Express.js
  │
  ▼
Mongoose
  │
  ▼
MongoDB
```

---

## 📱 Responsive Design

QuickCart is designed to work across different screen sizes.

The layout supports:

- 💻 Desktop
- 📱 Mobile phones
- 📲 Tablets

The responsive design adjusts product cards, navigation, cart items and other components according to the screen size.

---

## 🖥️ Main Pages & Sections

### Navigation Bar

Includes:

- QuickCart logo
- Delivery location
- Search bar
- Login
- Cart

### Hero Section

Displays the main shopping message and a **Shop Now** button.

### Categories

Users can browse categories such as:

- Vegetables
- Fruits
- Dairy
- Bakery
- Snacks
- Drinks
- Household
- Personal Care

### Popular Products

The application currently includes products such as:

- Amul Taaza Milk
- Fresh Red Apple
- Brown Bread
- Farm Fresh Eggs
- Chocolate Cookies
- Fresh Bananas
- Fresh Tomatoes
- Fresh Potatoes
- Pepsi
- Maggi Noodles

---

## 🚀 Future Improvements

The project can be expanded with the following features:

- 👤 User registration and login
- 🔐 Authentication and authorization
- 💳 Online payment integration
- 📦 Order placement
- 🚚 Order tracking
- ❤️ Wishlist
- 🧾 Order history
- 🔔 Order notifications
- 🔎 Advanced product filtering
- 📊 Admin dashboard
- 👨‍💼 Product management for admins
- ☁️ Cloud deployment
- 📧 Email notifications

---

## 🎯 Project Objective

The main objective of QuickCart is to build a practical full-stack grocery shopping application while learning and implementing:

- Frontend development
- Responsive web design
- JavaScript functionality
- REST API concepts
- Node.js
- Express.js
- MongoDB
- Mongoose
- Git and GitHub

---

## 👨‍💻 Developer

**Krishna Koneri**



---

## 📌 Project Information

**Project Name:** QuickCart

**Project Type:** Full-Stack Grocery Shopping Web Application

**Frontend:** HTML, CSS, JavaScript

**Backend:** Node.js, Express.js

**Database:** MongoDB

**Version Control:** Git & GitHub

---

## 🔗 GitHub Repository

[View QuickCart on GitHub](https://github.com/krishna2650/QuickCart)

---

## ⭐ Support

If you like this project, consider giving the repository a ⭐ on GitHub!

---

**Made with ❤️ by Krishna Koneri**
