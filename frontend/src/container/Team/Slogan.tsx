import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import sloganBg from "../../assets/images/team/slogan.jpeg";

const SloganSection = styled.section`
	${tw`relative w-full h-[700px] flex items-center justify-center text-center z-10`}
	background: url(${sloganBg}) no-repeat center center/cover;
	&::before {
		content: "";
		${tw`absolute top-0 left-0 w-full h-full bg-[#091156] opacity-60 z-20`}
	}
	@media (max-width: 1440px) {
		${tw`-top-[191px] h-[529px]`}
	}
	@media (max-width: 1280px) {
		${tw`top-0`}
	}
	@media (max-width: 1130px) {
		${tw`top-[60px] h-[530px] mb-[110px]`}
	}
	@media (max-width: 768px) {
		${tw`top-[140px] mb-[190px]`}
	}
	@media (max-width: 500px) {
		${tw`top-[200px] mb-[250px]`}
	}
`;

const ContentContainer = styled.div`
	${tw`relative z-30 max-w-[860px] px-6`}
	@media (max-width: 1440px) {
		${tw`max-w-[700px] -top-[11px]`}
	}
`;

const SectionTitle = styled.h2`
	${tw`relative left-[12px] text-white text-[44px] leading-[60px] px-[100px] font-semibold mb-8`}
	@media (max-width: 1440px) {
		${tw`text-[36px] leading-[45px] px-[70px] mb-[8px]`}
	}
	@media (max-width: 1130px) {
		${tw`text-[30px] leading-[36px] px-[40px] mb-[20px]`}
	}
	@media (max-width: 420px) {
		${tw`text-[26px] leading-[30px] left-0 mb-[40px]`}
	}
`;

const SectionDesc = styled.p`
	${tw`text-[#CACACA] text-[20px] tracking-[0.1rem] leading-[1.5]`}
	@media (max-width: 1440px) { ${tw`text-[16px]`} }
	@media (max-width: 1130px) { ${tw`text-[14px]`} }
	@media (max-width: 480px) { ${tw`text-[12px]`} }
`;

const Slogan: React.FC = () => {
	return (
		<SloganSection>
			<ContentContainer>
				<SectionTitle>Customer satisfaction is our main goal</SectionTitle>
				<SectionDesc>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
				</SectionDesc>
			</ContentContainer>
		</SloganSection>
	);
};

export default Slogan;
