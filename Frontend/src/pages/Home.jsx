import { Link } from "react-router-dom";
import loginImage from "../assets/login-shopping.png";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">

        <div className="hero-left">

  

  <h1>

    NovaZ

  </h1>

  <h4>

    Your Ultimate Shopping Destination

  </h4>

  <p className="hero-description">

    Discover premium fashion, cutting-edge electronics,
    stylish accessories, and everyday essentials—all
    carefully curated to bring you a seamless and
    enjoyable shopping experience.

  </p>

  <div className="hero-buttons">

   <button
    className="primary-btn"
    onClick={() => navigate("/products")}
>

    Shop Now

</button>

<button
    className="secondary-btn"
    onClick={() => navigate("/register")}
>

    Create Account

</button>

  </div>

</div>

        

        <div className="hero-right">

           <img
    src={loginImage}
    alt="NovaZ Shopping"
  />

        </div>

      </section>

      {/* FEATURED CATEGORIES */}

      <section className="categories">

        <h2>Featured Categories</h2>

        <div className="category-grid">

          <div className="category-card">
            💻
            <h3>Electronics</h3>
            <p>Latest Gadgets</p>
          </div>

          <div className="category-card">
            👟
            <h3>Fashion</h3>
            <p>Trending Styles</p>
          </div>

          <div className="category-card">
            🎒
            <h3>Accessories</h3>
            <p>Daily Essentials</p>
          </div>

          <div className="category-card">
            ⌚
            <h3>Lifestyle</h3>
            <p>Smart Living</p>
          </div>

        </div>

      </section>

      {/* DEAL OF THE DAY */}

      <section className="deal">

        <div className="deal-text">

          <h4>🔥 Deal Of The Day</h4>

          <h2>Nike Running Shoes</h2>

          <p>
            Comfortable. Stylish.
            Lightweight.
          </p>

          <h3>
            <span className="old-price">
              ₹5999
            </span>

            ₹3499
          </h3>

          <Link to="/products">
            <button className="primary-btn">
              Buy Now
            </button>
          </Link>

        </div>

        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900"
          alt="Shoes"
        />

      </section>

      {/* WHY CHOOSE US */}

      <section className="why">

        <h2>
          Why Choose NovaZ?
        </h2>

        <div className="why-grid">

          <div className="why-card">
            🚚
            <h3>Fast Delivery</h3>
            <p>
              Quick delivery across India.
            </p>
          </div>

          <div className="why-card">
            🔒
            <h3>Secure Payment</h3>
            <p>
              100% Safe Transactions.
            </p>
          </div>

          <div className="why-card">
            💯
            <h3>Premium Quality</h3>
            <p>
              Genuine branded products.
            </p>
          </div>

          <div className="why-card">
            🎧
            <h3>24×7 Support</h3>
            <p>
              We're always here to help.
            </p>
          </div>

        </div>

      </section>

      {/* CUSTOMER REVIEWS */}

      <section className="reviews">

        <h2>What Our Customers Say</h2>

        <div className="review-grid">

          <div className="review-card">

            ⭐⭐⭐⭐⭐

            <p>
              "Amazing quality and
              very fast delivery!"
            </p>

            <h4>- Priya</h4>

          </div>

          <div className="review-card">

            ⭐⭐⭐⭐⭐

            <p>
              "Loved the shopping
              experience."
            </p>

            <h4>- Rahul</h4>

          </div>

          <div className="review-card">

            ⭐⭐⭐⭐⭐

            <p>
              "Affordable prices with
              premium products."
            </p>

            <h4>- Sneha</h4>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="footer">

        <h2>🛒 NovaZ</h2>

        <p>
          Fashion • Electronics •
          Accessories • Lifestyle
        </p>

        <p>
          support@novaz.com
        </p>

        <p>
          © 2026 NovaZ.
          All Rights Reserved.
        </p>

      </footer>

    </>
  );
}

export default Home;



