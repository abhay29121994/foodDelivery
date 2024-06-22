"use client";
import { useState } from "react";
import RestaurantLogin from "../_components/restaurantLogin";
import RestaurantSignup from "../_components/restaurantSignup";

const Restaurant = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
      <div className="container">
        <h1>Restaurant Login/Signup Page</h1>
        {login ? <RestaurantLogin /> : <RestaurantSignup />}
        <button className="button-link" onClick={() => setLogin(!login)}>
          {login
            ? "Do not have account? Signup"
            : "Already have account? login "}
        </button>
      </div>
    </>
  );
};

export default Restaurant;
