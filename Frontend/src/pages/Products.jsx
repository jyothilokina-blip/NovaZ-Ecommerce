import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Products() {

  const { addToCart } =
    useContext(CartContext);

  const [search, setSearch] = useState("");

const [products, setProducts] = useState([]);

useEffect(() => {

    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {

        setProducts(res.data);

      })
      .catch((err) => {

        console.log(err);

      });

}, []);

  const filteredProducts =
    products.filter(product =>
      product.name
      .toLowerCase()
      .includes(search.toLowerCase())
    );

  return (

    <div className="products-page">

      <h1>Trending Products</h1>

      <p className="subtitle">
        Fashion • Electronics • Accessories • Lifestyle
      </p>

      <input
        className="search-box"
        type="text"
        placeholder="🔍 Search Products..."
        value={search}
        onChange={(e)=>
          setSearch(e.target.value)
        }
      />

      <div className="product-grid">
              {filteredProducts.map((product) => (

          <div
            className="product-card"
            key={product.id}
          >

            <div className="discount-badge">
              20% OFF
            </div>

            <div className="wishlist">
              ❤️
            </div>

            <img
              src={product.image}
              alt={product.name}
            />

            <div className="product-content">

              <small className="category">
                {product.category}
              </small>

              <div className="rating">
                {product.rating}
              </div>

              <h3>
                {product.name}
              </h3>

              <p>
                {product.description}
              </p>

              <div className="price-section">

                <span className="old-price">
                  ₹{product.oldPrice}
                </span>

                <span className="new-price">
                  ₹{product.price}
                </span>

              </div>

              <div className="product-buttons">

                <button
                  className="primary-btn"
                  onClick={() =>
                    addToCart(product)
                  }
                >
                  🛒 Add To Cart
                </button>

                <Link
                  to={`/product/${product.id}`}
                >

                  <button
                    className="secondary-btn"
                  >
                    View Details
                  </button>

                </Link>

              </div>

            </div>

          </div>

        ))}
              </div>

      {filteredProducts.length === 0 && (

        <div
          style={{
            textAlign: "center",
            marginTop: "60px",
            color: "#666"
          }}
        >

          <h2>
            😔 No Products Found
          </h2>

          <p>
            Try searching for another product.
          </p>

        </div>

      )}

    </div>

  );

}

export default Products;




