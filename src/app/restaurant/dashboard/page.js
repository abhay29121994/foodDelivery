"use client";
import RestaurantHeader from "@/app/_components/RestaurantHeader";
import "./../style.css";
import AddFoodItem from "@/app/_components/AddFoodItem";
import { useState } from "react";
import FoodItemList from "@/app/_components/FoodItemList";
const RestaurantDashboard = () => {
  const [addItem, SetAddItem] = useState(false);
  return (
    <>
      <RestaurantHeader />
      <button onClick={() => SetAddItem(true)}>Add Food Item</button>
      <button onClick={() => SetAddItem(false)}>Dashboard</button>

      {addItem ? <AddFoodItem /> : <FoodItemList />}
    </>
  );
};

export default RestaurantDashboard;
