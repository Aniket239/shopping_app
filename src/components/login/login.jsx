import React from "react";
import './login.css';
function LoginPage() {
    return (
    <div className="login-container">
    <div className="login">
       <h2>Login</h2>
      <form className="login-form">
      <div class="form__group field">
            <input type="input" class="form__field" placeholder="Name" required=""></input>
            <label for="name" class="form__label">Username or Email</label>
        </div>
        <div class="form__group field">
            <input type="password" class="form__field" placeholder="Name" required=""></input>
            <label for="name" class="form__label">Password</label>
        </div>
     <button>Login</button>
      </form>
    </div>
    </div>
    );
  }
  
  export default LoginPage;
  