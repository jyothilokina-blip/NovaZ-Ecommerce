import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  const addToCart = (product) => {

    const existingProduct = cart.find(
      item => item.id === product.id
    );

    if (existingProduct) {

      setCart(

        cart.map(item =>

          item.id === product.id

            ? {
                ...item,
                quantity:
                  (item.quantity || 1) + 1
              }

            : item

        )

      );
      alert("🎉 Product Added Successfully!");

    } else {

      setCart([

        ...cart,

        {
          ...product,
          quantity: 1
        }

      ]);
      alert("🎉 Product Added Successfully!");
      

    }

  };

  const placeOrder = () => {

    if (cart.length === 0) return;

    setOrders([...orders, ...cart]);

    setCart([]);

    alert("🎉 Order Placed Successfully!");

  };

  return (

    <CartContext.Provider

      value={{

        cart,

        setCart,

        addToCart,

        orders,

        setOrders,

        placeOrder

      }}

    >

      {children}

    </CartContext.Provider>

  );

};
