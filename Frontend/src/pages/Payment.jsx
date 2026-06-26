import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import axios from "axios";

function Payment() {

  const navigate = useNavigate();

  const {
    cart,
    setCart,
    orders,
    setOrders
  } = useContext(CartContext);

  const [paymentMethod, setPaymentMethod] =
    useState("cod");

  const [processing, setProcessing] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const [transactionAmount, setTransactionAmount] = useState(0);

  const total = cart.reduce(

    (sum, item) =>

      sum +

      item.price *

      (item.quantity || 1),

    0

  );

  const finalTotal =
    Math.floor(total * 0.8);

  useEffect(() => {

    if(success){

      const timer = setTimeout(()=>{

        navigate("/orders");

      },2000);

      return ()=>clearTimeout(timer);

    }

  },[success,navigate]);

  const handlePayment = () => {

  if (cart.length === 0) {

    return;

  }

  setProcessing(true);

  setTimeout(() => {

    // Save the transaction amount
    setTransactionAmount(finalTotal);

// Save in React (keep this)
setOrders([
  ...orders,
  ...cart
]);

// Save in MongoDB
axios.post(
  "http://localhost:5000/api/orders/place",
  {
    userId: localStorage.getItem("username"),

    products: cart.map(item => ({

    productId: item.id,

    name: item.name,

    image: item.image,

    description: item.description,

    category: item.category,

    rating: item.rating,

    price: item.price,

    quantity: item.quantity || 1

})),

    total: finalTotal,

    paymentMethod: paymentMethod,

    orderStatus: "Order Confirmed"
  }
)
.then(() => console.log("Order Saved"))
.catch(err => console.log(err));

    // Clear cart
    setCart([]);

    // Show success page
    setProcessing(false);

    setSuccess(true);

  }, 2000);

};


  if(processing){

    return(

      <div className="payment-processing">

        <div className="processing-card">

          <h1>
            💳 ShopSphere
          </h1>

          <div className="loader"></div>

          <h2>
            Processing Payment...
          </h2>

          <p>

            Please don't close or refresh this page.

          </p>

        </div>

      </div>

    );

  }

  if(success){

    return(

      <div className="payment-success-page">

        <div className="success-card">

          <div className="success-icon">

            ✅

          </div>

          <h1>

            Payment Successful!

          </h1>

          <p>

            Thank you for shopping with
            ShopSphere 💜

          </p>

          <div className="success-details">

  <div className="success-row">

    <span>🧾 Order ID</span>

    <strong>
      #SP{Math.floor(Math.random() * 100000)}
    </strong>

  </div>

  <div className="success-row">

    <span>💳 Payment Method</span>

    <strong>

      {paymentMethod === "cod" && "Cash On Delivery"}

      {paymentMethod === "card" && "Credit / Debit Card"}

      {paymentMethod === "upi" && "UPI"}

      {paymentMethod === "gpay" && "Google Pay"}

      {paymentMethod === "phonepe" && "PhonePe"}

      {paymentMethod === "paytm" && "Paytm"}

    </strong>

  </div>

  <div className="success-row">

  <span>💰 Amount Paid</span>

  <strong
    style={{
      color:"#16a34a"
    }}
  >
    ₹{transactionAmount.toLocaleString()}
  </strong>

</div>

</div>

          <small>

            Redirecting to Orders...

          </small>

        </div>

      </div>

    );

  }

  return(

    <div className="payment-page">

      <div className="payment-container">

        <h1>

          💳 Secure Payment

        </h1>

        <p className="payment-subtitle">

          Choose your preferred payment method

        </p>

        <div className="payment-grid">
                      <label
            className={`payment-card ${paymentMethod==="cod" ? "active-payment" : ""}`}
          >
            <input
              type="radio"
              checked={paymentMethod==="cod"}
              onChange={()=>setPaymentMethod("cod")}
            />
            <div>
              <h2>💵</h2>
              <h3>Cash On Delivery</h3>
            </div>
          </label>

          <label
            className={`payment-card ${paymentMethod==="card" ? "active-payment" : ""}`}
          >
            <input
              type="radio"
              checked={paymentMethod==="card"}
              onChange={()=>setPaymentMethod("card")}
            />
            <div>
              <h2>💳</h2>
              <h3>Credit / Debit Card</h3>
            </div>
          </label>

          <label
            className={`payment-card ${paymentMethod==="upi" ? "active-payment" : ""}`}
          >
            <input
              type="radio"
              checked={paymentMethod==="upi"}
              onChange={()=>setPaymentMethod("upi")}
            />
            <div>
              <h2>🏦</h2>
              <h3>UPI</h3>
            </div>
          </label>

          <label
            className={`payment-card ${paymentMethod==="gpay" ? "active-payment" : ""}`}
          >
            <input
              type="radio"
              checked={paymentMethod==="gpay"}
              onChange={()=>setPaymentMethod("gpay")}
            />
            <div>
              <h2>📱</h2>
              <h3>Google Pay</h3>
            </div>
          </label>

          <label
            className={`payment-card ${paymentMethod==="phonepe" ? "active-payment" : ""}`}
          >
            <input
              type="radio"
              checked={paymentMethod==="phonepe"}
              onChange={()=>setPaymentMethod("phonepe")}
            />
            <div>
              <h2>📲</h2>
              <h3>PhonePe</h3>
            </div>
          </label>

          <label
            className={`payment-card ${paymentMethod==="paytm" ? "active-payment" : ""}`}
          >
            <input
              type="radio"
              checked={paymentMethod==="paytm"}
              onChange={()=>setPaymentMethod("paytm")}
            />
            <div>
              <h2>💰</h2>
              <h3>Paytm</h3>
            </div>
          </label>

        </div>

        {paymentMethod==="card" && (

          <div className="payment-form">

            <input
              type="text"
              placeholder="💳 Card Number"
            />

            <input
              type="text"
              placeholder="👤 Card Holder Name"
            />

            <div className="card-row">

              <input
                type="text"
                placeholder="MM/YY"
              />

              <input
                type="password"
                placeholder="CVV"
              />

            </div>

          </div>

        )}

        {paymentMethod==="upi" && (

          <div className="payment-form">

            <input
              type="text"
              placeholder="🏦 Enter UPI ID"
            />

          </div>

        )}

        {(paymentMethod==="gpay" ||
          paymentMethod==="phonepe" ||
          paymentMethod==="paytm") && (

          <div className="payment-form">

            <h3
              style={{
                textAlign:"center",
                color:"#4f46e5"
              }}
            >
              📱 Continue using your selected payment app
            </h3>

          </div>

        )}

        <div className="payment-summary">

          <h2>

            🧾 Order Summary

          </h2>

          <div className="summary-row">

            <span>Subtotal</span>

            <span>₹{total}</span>

          </div>

          <div className="summary-row">

            <span>Delivery</span>

            <span
              style={{color:"green"}}
            >
              FREE
            </span>

          </div>

          <div className="summary-row">

            <span>Discount</span>

            <span>20%</span>

          </div>

          <hr/>

          <div className="summary-total">

            <span>Total</span>

            <span>

              ₹{finalTotal}

            </span>

          </div>

          <div className="secure-box">

            🔒 100% Secure Payment

          </div>

          <button
            className="primary-btn payment-btn"
            onClick={handlePayment}
          >

            🎉 Proceed To Pay

          </button>

        </div>
              </div>

    </div>

  );

}

export default Payment;
