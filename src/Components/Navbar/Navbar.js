import { useSelector } from "react-redux";
import { CartIcon } from "../../icons";
import "../../index.css";

const Navbar = () => {
	const {amount} = useSelector((store) => store.cart);
	return (
		<nav>
			<div className="nav-centre">
				<h3>My Wonderful Store</h3>
				<div className="nav-container">
					<CartIcon />
					<div className="amount-container">
						<p className="total-amount">{amount}</p>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
