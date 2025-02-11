import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Header from "../layouts/Header";
import AboutHero from "../container/About/Hero";
import Professional from "../components/Professional";
import Slogan from "../container/About/Slogan";
import Vision from "../container/About/Vision";
import Mission from "../container/About/Mission";
import Clients from "../container/About/Clients";
import Footer from "../layouts/Footer";
import ToTopBtn from "../components/ToTopBtn";
import bubbleBg1 from "../assets/background/bubbles/about_1.svg";
import bubbleBg2 from "../assets/background/bubbles/about_2.svg";

const AboutContainer = styled.div`
	${tw`relative`}
	@media (max-width: 768px) {
		${tw`overflow-x-hidden`}
	}
`;

const HeaderHeroContainer = styled.div`
	${tw`relative`}
`;

const BubbleBg1 = styled.img`
	${tw`absolute top-[800px] right-0 w-[1420px] h-auto z-0`}
	@media (max-width: 1440px) {
		${tw`w-[1150px] top-[596px]`}
	}
	@media (max-width: 768px) {
		${tw`w-full top-[780px]`}
	}
`;

const BubbleBg2 = styled.img`
	${tw`absolute top-[3500px] left-0 w-[1420px] h-auto z-0`}
	@media (max-width: 1440px) {
		${tw`w-[1222px] top-[2846px]`}
	}
	@media (max-width: 1130px) {
		${tw`top-[2800px]`}
	}
	@media (max-width: 1000px) {
		${tw`top-[3800px]`}
	}
	@media (max-width: 768px) {
		${tw`w-full top-[3600px] h-[1000px]`}
	}
	@media (max-width: 480px) {
		${tw`top-[4600px] h-[800px]`}
	}
`;

const AboutPage: React.FC = () => {
	return (
		<AboutContainer>
			<BubbleBg1 src={bubbleBg1} alt="Bubble Background 1" />
			<BubbleBg2 src={bubbleBg2} alt="Bubble Background 2" />
			<HeaderHeroContainer>
				<Header />
				<AboutHero />
			</HeaderHeroContainer>
			<Professional isTeamPage={false} />
			<Slogan />
			<Vision />
			<Mission />
			<Clients />
			<Footer />
			<ToTopBtn />
		</AboutContainer>
	);
};

export default AboutPage;
