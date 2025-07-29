import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">Contactos</Link>
				<div className="ml-auto">
					<Link to="/AgregarContacto">
						<button className="btn btn-primary">Añadir nuevo contacto</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};