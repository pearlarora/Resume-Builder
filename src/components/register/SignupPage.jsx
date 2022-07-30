import React from "react";
import "./SignupPage.css";

function SignupPage() {
  return (
    <div id="section-1">
      <div id="left">
        <h3>Build a professional resume for yourself...</h3>
        <h1>
          <span style="color: #F2133C">Create</span> your free account
        </h1>
      </div>

      <div id="right">
        <form method="POST" action="Signup" id="sign-up-form">
          <div id="first-name">
            <input
              type="text"
              placeholder="Enter First Name"
              id="fname"
              name="fname"
            />
          </div>

          <div id="last-name">
            <input
              type="text"
              placeholder="Enter Last Name"
              id="lname"
              name="lname"
            />
          </div>

          <div id="email-id">
            <input
              type="email"
              placeholder="Enter Email"
              id="email"
              name="email"
            />
          </div>

          <div id="phone-no">
            <input
              type="number"
              placeholder="Enter Contact Number"
              id="contact"
              name="contact"
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

          <div id="confirm-password">
            <input
              type="password"
              placeholder="Confirm Password"
              id="confirm-pass"
              name="confirm-pass"
            />
          </div>

          <input type="submit" value="Sign up" id="sign-up" />
        </form>

        <div id="last-line">
          <h4>
            Already have an account?{" "}
            <strong>
              <a href="login.jsp" id="login">
                Log in
              </a>
            </strong>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
