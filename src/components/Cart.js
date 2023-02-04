import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../constant";
import { clearCart, removeFromCart } from "../utils/cartSlice";

const MenuCard = ({ menu }) => {
  console.log(menu);
  const dispatch = useDispatch();
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart());
  };
  return (
    <div className="p-2 m-2 w-56 border border-black">
      <img src={IMG_CDN_URL + menu.cloudinaryImageId} alt={menu.name} />
      <p className="text-center font-bold">{menu.name}</p>
      <p>Price - ${menu.price}</p>
      <button className="p-2 m-2 font-light" onClick={handleRemoveFromCart}>
        Remove From Cart
      </button>
    </div>
  );
};

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <div className="text-center font-semibold text-l">Cart Items</div>
      <button className="p-2 m-2 font-light" onClick={handleClearCart}>
        Clear Cart
      </button>
      <div className="flex flex-wrap">
        {cartItems.map((item) => (
          <MenuCard menu={item} key={item.id} />
        ))}
      </div>
    </>
  );
};
export default Cart;
