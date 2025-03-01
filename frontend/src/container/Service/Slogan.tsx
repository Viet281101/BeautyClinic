import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import serviceSloganBg from "../../assets/images/service/slogan_full_img.jpeg";
import TourPlayButton from "../../components/TourPlayBtn";

const SloganSection = styled.section`
	${tw`relative w-full h-[700px] flex items-center justify-between py-24 px-12 overflow-hidden z-10`}
	background: url(${serviceSloganBg}) no-repeat center center/cover;
	@media (max-width: 1440px) {
		${tw`h-[529px]`}
	}
	@media (max-width: 1024px) {
		${tw`h-[540px] flex-col`}
	}
`;

// Background Mask
const SloganOverlay = styled.div`
	${tw`absolute top-0 left-0 w-full h-full bg-[#091156] opacity-60 z-20`}
`;

const Content = styled.div`
	${tw`relative left-[160px] text-left text-white w-1/2 z-30`}
	@media (max-width: 1440px) {
		${tw`-top-[3px] left-[102px]`}
	}
	@media (max-width: 1350px) {
		${tw`left-[80px]`}
	}
	@media (max-width: 1024px) {
		${tw`w-3/4 mx-auto left-0 -top-[20px] text-center`}
	}
	@media (max-width: 500px) {
		${tw`-top-[60px]`}
	}
`;

const Title = styled.h2`
	${tw`text-[44px] font-semibold mb-4`}
	@media (max-width: 1440px) {
		${tw`text-[36px] max-w-[580px] leading-[45px] tracking-[0.001rem] mb-[19px]`}
	}
	@media (max-width: 1350px) {
		${tw`text-[30px] mb-[20px]`}
	}
	@media (max-width: 1024px) {
		${tw`text-[26px] leading-[30px] max-w-full`}
	}
	@media (max-width: 480px) {
		${tw`text-[18px]`}
	}
`;

const Description = styled.p`
	${tw`text-[20px] text-[#CACACA]`}
	@media (max-width: 1440px) {
		${tw`text-[16px] tracking-[0.1rem] max-w-[600px]`}
	}
	@media (max-width: 1350px) {
		${tw`text-[14px] max-w-full`}
	}
	@media (max-width: 480px) {
		${tw`text-[12px]`}
	}
`;

// Play Button Container
const PlayContainer = styled.div`
	${tw`relative right-[260px] z-30 inline-flex items-center text-center`}
	@media (max-width: 1780px) {
		${tw`right-[100px]`}
	}
	@media (max-width: 1440px) {
		${tw`right-[190px]`}
	}
	@media (max-width: 1350px) {
		${tw`right-[100px]`}
	}
	@media (max-width: 1150px) {
		${tw`right-[10px]`}
	}
	@media (max-width: 1024px) {
		${tw`top-0 right-0`}
	}
	@media (max-width: 480px) {
		${tw`flex-col`}
	}
`;

const PlayText = styled.p`
	${tw`relative -top-[10px] left-[30px] text-white text-[20px] tracking-[0.1rem] font-semibold mt-4`}
	@media (max-width: 1440px) {
		${tw`text-[16px] left-[28px]`}
	}
	@media (max-width: 480px) {
		${tw`left-0 top-[10px]`}
	}
`;

const Slogan: React.FC = () => {
	return (
		<SloganSection>
			<SloganOverlay />
			<Content>
				<Title>Best responsibility and service for our customers</Title>
				<Description>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.
				</Description>
			</Content>
			<PlayContainer>
				<TourPlayButton />
				<PlayText>Treatments Videos</PlayText>
			</PlayContainer>
		</SloganSection>
	);
};

export default Slogan;
