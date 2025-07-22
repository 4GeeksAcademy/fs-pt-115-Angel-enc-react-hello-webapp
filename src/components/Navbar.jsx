import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const{store,dispatch} = useGlobalReducer()

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					



				</Link>
				<div className="ml-auto">
					<Link to="/AñadirContacto">
						<button className="btn btn-primary">Añadir nuevo contacto</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};