"use client";
import RestaurantHeader from "@/app/_components/RestaurantHeader";
import "./../style.css";
import AddFoodItem from "@/app/_components/AddFoodItem";
import { useState } from "react";
const RestaurantDashboard = () => {
  const [addItem, SetAddItem] = useState(false);
  return (
    <>
      <RestaurantHeader />
      <button onClick={() => SetAddItem(true)}>Add Food Item</button>
      <button onClick={() => SetAddItem(false)}>Dashboard</button>

      {addItem ? <AddFoodItem /> : <h1>Welcome In Restaurant Dashboard</h1>}
    </>
  );
};

export default RestaurantDashboard;
