const RestaurantSignup = () => {
  return (
    <>
      <h3>Signup Page</h3>
      <div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Email address"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Confirm password"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter restaurant name"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input type="text" placeholder="Enter city" className="input-field" />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter full address"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter contact No."
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <button className="button">Sign-up</button>
        </div>
      </div>
    </>
  );
};

export default RestaurantSignup;
