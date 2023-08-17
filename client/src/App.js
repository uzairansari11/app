import { useLocation } from "react-router";
import "./App.css";
import Routing from "./Routing/Routing";
import { NavbarComponent } from "./components/NavbarComponent";
function App() {
	const location = useLocation();
	return (
		<div className="App">
			{location.pathname === "/" ? null : <NavbarComponent />}
			<Routing />
		</div>
	);
}

export default App;
