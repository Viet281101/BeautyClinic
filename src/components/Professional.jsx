import React, { useEffect, useRef } from "react";
import "../styles/components/professional.scss";
import twitterIcon from "../assets/icons/social/twitter.svg";
import facebookIcon from "../assets/icons/social/facebook.svg";
import instagramIcon from "../assets/icons/social/instagram.svg";
import briyanImage from "../assets/images/briyan_nevalli.jpeg";
import bellaImage from "../assets/images/bella_sebastian.jpeg";
import lillyImage from "../assets/images/lilly_adams.jpeg";

function Professional() {
	const professionalRef = useRef(null);
	const teamData = [
		{
			id: 1,
			name: "Briyan Nevalli",
			role: "Surgeon",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit.",
			image: briyanImage,
			socials: [twitterIcon, facebookIcon, instagramIcon],
		}, {
			id: 2,
			name: "Bella Sebastian",
			role: "Dermatologist",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit.",
			image: bellaImage,
			socials: [twitterIcon, facebookIcon, instagramIcon],
		}, {
			id: 3,
			name: "Lilly Adams",
			role: "Stylist expert",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit.",
			image: lillyImage,
			socials: [twitterIcon, facebookIcon, instagramIcon],
		},
	];

	useEffect(() => {
		let boxes = professionalRef.current.querySelectorAll(".pro-box");

		const handleHover = (event) => {
			boxes.forEach((box) => box.classList.remove("active"));
			event.currentTarget.classList.add("active");
		};

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						boxes.forEach((box) => box.classList.remove("active"));
						entry.target.classList.add("active");
					} else {
						entry.target.classList.remove("active");
					}
				});
			}, { threshold: 0.3 }
		);

		const applyHoverOrScroll = () => {
			if (window.innerWidth > 1000) {
				boxes.forEach((box) => {
					box.addEventListener("mouseenter", handleHover);
					box.addEventListener("mouseleave", () => {
						boxes.forEach((box) => box.classList.remove("active"));
						const midIndex = Math.floor(boxes.length / 2);
						boxes[midIndex].classList.add("active");
					});
				});
				observer.disconnect();
			} else {
				boxes.forEach((box) => observer.observe(box));
			}
		};

		const handleResize = () => {
			const isLargeScreen = window.innerWidth > 1000;
			boxes.forEach((box) => box.classList.remove("active"));

			if (isLargeScreen) {
				const midIndex = Math.floor(boxes.length / 2);
				boxes[midIndex].classList.add("active");
			}

			const updatedBoxes = [];
			boxes.forEach((box) => {
				const newBox = box.cloneNode(true);
				box.replaceWith(newBox);
				updatedBoxes.push(newBox);
			});

			boxes = professionalRef.current.querySelectorAll(".pro-box");
			applyHoverOrScroll();
		};

		applyHoverOrScroll();
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
			boxes.forEach((box) => box.removeEventListener("mouseenter", handleHover));
			observer.disconnect();
		};
	}, []);

	return (
		<section className="professional relative text-center -top-16" id="professional" ref={professionalRef} >
			<div className="professional-title mb-[30px]">
				<p className="professional-subtitle text-[22px] tracking-widest font-semibold">
					Professional Teams
				</p>
				<h2 className="professional-heading text-[48px] tracking-[0.01rem] font-semibold">
					The Professional expert
				</h2>
				<p className="professional-description text-[22px] tracking-widest font-normal leading-6">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
				</p>
			</div>
			<div className="professional-boxes top-[110px] flex items-center justify-between relative w-full">
				{teamData.map((team, index) => (
					<div className={`pro-box ${index === 1 ? "active w-[570px] z-20 bg-white" : ""} ${
							index === 0 ? "left" : index === 2 ? "right" : "mid"
						} z-10 relative w-[510px] h-[820px] rounded-[40px] shadow-none`} key={team.id} >
						<img src={team.image} alt={team.name} className="pro-avatar object-cover rounded-full w-[190px] h-[190px]" />
						<p className="pro-role font-semibold mt-24 text-[22px]">{team.role}</p>
						<p className="pro-name font-bold mt-5 text-[24px]">{team.name}</p>
						<p className="pro-desc font-medium leading-7 text-[18px]">{team.desc}</p>
						<div className="pro-social flex justify-center gap-6 mt-20">
							{team.socials.map((social, idx) => (
								<img src={social} alt={`Social Icon ${idx + 1}`} key={idx} className="cursor-pointer rounded-full bg-white hover:scale-125 w-12 h-12 p-[10px]" />
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Professional;
