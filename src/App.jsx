import React from "react";
import tw, { styled } from "twin.macro";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import SlideButton from "./components/SlideBtn";
import Services from "./components/Services";
import About from "./components/About";
import Professional from "./components/Professional";
import Contact from "./components/Contact";
import ToTopBtn from "./components/ToTopBtn";

const AppContainer = styled.div`
	${tw`relative`}
	@media (max-width: 768px) {
		${tw`overflow-x-hidden`}
	}
`;

const HeaderHeroContainer = styled.div`
	${tw`relative`}
`;

function App() {
	return (
		<AppContainer>
			<HeaderHeroContainer>
				<Header />
				<Hero />
				<SlideButton />
			</HeaderHeroContainer>
			<Services />
			<About />
			<Professional />
			<Contact />
			<Footer />
			<ToTopBtn />
		</AppContainer>
	);
}

export default App;
