import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Github } from "@styled-icons/boxicons-logos";
import { Email } from "@styled-icons/material-twotone";
import { LinkedinSquare } from "@styled-icons/boxicons-logos";
import { FilePdf } from "@styled-icons/boxicons-solid";
import MyCv from "../assets/Israel_Chukwuemeka_CV.pdf";

const SideContainer = styled.div`
	width: 40px;
	position: fixed;
	z-index: 10;
	text-align: center;
	color: white;
	color: ${(props) => props.theme.colors.letter};
	@media only screen and (max-width: 800px) {
		display: none;
	}
`;
const LeftSideContainer = styled(SideContainer)`
	bottom: 0px;
	left: 40px;
	right: auto;
`;
const RightSideContainer = styled(SideContainer)`
	bottom: 0px;
	left: auto;
	right: 40px;
`;
const SideText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	letter-spacing: 0.1em;
	writing-mode: vertical-rl;
	margin: 10px auto;
	padding: 10px;
`;

const SideIcon = styled(motion.div)`
	padding: 0.5em 0;
	a {
		color: ${(props) => props.theme.colors.letter};
		text-decoration: none;
	}
	svg {
		width: 30px;
		cursor: pointer;
	}
`;

const Line = styled.div`
	content: "";
	display: block;
	width: 2px;
	height: 50px;
	margin: 0px auto;
	background-color: white;
	background-color: ${(props) => props.theme.colors.letter};
`;

const Sidebar = ({ handleToast }) => {
	const handleClipboardClick = () => {
		navigator.clipboard.writeText("isykaal4saviour@gmail.com");
		handleToast(`Email copy to clipboard! 🥳`);
		return;
	};

	return (
		<>
			<LeftSideContainer>
				<SideIcon whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.85 }}>
					<a href={MyCv} target="_blank" rel="noopener noreferrer">
						<FilePdf />
					</a>
				</SideIcon>
				<SideIcon whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.85 }}>
					<a
						href="https://github.com/isyel"
						target="_blank"
						rel="noopener noreferrer">
						<Github />
					</a>
				</SideIcon>
				<SideIcon whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.85 }}>
					<Email onClick={handleClipboardClick} />
				</SideIcon>
				<SideIcon whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.85 }}>
					<a
						href="https://www.linkedin.com/in/israel-chukwuemeka/"
						target="_blank"
						rel="noopener noreferrer">
						<LinkedinSquare />
					</a>
				</SideIcon>
				<Line />
			</LeftSideContainer>
			<RightSideContainer>
				<SideText>Thank you for your visit !</SideText>
				<Line />
			</RightSideContainer>
		</>
	);
};

export default Sidebar;
