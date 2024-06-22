const RestaurantLogin = () => {
  return (
    <>
      <h3>Login Page</h3>
      <div>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="text"
            placeholder="Email address"
          />
        </div>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="input-wrapper">
          <button className="button">Login</button>
        </div>
      </div>
    </>
  );
};

export default RestaurantLogin;
