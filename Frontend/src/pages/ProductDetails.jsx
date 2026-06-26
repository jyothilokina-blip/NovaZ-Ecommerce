import { Link, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";

import { CartContext } from "../context/CartContext";

function ProductDetails() {

  const { addToCart } =
    useContext(CartContext);

  const { id } = useParams();
  useEffect(() => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}, [id]);


  const products = [

    {
      id:1,
      category:"💻 Electronics",
      name:"Gaming Laptop",
      price:50000,
      oldPrice:62000,
      rating:"★★★★★",
      image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900",
      description:
      "Powerful Intel i7 Gaming Laptop with 16GB RAM, 512GB SSD and Full HD Display.",
      specs:[
        "Intel Core i7 Processor",
        "16GB RAM",
        "512GB SSD",
        "15.6 Inch Full HD",
        "Windows 11"
      ]
    },

    {
      id:2,
      category:"📱 Electronics",
      name:"Smart Phone",
      price:25000,
      oldPrice:30000,
      rating:"★★★★★",
      image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900",
      description:
      "Premium AMOLED smartphone with excellent camera and battery life.",
      specs:[
        "128GB Storage",
        "8GB RAM",
        "5000mAh Battery",
        "50MP Camera",
        "AMOLED Display"
      ]
    },

    {
      id:3,
      category:"👟 Fashion",
      name:"Running Shoes",
      price:3500,
      oldPrice:4999,
      rating:"★★★★☆",
      image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900",
      description:
      "Comfortable lightweight running shoes for everyday use.",
      specs:[
        "Rubber Sole",
        "Light Weight",
        "Sports Design",
        "Breathable Fabric",
        "Easy Wash"
      ]
    },

    {
      id:4,
      category:"🎒 Accessories",
      name:"Travel Backpack",
      price:1800,
      oldPrice:2500,
      rating:"★★★★★",
      image:"https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=900",
      description:
      "Stylish backpack suitable for travel, office and college.",
      specs:[
        "Water Resistant",
        "USB Charging Port",
        "Laptop Compartment",
        "35L Capacity",
        "Premium Fabric"
      ]
    },

    {
      id:5,
      category:"⌚ Lifestyle",
      name:"Smart Watch",
      price:5500,
      oldPrice:7000,
      rating:"★★★★★",
      image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900",
      description:
      "Advanced smartwatch with health tracking features.",
      specs:[
        "Heart Rate Monitor",
        "Bluetooth Calling",
        "7 Days Battery",
        "Sleep Tracking",
        "Water Resistant"
      ]
    },

    {
      id:6,
      category:"🎧 Electronics",
      name:"Wireless Headphones",
      price:2800,
      oldPrice:3900,
      rating:"★★★★★",
      image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900",
      description:
      "Noise cancelling wireless headphones with premium sound.",
      specs:[
        "Bluetooth 5.3",
        "Noise Cancellation",
        "30 Hours Battery",
        "Fast Charging",
        "Built-in Mic"
      ]
    },

    {
      id:7,
      category:"💧 Lifestyle",
      name:"Steel Water Bottle",
      price:650,
      oldPrice:899,
      rating:"★★★★☆",
      image:"https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=900",
      description:
      "Double wall insulated steel bottle.",
      specs:[
        "1 Litre",
        "Leak Proof",
        "24 Hours Cold",
        "12 Hours Hot",
        "Food Grade Steel"
      ]
    },

    {
      id:8,
      category:"⌨ Electronics",
      name:"Mechanical Keyboard",
      price:3200,
      oldPrice:4200,
      rating:"★★★★★",
      image:"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=900",
      description:
      "RGB Mechanical Keyboard for gamers and professionals.",
      specs:[
        "RGB Lighting",
        "Blue Switches",
        "USB Type-C",
        "104 Keys",
        "Anti Ghosting"
      ]
    },

    {
      id:9,
      category:"🖱 Electronics",
      name:"Wireless Mouse",
      price:1200,
      oldPrice:1800,
      rating:"★★★★★",
      image:"https://images.unsplash.com/photo-1527814050087-3793815479db?w=900",
      description:
      "Ergonomic wireless mouse with silent clicks.",
      specs:[
        "1600 DPI",
        "Silent Click",
        "Rechargeable",
        "Bluetooth",
        "Light Weight"
      ]
    }

  ];

  const product =
    products.find(
      item =>
      item.id === Number(id)
    );

  return (

    <div className="details-page">

      <div className="details-card">
                <div className="details-image">

          <img
            src={product.image}
            alt={product.name}
          />

        </div>

        <div className="details-content">

          <small className="category">
            {product.category}
          </small>

          <h2>
            {product.name}
          </h2>

          <div className="rating">
            {product.rating}
          </div>

          <p className="details-description">
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

          <div className="offer-box">

            <h4>🔥 Special Offer</h4>

            <p>
              Extra 20% OFF today.
            </p>

            <p>
              🚚 Free Delivery
            </p>

            <p>
              🔄 7 Days Easy Return
            </p>

            <p>
              🔒 Secure Payment
            </p>

          </div>

          <h3>
            Product Specifications
          </h3>

          <ul className="spec-list">

            {product.specs.map((spec,index)=>(

              <li key={index}>
                ✔ {spec}
              </li>

            ))}

          </ul>

          <div className="details-buttons">

            <button
              className="primary-btn"
              onClick={() =>
                addToCart(product)
              }
            >
              🛒 Add To Cart
            </button>

            <button
              className="secondary-btn"
              onClick={() =>
                alert(
                  "Buy Now feature coming soon!"
                )
              }
            >
              ⚡ Buy Now
            </button>

          </div>
                    <div className="features-section">

            <div className="feature-card">
              🚚
              <h4>Free Delivery</h4>
              <p>Delivered within 2-5 business days.</p>
            </div>

            <div className="feature-card">
              🔄
              <h4>Easy Returns</h4>
              <p>7-day hassle-free replacement policy.</p>
            </div>

            <div className="feature-card">
              🔒
              <h4>Secure Payment</h4>
              <p>100% safe and encrypted checkout.</p>
            </div>

          </div>

        </div>

      </div>

      <div className="similar-products">

        <h2>You May Also Like</h2>

        <div className="similar-grid">

          {products
            .filter(item => item.id !== product.id)
            .slice(0, 4)
            .map(item => (

              <Link
  to={`/product/${item.id}`}
  key={item.id}
  style={{
    textDecoration: "none",
    color: "inherit"
  }}
>

  <div className="similar-card">

    <img
      src={item.image}
      alt={item.name}
    />

    <h4>{item.name}</h4>

    <p>{item.rating}</p>

    <h3>₹{item.price}</h3>

  </div>

</Link>

          ))}

        </div>

      </div>

    </div>

  );

}

export default ProductDetails;


