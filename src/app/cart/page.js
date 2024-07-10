"use client";
import { useState } from "react";
import CustomerHeader from "../_components/CustomerHeader";
import Footer from "../_components/Footer";

const Page = () => {
  const [cartStorage, setCartStorage] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );
  return (
    <div>
      <CustomerHeader />

      <div className="food-item-wrapper">
        {cartStorage.length > 0 ? (
          cartStorage.map((item) => (
            <div className="listItem">
              <div>
                <img style={{ width: 250 }} src={item.img_path} />
              </div>
              <div className="dish-description">
                <div className="dish-header">
                  <div>
                    <b>Dish Name: </b>
                    {item.name}
                  </div>
                  <div>
                    <b>Price: </b>
                    {item.price}
                  </div>
                </div>
                <div className="description">
                  <b>Description: </b>
                  <span className="main-description">{item.description}</span>
                </div>
                <div className="button-container">
                  <button
                    className="remove-from-cart"
                    onClick={() => removeFromCart(item._id)}
                  >
                    Remove From Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h5>No Food Items.</h5>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
