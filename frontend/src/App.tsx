import React, { ReactNode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home1 from "./pages/Home1";
import Home2 from "./pages/Home2";
import AboutPage from "./pages/About";
import ServicePage from "./pages/Service";
import GalleryPage from "./pages/Gallery";
import TeamPage from "./pages/Team";
import BlogPage from "./pages/Blog";
import ContactPage from "./pages/Contact";
import AdminPage from "./pages/Admin";
import ProfilePage from "./pages/Profile";
import RecoverPassword from "./pages/RecoveryPassword";
import "./auth/api/interceptor";

interface LayoutProps {
	children: ReactNode;
};

function Layout({ children }: LayoutProps) {
	return <>{children}</>;
};

function App() {
	return (
		<Router basename="/BeautyClinic">
			<Routes>
				<Route path="/" element={<Layout><Home1 /></Layout>} />
				<Route path="/home" element={<Layout><Home2 /></Layout>} />
				<Route path="/about" element={<Layout><AboutPage /></Layout>} />
				<Route path="/service" element={<Layout><ServicePage /></Layout>} />
				<Route path="/gallery" element={<Layout><GalleryPage /></Layout>} />
				<Route path="/team" element={<Layout><TeamPage /></Layout>} />
				<Route path="/blog" element={<Layout><BlogPage /></Layout>} />
				<Route path="/contact" element={<Layout><ContactPage /></Layout>} />
				<Route path="/admin" element={<Layout><AdminPage /></Layout>} />
				<Route path="/profile" element={<Layout><ProfilePage /></Layout>} />
				<Route path="/:username" element={<Layout><ProfilePage /></Layout>} />
				<Route path="/recovery-password" element={<Layout><RecoverPassword /></Layout>} />
			</Routes>
		</Router>
	);
};

export default App;
