import React from "react";
import tw, { styled } from "twin.macro";
import handshakeIcon from "../assets/icons/handshake_1.svg";
import brotherhoodIcon from "../assets/icons/brotherhood_1.svg";
import earthIcon from "../assets/icons/earth_1.svg";
import doctorIcon from "../assets/icons/doctor_1.svg";
import backgroundImage from "../assets/images/home2_why_bg.svg";

const WhySection = styled.section`
	${tw`relative top-[580px] w-full py-[380px] px-[10%] text-white`}
	background-image: url(${backgroundImage});
	background-repeat: no-repeat;
	background-position: top right;
	background-size: cover;
	@media (max-width: 1440px) {
		${tw`top-[414px] py-[260px]`}
	}
`;

const ContentContainer = styled.div`
	${tw`flex flex-col lg:flex-row justify-between items-start`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const TextContainer = styled.div`
	${tw`lg:w-1/2 mb-10 lg:mb-0`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const Title = styled.h2`
	${tw`text-[44px] font-semibold leading-[54px] mb-6`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const Description = styled.p`
	${tw`text-[#D8DCFF] text-[18px] leading-[28px]`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const StatsContainer = styled.div`
	${tw`lg:w-1/2 grid grid-cols-2 gap-8`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const StatItem = styled.div`
	${tw`flex items-center`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const Icon = styled.img`
	${tw`w-[60px] h-[60px] mr-4`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const StatValue = styled.h3`
	${tw`text-[32px] font-bold`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const StatDescription = styled.p`
	${tw`text-[16px] font-medium`}
	color: ${({ isPrimary }) => (isPrimary ? "#FF9ACB" : "#D8DCFF")};
	@media (max-width: 1440px) {
		${tw``}
	}
`;

function Why() {
	return (
		<WhySection>
			<ContentContainer>
				{/* Text Content */}
				<TextContainer>
					<Title>Why choosing us?</Title>
					<Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.</Description>
				</TextContainer>

				{/* Stats Group */}
				<StatsContainer>
					<StatItem>
						<Icon src={handshakeIcon} alt="Trusted Clinic" />
						<div>
							<StatValue>100%</StatValue>
							<StatDescription isPrimary={true}>trusted clinic</StatDescription>
						</div>
					</StatItem>
					<StatItem>
						<Icon src={brotherhoodIcon} alt="Customer Love" />
						<div>
							<StatValue>99%</StatValue>
							<StatDescription>customer love</StatDescription>
						</div>
					</StatItem>
					<StatItem>
						<Icon src={earthIcon} alt="Asian Branch" />
						<div>
							<StatValue>75+</StatValue>
							<StatDescription>asian branch</StatDescription>
						</div>
					</StatItem>
					<StatItem>
						<Icon src={doctorIcon} alt="Licensed Worker" />
						<div>
							<StatValue>1,200+</StatValue>
							<StatDescription>licensed worker</StatDescription>
						</div>
					</StatItem>
				</StatsContainer>
			</ContentContainer>
		</WhySection>
	);
}

export default Why;
