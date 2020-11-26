import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    // some firebase auth here.....
  };
  const register = (e) => {
    e.preventDefault();
    //  some firebase auth here.....
  };

  return (
    <div className="login">
      {/* http://upload.wikimedia.org/wikimedia/commons/thumb/a/a9/Amazon_logo/svg/1024px-Amazon_logo.svg.png */}
      <img
        className="login__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            placeholder="Username or Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={signIn}
            type="submit"
            className="login__signinButton"
          >
            Sign in
          </button>
        </form>

        <p>
          By signin-in you agree to AMAZON DEMO APP Conditions of Use & Sale.
          Please see our Privacy Notice, Our Cookies Notice and our
          Interest-Based Ads.
        </p>

        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
