import { useState } from "react";
import { useCart } from "../../../../context/CartContext";

const CartPage = () => {
  const { cart, updateQty, removeFromCart, total } = useCart();
  const [visit, setVisit] = useState(false);

  if (cart.length === 0)
    return <h1 className="text-center mt-10 text-xl">Your cart is empty 😴</h1>;

  return (
    <div className="p-4 space-y-6">
      {cart.map((item) => (
        <div key={item._id} className="flex gap-4 border-b pb-4 items-center">
          <img
            src={item.images[0]}
            className="w-20 h-20 object-cover rounded"
          />

          <div className="flex-1">
            <h2 className="font-montserrat text-lg">{item.name}</h2>
            <p className="text-gray-500">${item.price}</p>

            <div className="flex items-center mt-2 gap-2">
              <button
                onClick={() => updateQty(item._id, item.qty - 1)}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                -
              </button>

              <span className="px-3">{item.qty}</span>

              <button
                onClick={() => updateQty(item._id, item.qty + 1)}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeFromCart(item._id)}
              className="text-red-500 text-sm mt-2"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <h1 className="text-xl font-semibold text-right">Total: ${total}</h1>
      <button
        onClick={() => setVisit(true)}
        className="h-[40px] w-[40%] bg-black text-white font-inter"
      >
        PLACE ORDER
      </button>
      {visit ? (
        <h1 className="text-2xl font-montserrat">Thank you for visiting.</h1>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CartPage;
