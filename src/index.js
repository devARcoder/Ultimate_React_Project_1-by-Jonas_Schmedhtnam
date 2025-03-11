import React from "react";
import ReactDOM from "react-dom/client";

// eslint-disable-next-line
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
// eslint-disable-next-line


function App() {
  return (
    <div>
      <Header/>
      <Menu/>
      <Footer/>
    </div>
  )
}

function Header(){
  return <h1>Fast React Pizza Co.</h1>
}
function Menu(){
  return (
    <div>
      <h1>Our Menu</h1>
      <Pizza/>
      <Pizza/>
      <Pizza/>
    </div>
  )
}
function Footer(){
  const hour = new Date().getHours()
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen)

  // if (hour >= openHour && hour <= closeHour) alert("we are currently Open"); else alert ("sorry we are close");
  return <footer>devArcoder | {new Date().toLocaleDateString()} | {new Date().toLocaleTimeString()} | we are currently open!</footer>
}


function Pizza(){
  return(
    <div>
      <img src="pizzas/spinaci.jpg" alt="" />
      <h1>Pizza</h1>
      <p>tomato and some spices add in this pizza hut.</p>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
