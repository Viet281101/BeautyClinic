import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home1 from './pages/Home1';
import Home2 from './pages/Home2';
import AboutPage from './pages/About';
import ServicePage from './pages/Service';
import GalleryPage from './pages/Gallery';
import TeamPage from './pages/Team';
import BlogPage from './pages/Blog';
import ContactPage from './pages/Contact';

interface LayoutProps {
	children: React.ReactNode;
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
			</Routes>
		</Router>
	);
};

export default App;
