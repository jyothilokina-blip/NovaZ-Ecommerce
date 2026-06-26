import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const registerUser = async () => {

    try {

      const res = await axios.post(

        "http://localhost:5000/api/auth/register",

        {
          name,
          email,
          password
        }

      );

      alert(res.data.message);

      window.location.href = "/login";

    }

    catch(err){

      alert("Registration Failed");

    }

  };

  return(

    <div className="auth-page">

      <div className="auth-container">

        <div className="auth-left">

          <span className="auth-badge">

            ✨ JOIN NOVAZ

          </span>

          <h1>

            Create Your Account

          </h1>

          <p>

            Join NovaZ today and discover premium fashion,
            electronics, accessories, and lifestyle products
            all in one place.

          </p>

          <img
            src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=900"
            alt="Shopping"
          />

        </div>

        <div className="auth-right">

          <div className="auth-card">

            <h2>

              Create Account

            </h2>

            <p>

              Start shopping with NovaZ 🚀

            </p>

            <input

              type="text"

              placeholder="👤 Full Name"

              value={name}

              onChange={(e)=>

                setName(e.target.value)

              }

            />

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

              onClick={registerUser}

            >

              🚀 Create Account

            </button>

            <div className="auth-divider">

              OR

            </div>

            <p className="auth-footer">

              Already have an account?

              <Link to="/login">

                Login

              </Link>

            </p>

          </div>

        </div>
              </div>

    </div>

  );

}

export default Register;


