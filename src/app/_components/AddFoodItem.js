import { useState } from "react";

const AddFoodItem = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  const handleAddFoodItem = async () => {
    let resto_id;

    if (!name || !price || !path || !description) {
      setError(true);
      return false;
    } else {
      setError(false);
    }

    const restaurantData = JSON.parse(localStorage.getItem("restaurant"));
    if (restaurantData) {
      resto_id = restaurantData._id;
    }

    let response = await fetch("http://localhost:3000/api/restaurant/foods", {
      method: "POST",
      body: JSON.stringify({
        name,
        price,
        img_path: path,
        description,
        resto_id,
      }),
    });
    response = await response.json();
    if (response.success) {
      alert("Food item added successfully!");
      setName("");
      setPrice("");
      setPath("");
      setDescription("");
    } else {
      alert("Food item not added.");
    }
  };
  return (
    <div className="container">
      <h1>Add New Food Item</h1>
      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Enter Food Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        {error && !name && (
          <span className="input-error">Please enter valid name</span>
        )}
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Enter price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        {error && !price && (
          <span className="input-error">Please enter valid price</span>
        )}
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Enter path"
          value={path}
          onChange={(event) => setPath(event.target.value)}
        />
        {error && !path && (
          <span className="input-error">Please enter valid path</span>
        )}
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Enter Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        {error && !description && (
          <span className="input-error">Please enter valid description</span>
        )}
      </div>

      <div className="input-wrapper">
        <button onClick={handleAddFoodItem} className="button">
          Add Food Item
        </button>
      </div>
    </div>
  );
};

export default AddFoodItem;
