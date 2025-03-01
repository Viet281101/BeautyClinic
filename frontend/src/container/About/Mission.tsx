import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import missionImage from "../../assets/mission_img.svg";

const MissionSection = styled.section`
	${tw`relative top-[260px] w-4/5 mx-auto py-24 flex items-center justify-between gap-12 z-10`}
    @media (max-width: 1440px) {
		${tw`top-[20px]`}
	}
	@media (max-width: 1130px) {
		${tw`top-[140px]`}
	}
	@media (max-width: 820px) {
		${tw`flex-col-reverse text-center`}
	}
	@media (max-width: 768px) {
		${tw`top-[280px]`}
	}
`;

const ImageContainer = styled.div`
	${tw`relative w-1/2 flex justify-center`}
	img {
		${tw`w-full max-w-[540px] h-auto`}
	}
    @media (max-width: 1440px) {
		${tw`max-w-[431px] top-[40px] right-[30px]`}
	}
	@media (max-width: 1024px) {
		${tw`w-full right-0`}
		img { ${tw`max-w-[400px]`} }
	}
	@media (max-width: 820px) {
		${tw`top-[60px]`}
		img { ${tw`max-w-[480px]`} }
	}
`;

const ContentContainer = styled.div`
	${tw`relative top-[20px] left-0 w-1/2 flex flex-col justify-center`}
    @media (max-width: 1440px) {
		${tw`top-[33px] left-[7px]`}
	}
	@media (max-width: 1024px) {
		${tw`w-full top-[50px] left-0`}
	}
`;

const SectionLabel = styled.h4`
	${tw`text-[#FF64AE] text-[20px] font-semibold tracking-[0.01rem] mb-4`}
    @media (max-width: 1440px) {
		${tw`text-[16px] -tracking-[0.002rem] mb-[10px]`}
	}
`;

const SectionTitle = styled.h2`
	${tw`text-[#091156] text-[44px] font-semibold leading-[60px] mb-5`}
    @media (max-width: 1440px) {
		${tw`text-[36px] leading-[45px] -tracking-[0.004rem] max-w-[520px] mb-[13px]`}
	}
	@media (max-width: 820px) {
		${tw`text-center mx-auto`}
	}
`;

const SectionDesc = styled.p`
	${tw`text-[#8B8B8B] text-[20px] leading-[24px]`}
	&:not(:last-child) {
		${tw`mb-[24px]`}
	}
    @media (max-width: 1440px) {
		${tw`text-[16px] leading-[24px] tracking-[0.098rem] max-w-[460px]`}
	}
	@media (max-width: 820px) {
		${tw`text-center mx-auto`}
	}
`;

const Mission: React.FC = () => {
	return (
		<MissionSection>
			{/* Content */}
			<ContentContainer>
				<SectionLabel>Our Mission</SectionLabel>
				<SectionTitle>Special & premium service to any clients</SectionTitle>
				<SectionDesc>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.
				</SectionDesc>
				<SectionDesc>
					Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.
				</SectionDesc>
			</ContentContainer>

			{/* Image */}
			<ImageContainer>
				<img src={missionImage} alt="Our Mission" />
			</ImageContainer>
		</MissionSection>
	);
};

export default Mission;
