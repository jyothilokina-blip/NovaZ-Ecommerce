import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Orders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:5000/api/orders")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => console.log(err));

  }, []);

  const allProducts = orders.flatMap(order =>
    order.products.map(product => ({
      ...product,
      createdAt: order.createdAt
    }))
  );

  return (

    <div className="orders-page">

      <h1>📦 My Orders</h1>

      {

        allProducts.length === 0 ?

        (

          <div className="empty-orders">

            <h2>📦</h2>

            <h3>No Orders Yet</h3>

            <p>You haven't placed any orders yet.</p>

            <Link to="/products">

              <button className="primary-btn">

                Start Shopping

              </button>

            </Link>

          </div>

        )

        :

        (

          <>

            {

              allProducts.map((item,index)=>(

                <div
                  className="order-card"
                  key={index}
                >

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="order-info">

                    <small className="category">

                      {item.category}

                    </small>

                    <h2>

                      {item.name}

                    </h2>

                    <div className="rating">

                      {item.rating}

                    </div>

                    <p className="order-description">

                      {item.description}

                    </p>

                    <h3 className="order-price">

                      ₹{item.price}

                    </h3>

                    <div className="order-status processing">

                      📦 Order Confirmed

                    </div>

                    <p className="order-date">

                      Ordered on{" "}

                      {new Date(item.createdAt).toLocaleDateString()}

                    </p>

                  </div>

                  <div className="order-actions">

                    <button className="primary-btn">

                      Buy Again

                    </button>

                    <button className="secondary-btn">

                      Download Invoice

                    </button>

                  </div>

                </div>

              ))

            }

            <div className="orders-summary">

              <h2>

                Thank You For Shopping ❤️

              </h2>

              <p>

                We appreciate your purchase.
                Hope to see you again at
                NovaZ!

              </p>

            </div>

          </>

        )

      }

    </div>

  );

}

export default Orders;



