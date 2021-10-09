import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ArrowheadDown } from "@styled-icons/evaicons-solid";

const Container = styled(motion.section)`
	padding-top: 200px;
	padding-bottom: 50px;
	padding-left: 170px;
	margin: 0px auto;
	/* max-width: 1600px; */
	min-height: 75vh;
	@media only screen and (max-height: 650px) {
		padding-top: 100px;
	}
	@media only screen and (max-width: 800px) {
		padding-left: 50px;
		padding-right: 50px;
		min-height: 40vh;
	}
	@media only screen and (max-width: 450px) {
		padding-left: 10px;
		padding-right: 10px;
		min-height: 40vh;
		max-width: 100vw;
		padding-top: 155px;
		padding-bottom: 100px;
	}
	@media only screen and (max-width: 350px) {
		padding-left: 10px;
		padding-right: 10px;
		min-height: 40vh;
		max-width: 100vw;
		padding-top: 100px;
		padding-bottom: 100px;
	}
	@media only screen and (max-height: 900px) and (min-height: 800px) {
		padding-top: 180px;
		padding-bottom: 150px;
	}
`;

const Content = styled.div`
	height: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	@media only screen and (max-width: 450px) {
		padding-left: 20px;
		padding-right: 15px;
		min-height: 40vh;
		max-width: 100%;
	}
`;

const Intro = styled.div`
	@media only screen and (max-width: 450px) {
		width: 100%;
	}
`;

const Title = styled(motion.h1)`
	margin: 0;
	margin: 1rem 0;
	margin-top: 0em;
	font-size: 75px;
	text-align: start;
	color: #00ef00;
	font-family: "Titillium Web";
	cursor: grab;
	span {
		color: #00ef00;
	}
	@media only screen and (max-width: 800px) {
		font-size: 60px;
	}
	@media only screen and (max-width: 450px) {
		font-size: 40px;
		width: 100%;
	}
	@media only screen and (max-width: 350px) {
		font-size: 36px;
		width: 100%;
	}
`;

const FirstTitle = styled(Title)`
	font-size: 20px;
	margin: 0.4em 0;
	color: ${(props) => props.theme.colors.letter};
	cursor: default;
	font-family: "Asap", sans-serif;
	@media only screen and (max-width: 450px) {
		font-size: 18px;
		width: 100%;
	}
	@media only screen and (max-width: 350px) {
		font-size: 15px;
		width: 100%;
	}
`;

const SubTitle = styled(Title)`
	font-size: 38px;
	margin: 0;
	color: ${(props) => props.theme.colors.letter};
	cursor: default;
	font-family: "Asap", sans-serif;
	@media only screen and (max-width: 800px) {
		font-size: 30px;
	}
	@media only screen and (max-width: 450px) {
		font-size: 23px;
		width: 100%;
	}
	@media only screen and (max-width: 350px) {
		font-size: 20px;
		width: 100%;
	}
`;

const Description = styled(Title)`
	padding-top: 2em;
	max-width: 100%;
	width: 80%;
	font-size: 25px;
	margin: 0;
	color: ${(props) => props.theme.colors.letter};
	cursor: default;
	word-spacing: 2px;
	line-height: 45px;
	@media only screen and (max-width: 800px) {
		font-size: 20px;
	}
	@media only screen and (max-width: 450px) {
		width: 100%;
		line-height: 32px;
		font-size: 16px;
	}
	@media only screen and (max-width: 430px) {
		width: 100%;
		line-height: 32px;
		font-size: 13px;
	}
`;

const ScrollDown = styled.div`
	position: absolute;
	bottom: 8px;
	left: 47%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100px;
	color: white;
	color: #00ef00;
	font-size: 16px;
	font-family: "Asap", sans-serif;
	svg {
		width: 30px;
	}
	@media only screen and (max-width: 450px) {
		bottom: 12px;
		left: 37%;
	}
`;

const ScrollDownContainer = styled(motion.div)`
	display: ${(props) => (props.didScroll ? "flex" : "flex")};
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	@media only screen and (max-width: 800px) {
	}
`;

const bounceTransition = {
	y: {
		duration: 0.5,
		yoyo: Infinity,
		ease: "easeOut",
		delay: 3.5,
	},
};

const Hero = ({ didScroll, handleToast, heroRef }) => {
	const [count, setCount] = useState(0);

	const variants = {
		scroll: { opacity: 0 },
		noScroll: { y: ["0%", "-50%"] },
	};

	const handleDrag = () => {
		let newCount = count + 1;
		setCount(newCount);
		if (count > 2) handleToast("Stop breaking my website! ⛔️ 😉");
		return;
	};

	const description =
		// eslint-disable-next-line no-multi-str
		"I'm a full stack software engineer (frontend heavy). \
		I'm 28 years old. I have lived in 🇪🇸 🇸🇪 🇰🇷 . \
		I like building and designing exceptional web and mobile applications that are not just visually appealing, but also user engaging.  \
		I speak fluently  🇺🇸.";

	return (
		<Container ref={heroRef}>
			<Content>
				<Intro>
					<FirstTitle>My name is,</FirstTitle>
					<Title
						drag
						dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
						dragTransition={{ bounceStiffness: 500, bounceDamping: 7 }}
						onDragEnd={handleDrag}
						initial={{ y: -300, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 1 }}>
						Israel <span> Chukwuemeka</span>
					</Title>
					<SubTitle
						initial={{ x: -300, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 1 }}>
						I'm a <span>Software Engineer</span> building amazing stuff.
					</SubTitle>
					<Description
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2 }}>
						{description}
					</Description>
				</Intro>
			</Content>
			<ScrollDown>
				<ScrollDownContainer
					didScroll={didScroll}
					variants={variants}
					transition={bounceTransition}
					animate={didScroll ? "scroll" : "noScroll"}>
					Scroll Down
					<ArrowheadDown />
				</ScrollDownContainer>
			</ScrollDown>
		</Container>
	);
};

export default Hero;
