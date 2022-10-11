import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FlexLayout from "./pages/FlexLayout";
import GridLayout from "./pages/GridLayout";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/flex" element={<FlexLayout />} />
					<Route path="/grid" element={<GridLayout />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
