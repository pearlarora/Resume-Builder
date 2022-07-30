import React from "react";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div id="section-1">
      <div id="left-half">
        <form method="POST" action="Login" id="login-form">
          <h3>Log in</h3>

          <div id="email-id">
            <input
              type="email"
              placeholder="Enter Email"
              id="email"
              name="email"
            />
          </div>

          <div id="password">
            <input
              type="password"
              placeholder="Enter Password"
              id="pass"
              name="pass"
            />
          </div>

          <input type="submit" value="Log in" id="login" />
        </form>

        <div id="last-line">
          <h4>
            Don't have an account?{" "}
            <strong>
              <a href="signup.jsp" id="signup">
                Sign up
              </a>
            </strong>
          </h4>
        </div>
      </div>

      <div id="right-half">
        <h1>Welcome back,</h1>
        <h4>Hope you build something new this time.</h4>
      </div>
    </div>
  );
}

export default LoginPage;
