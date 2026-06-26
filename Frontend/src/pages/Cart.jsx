import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart() {

  const navigate = useNavigate();

  const {
    cart,
    setCart,
    setOrders
  } = useContext(CartContext);

  const removeItem = (id) => {

    setCart(
      cart.filter(item => item.id !== id)
    );

  };

  const increaseQty = (id) => {

    setCart(

      cart.map(item =>

        item.id === id

          ? {
              ...item,
              quantity:
                (item.quantity || 1) + 1
            }

          : item

      )

    );

  };

  const decreaseQty = (id) => {

    setCart(

      cart.map(item =>

        item.id === id

          ? {
              ...item,
              quantity:
                Math.max(
                  1,
                  (item.quantity || 1) - 1
                )
            }

          : item

      )

    );

  };

  const total = cart.reduce(

    (sum,item)=>

      sum +

      item.price *

      (item.quantity || 1),

    0

  );

  const placeOrder = () => {

  if(cart.length===0){
    return;
  }

  navigate("/payment");

};

  return (

    <div className="cart-page">

      <h1>
        🛒 My Shopping Cart
      </h1>

      {cart.length===0 ? (

        <div className="empty-cart">

          <h2>
            🛒
          </h2>

          <h3>
            Your Cart is Empty
          </h3>

          <p>
            Looks like you haven't
            added anything yet.
          </p>

          <Link to="/products">

            <button
              className="primary-btn"
            >
              Continue Shopping
            </button>

          </Link>

        </div>

      ) : (

      <>
                {cart.map((item) => (

            <div
              className="cart-item"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.name}
              />

              <div
                style={{ flex: 1 }}
              >

                <small className="category">
                  {item.category}
                </small>

                <h3>
                  {item.name}
                </h3>

                <div className="rating">
                  {item.rating}
                </div>

                <p>
                  ₹{item.price}
                </p>

                <div className="qty-controls">

                  <button
                    className="qty-btn"
                    onClick={() =>
                      decreaseQty(item.id)
                    }
                  >
                    −
                  </button>

                  <span className="qty-value">
                    {item.quantity || 1}
                  </span>

                  <button
                    className="qty-btn"
                    onClick={() =>
                      increaseQty(item.id)
                    }
                  >
                    +
                  </button>

                </div>

              </div>

              <div className="cart-actions">

                <h2>
                  ₹
                  {item.price *
                    (item.quantity || 1)}
                </h2>

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeItem(item.id)
                  }
                >
                  ❌ Remove
                </button>

              </div>

            </div>

          ))}

          <div className="cart-summary">

            <h2>
              Cart Summary
            </h2>

            <div className="summary-row">

              <span>
                Subtotal
              </span>

              <span>
                ₹{total}
              </span>

            </div>

            <div className="summary-row">

              <span>
                Delivery
              </span>

              <span
                style={{
                  color:"green"
                }}
              >
                FREE
              </span>

            </div>

            <div className="summary-row">

              <span>
                Discount
              </span>

              <span>
                20%
              </span>

            </div>

            <hr />

            <div
              className="summary-total"
            >

              <span>Total</span>

              <span>
                ₹
                {Math.floor(
                  total*0.8
                )}
              </span>

            </div>

            <div className="cart-buttons">

              <Link to="/products">

                <button
                  className="secondary-btn"
                >
                  Continue Shopping
                </button>

              </Link>

              <button
                className="primary-btn"
                onClick={placeOrder}
              >
                Place Order
              </button>

            </div>

          </div>
                  </>

      )}

    </div>

  );

}

export default Cart;

    

