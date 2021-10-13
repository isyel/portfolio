/* eslint-disable no-multi-str */
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.section)`
	padding-top: 140px;
	padding-bottom: 100px;
	padding-left: 170px;
	padding-right: 170px;
	margin: 0px auto;
	max-width: 1600px;
	min-height: 100vh;
	color: ${(props) => props.theme.colors.letter};
	overflow: hidden;
	font-family: "Asap", sans-serif;
	@media only screen and (max-width: 450px) {
		padding-left: 23px;
		padding-right: 23px;
		min-height: auto;
		max-width: auto;
		padding-top: 50px;
		padding-bottom: 100px;
	}
`;

const Title = styled(motion.div)`
	width: 100%;
	color: ${(props) => props.theme.colors.letter};
	display: flex;
	justify-content: center;
	align-items: center;
	height: 48px;
	padding-bottom: 0.5em;
	@media only screen and (max-width: 450px) {
		height: 35px;
	}
`;

const TitleText = styled.h1`
	font-size: 32px;
	padding-right: 0.7em;
	padding-left: 1em;
	color: ${(props) => props.theme.colors.letter};
	font-family: "Calibre", sans-serif;
	@media only screen and (max-width: 450px) {
		font-size: 22px;
	}
`;

const Line = styled.div`
	content: "";
	display: block;
	width: 70%;
	height: 0px;
	border-bottom: 0.5px solid ${(props) => props.theme.colors.letter};
	@media only screen and (max-width: 450px) {
		width: 45%;
	}
`;

const Body = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 4em;
	@media only screen and (max-width: 450px) {
		padding-top: 1em;
	}
`;

const TextContainer = styled.div`
	width: 90%;
	text-align: center;
	line-height: 30px;
	svg {
		color: none;
	}
	@media only screen and (max-width: 450px) {
		width: 100%;
		padding: 0 1em;
	}
`;

const Text = styled.p`
	font-family: ui-monospace;
	margin: 0;
	padding-bottom: ${(props) => (props.space ? "1em" : "0")};
	font-size: 20px;
	text-align: justify;
	padding-left: 1em;
	@media only screen and (max-width: 450px) {
		padding: 0em;
		margin: 0em;
		font-size: 15px;
		text-align: center;
		line-height: 25px;
		letter-spacing: 1px;
		word-spacing: 4px;
	}
`;

const TextDecoration = styled.p`
	font-family: fantasy;
	font-family: Noteworthy;
	margin: 0;
	font-size: 20px;
	text-align: center;
	color: ${(props) => props.theme.colors.transparent};
	font-style: italic;
	@media only screen and (max-width: 450px) {
		padding: 0em;
		margin: 0em;
		font-size: 15px;
		text-align: center;
		line-height: 25px;
		letter-spacing: 1px;
		word-spacing: 4px;
	}
`;

const ParragraphDecoration = styled(TextDecoration)`
	padding: 0;
	padding-top: 5px;
	text-align: justify;
	@media only screen and (max-width: 450px) {
	}
`;

const aboutData = [
	"I am a software developer with 5 years of experience in Web Development, over 2 years experience in Backend development and over 3 years professional experience as a full-stack developer (Frontend heavy).",
	"My strongest skills are React, Angular, Php/Laravel, Nodejs(intermediate)",
	"I am good at translating business requirements to technical implementations that are simple and clean with emphasis on user experience and engagement. I have worked in both start-up teams and large corporate environments,\
	 and also had the opportunity of taking up leadership roles on vital projects",
	"I am looking for new challenges and opportunities with a company that moves fast and wants to make a real impact, so I can contribute my utmost best, and help take the company to the next level.",
];

const AboutParagraphSeparation = ({ index }) => {
	if (index % 2 === 0) return null;
	return (
		<>
			<br />
			<TextDecoration>{"<br/>"}</TextDecoration>
			<br />
		</>
	);
};

const About = ({ aboutRef }) => {
	return (
		<Container ref={aboutRef}>
			<Title>
				<TitleText>About Me</TitleText>
				<Line />
			</Title>
			<Body>
				<TextContainer>
					{aboutData.map((textParragraph, index) => {
						return (
							<div key={index}>
								<ParragraphDecoration>{"<p>"} </ParragraphDecoration>
								<Text>{textParragraph}</Text>
								<ParragraphDecoration>{"</p>"} </ParragraphDecoration>
								<AboutParagraphSeparation index={index} />
							</div>
						);
					})}
				</TextContainer>
			</Body>
		</Container>
	);
};

export default About;
