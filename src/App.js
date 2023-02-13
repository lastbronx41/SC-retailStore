import CartContainer from "./Components/CartContainer/CartContainer";
import Navbar from "./Components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { calcTotals } from "./Slice/Cart/cartSlice";
import { useEffect } from "react";
function App() {
	const { cartItems } = useSelector((store) => store.cart);
	const dispatch = useDispatch();
	useEffect(()=>{dispatch(calcTotals())},[cartItems]);

	return (
		<main>
			<Navbar />
			<CartContainer />
		</main>
	);
}
export default App;
