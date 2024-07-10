"use client";
import CustomerHeader from "@/app/_components/CustomerHeader";
import Footer from "@/app/_components/Footer";
import { useEffect, useState } from "react";

const Page = (props) => {
  const name = props.params.name;
  const id = props.searchParams.id;
  const [restaurantDetails, setRestaurantDetails] = useState();
  const [foodItems, setFoodItems] = useState([]);
  const [cartData, setCartData] = useState();
  const [cartStorage, setCartStorage] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );
  const [cartIds, setCartIds] = useState(
    cartStorage
      ? () =>
          cartStorage.map((item) => {
            return item._id;
          })
      : []
  );

  const [removeCartData, setRemoveCartData] = useState();
  useEffect(() => {
    loadRestaurantDetails();
  }, []);

  const loadRestaurantDetails = async () => {
    let response = await fetch("http://localhost:3000/api/customer/" + id);
    response = await response.json();
    if (response.success) {
      setRestaurantDetails(response.restaurantDetails);
      setFoodItems(response.foodItems);
    }
  };

  const addToCart = (item) => {
    setCartData(item);
    let localCartIds = cartIds;
    localCartIds.push(item._id);
    setCartIds(localCartIds);
    setRemoveCartData();
  };

  const removeFromCart = (id) => {
    setRemoveCartData(id);
    var localIds = cartIds.filter((item) => item != id);
    setCartIds(localIds);
    setCartData();
  };
  return (
    <div>
      <CustomerHeader cartData={cartData} removeCartData={removeCartData} />
      <div className="restaurant-page-banner">
        <h1>{decodeURI(name)} Restaurant</h1>
      </div>
      <div className="detail-wrapper">
        <h3>Contact: {restaurantDetails?.contact}</h3>
        <h3>City: {restaurantDetails?.city}</h3>
        <h3>Address: {restaurantDetails?.address}</h3>
        <h3>Email: {restaurantDetails?.email}</h3>
      </div>
      <div className="food-item-wrapper">
        {foodItems.length > 0 ? (
          foodItems.map((item) => (
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
                  {cartIds.includes(item._id) ? (
                    <button
                      className="remove-from-cart"
                      onClick={() => removeFromCart(item._id)}
                    >
                      Remove From Cart
                    </button>
                  ) : (
                    <button
                      className="add-to-cart"
                      onClick={() => addToCart(item)}
                    >
                      Add To Cart
                    </button>
                  )}
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
