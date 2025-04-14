import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Behavior from "./pages/Behavior";
import NAEYC from "./pages/NAEYC";
import Contact from "./pages/Contact";
import Professional from "./pages/Professional";
import Family from "./pages/Family";
import Team from "./pages/Team";
import Pricing from "./pages/Pricing";

// Import CSS
import "./App.css";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="team" element={<Team />} />
					{/* Placeholder routes for other pages */}
					<Route
						path="service/professional"
						element={<Professional />}
					/>
					<Route path="service/behavior" element={<Behavior />} />
					<Route path="service/naeyc" element={<NAEYC />} />
					<Route path="service/family" element={<Family />} />
					<Route path="pricing" element={<Pricing />} />
					<Route path="contact" element={<Contact />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</Router>
	);
}

// Simple component for pages that are not yet implemented
function ComingSoon({title}) {
	return (
		<div className="container-custom py-24 text-center">
			<h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
			<p className="text-xl text-gray-600 mb-8">
				This page is coming soon! We're working hard to bring you great
				content.
			</p>
			<div className="w-24 h-24 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
		</div>
	);
}

// 404 page
function NotFound() {
	return (
		<div className="container-custom py-24 text-center">
			<h1 className="text-4xl font-bold text-gray-900 mb-4">
				Page Not Found
			</h1>
			<p className="text-xl text-gray-600 mb-8">
				The page you are looking for doesn't exist or has been moved.
			</p>
			<a href="/" className="btn btn-primary">
				Go Home
			</a>
		</div>
	);
}

export default App;
