import { useState } from "react";

const RestaurantLogin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);
  const handleLogin = () => {
    if (!email || !password) {
      setError(true);
    } else {
      setError(false);
    }
    console.log(email, password);
  };
  return (
    <>
      <h3>Login Page</h3>
      <div>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email address"
          />
          {error && !email && (
            <span className="input-error">Please enter valid email.</span>
          )}
        </div>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
          />
          {error && !password && (
            <span className="input-error">Please enter valid password.</span>
          )}
        </div>
        <div className="input-wrapper">
          <button className="button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default RestaurantLogin;
