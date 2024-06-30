import { useEffect, useState } from "react";

const FoodItemList = () => {
  const [foodItems, setFoodItems] = useState([]);
  useEffect(() => {
    loadFoodItems();
  }, []);

  const loadFoodItems = async () => {
    const restaurantData = JSON.parse(localStorage.getItem("restaurant"));
    let resto_id;
    if (restaurantData) {
      resto_id = restaurantData._id;
    } else {
      return false;
    }
    let response = await fetch(
      "http://localhost:3000/api/restaurant/foods/" + resto_id
    );
    response = await response.json();
    if (response.success) {
      setFoodItems(response.result);
    } else {
      alert("Food List Items not loaded");
    }
  };

  return (
    <>
      <div>
        <h1>Food Item List </h1>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <td>Sno.</td>
              <td>Name</td>
              <td>Price</td>
              <td>Description</td>
              <td>Image</td>
              <td>Operations</td>
            </tr>
          </thead>
          <tbody>
            {foodItems.map((item, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                  <img src={item.img_path} />
                </td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FoodItemList;
