import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import loginImage from "../assets/login-shopping.png";

function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const loginUser = async () => {

    try {

      const res = await axios.post(

        "http://localhost:5000/api/auth/login",

        {
          email,
          password
        }

      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "username",
        email.split("@")[0]
      );

      alert("🎉 Login Successful!");

      window.location.href = "/products";

    }

    catch(err){

      alert("❌ Login Failed");

    }

  };

  return(

    <div className="auth-page">

      <div className="auth-container">

       <div className="auth-left">

  <span className="auth-badge">

    ✨ NOVAZ

  </span>

  <h1>

    Welcome Back!

  </h1>

  <p>

    Your favorite shopping destination is waiting for you.
    Sign in to explore the latest fashion, electronics,
    accessories, and exclusive deals—all in one place.

  </p>

  <img
    src={loginImage}
    alt="NovaZ Shopping"
    className="auth-image"
/>

</div>

        <div className="auth-right">

          <div className="auth-card">

            <h2>

              Login

            </h2>

            <p>

              Sign in to your NovaZ account 💜

            </p>

            <input

              type="email"

              placeholder="📧 Email Address"

              value={email}

              onChange={(e)=>

                setEmail(e.target.value)

              }

            />

            <input

              type="password"

              placeholder="🔒 Password"

              value={password}

              onChange={(e)=>

                setPassword(e.target.value)

              }

            />
                        <button

              className="auth-btn"

              onClick={loginUser}

            >

              🔓 Login

            </button>

            <div className="auth-divider">

              OR

            </div>

            <p className="auth-footer">

              Don't have an account?

              <Link to="/register">

                Create Account

              </Link>

            </p>

          </div>

        </div>
              </div>

    </div>

  );

}

export default Login;
