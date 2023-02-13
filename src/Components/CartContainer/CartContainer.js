import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../Slice/Cart/cartSlice";
import CartItem from "../CartItem/CartItem";

const CartContainer = () => {
	const dispatch = useDispatch();
	const { cartItems, total, amount } = useSelector((store) => store.cart);
	if (amount < 1) {
		return (
			<section className="cart">
				<header>
					<h2>Your Shopping Basket</h2>
					<h3 className="empty-cart">is empty</h3>
				</header>
			</section>
		);
	}
	return (
		<section className="cart">
			<header>
				<h2>your bag</h2>
			</header>
			<div>
				{cartItems.map((item) => {
					return <CartItem key={item.id} {...item} />;
				})}
			</div>
			<footer>
				<hr />
				<div className="cart-total">
					<h4>
						Total Cost <span>${total}</span>
					</h4>
				</div>
				<button className="btn clear-btn" onClick={() => dispatch(clearCart())}>
					clear cart
				</button>
			</footer>
		</section>
	);
};

export default CartContainer;
