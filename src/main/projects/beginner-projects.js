import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Github } from "@styled-icons/boxicons-logos";
import { ExternalLinkOutline } from "@styled-icons/evaicons-outline";
import Snake from "../../assets/snake.png";
import City from "../../assets/city-simulation.png";
import Candy from "../../assets/candy-shop.png";
import ToDo from "../../assets/to-do.png";
import SpaceBar from "../../assets/space-bar.png";
import RGB from "../../assets/rgb-game.png";
import { personalProjects } from "../../data/projects";

const Container = styled(motion.div)`
  width: 100%;
  color: ${(props) => props.theme.colors.letter};
  overflow: hidden;
  padding-top: 2em;
  font-family: "Asap", sans-serif;
  @media only screen and (max-width: 450px) {
    padding-top: 1em;
  }
`;

const CardRow = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  flex-wrap: wrap;
  padding: 1em 0;
  @media only screen and (max-width: 450px) {
    display: block;
    padding: 0;
  }
`;

const Card = styled(motion.div)`
  position: relative;
  width: 400px;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 1em;
  background: #ffffff14;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 10px 15px 0px;
  @media only screen and (max-width: 450px) {
    width: auto;
    margin: 2em 0;
    padding: 10px 15px;
    height: 400px;
  }
`;

const ImgContainer = styled.div`
  height: 210px;
  padding-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LinkContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding-right: 15px;
  padding-bottom: 15px;
  a {
    color: ${(props) => props.theme.colors.letter};
    text-decoration: none;
  }
`;

const Button = styled(motion.div)`
  padding: 0.5em;
  cursor: pointer;
  svg {
    width: 30px;
  }
`;

const Img = styled.img`
  border-radius: 5px;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 10px 15px 0px;
  @media only screen and (max-width: 450px) {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  padding-left: 1em;
  padding-top: 1em;
  @media only screen and (max-width: 450px) {
    padding: 0.7em 0;
  }
`;

const Title = styled.h4`
  font-size: 24px;
  margin: 0;
  padding: 0;
  color: #00ef00;
  font-family: "Calibre", sans-serif;
`;

const Explanation = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 300;
  margin: 0;
  padding: 0;
  padding: 10px 0;
  font-family: "Calibre", sans-serif;
  @media only screen and (max-width: 450px) {
    padding-bottom: 15px;
  }
`;

const Technology = styled.div`
  font-family: "Roboto", sans-serif;
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;

const TechItems = styled.span`
  padding-right: 5px;
  padding-top: 0px;
  font-size: 16px;
  color: ${(props) => props.theme.colors.letter};
  @media only screen and (max-width: 450px) {
    font-size: 16px;
  }
`;

const Hastag = styled.span`
  color: #00ef00;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonShow = styled(motion.button)`
  margin-top: 2em;
  padding: 0.7em 1em;
  font-size: 20px;
  font-weight: 600;
  color: #1f1f1f;
  font-family: "Calibre", sans-serif;
  cursor: pointer;
`;

const Link = ({ githubLink, externalLink }) => {
  return (
    <LinkContainer>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <Button
          whileHover={{ y: [0, -8, 0], color: "#00ef00" }}
          transition={{ duration: 0.5 }}
        >
          <Github />
        </Button>
      </a>
      <a href={externalLink} target="_blank" rel="noopener noreferrer">
        <Button
          whileHover={{ y: [0, -8, 0], color: "#00ef00" }}
          transition={{ duration: 0.5 }}
        >
          <ExternalLinkOutline />
        </Button>
      </a>
    </LinkContainer>
  );
};

const BeginnerProjects = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => setShowMore(true);

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <CardRow>
        {personalProjects.map((project) => (
          <Card>
            <Link
              githubLink={project.links.github}
              externalLink={project.links.external}
            />
            <ImgContainer>
              <Img src={project.image} alt={project.title} />
            </ImgContainer>
            <TextContainer>
              <Title>{project.title}</Title>
              <Explanation>{project.description}</Explanation>
              <Technology>
                {project.technologies.map((technology) => (
                  <TechItems>
                    <Hastag>#</Hastag>
                    {technology}
                  </TechItems>
                ))}
              </Technology>
            </TextContainer>
          </Card>
        ))}
      </CardRow>
      {showMore && (
        <ButtonContainer>
          <ButtonShow
            whileHover={{ y: [0, -8, 0] }}
            transition={{ duration: 0.5 }}
            onClick={handleShowMore}
          >
            Show more
          </ButtonShow>
        </ButtonContainer>
      )}
      {showMore && 2 === 5 && (
        <>
          <CardRow>
            <Card>
              <Link
                githubLink="https://github.com/Achiaga/SnakeJs"
                externalLink="https://snake-js.vercel.app/"
              />
              <ImgContainer>
                <Img src={Snake} alt="snake" />
              </ImgContainer>
              <TextContainer>
                <Title>Snake Game</Title>
                <Explanation>The classic snake game.</Explanation>
                <Technology>
                  <TechItems>
                    <Hastag>#</Hastag>Javascript
                  </TechItems>
                  <TechItems>
                    <Hastag>#</Hastag>Canvas
                  </TechItems>
                </Technology>
              </TextContainer>
            </Card>
            <Card>
              <Link
                githubLink="https://github.com/Achiaga/city-simulation"
                externalLink="https://city-simulations.vercel.app/"
              />
              <ImgContainer>
                <Img src={City} alt="city" />
              </ImgContainer>
              <TextContainer>
                <Title>City Simulation</Title>
                <Explanation>
                  A city Simulation with dynamic car movement.
                </Explanation>
                <Technology>
                  <TechItems>
                    <Hastag>#</Hastag>Javascript
                  </TechItems>
                  <TechItems>
                    <Hastag>#</Hastag>Threejs
                  </TechItems>
                </Technology>
              </TextContainer>
            </Card>
          </CardRow>
          <CardRow>
            <Card>
              <Link
                githubLink="https://github.com/Achiaga/CandyShop"
                externalLink="https://candy-shop.vercel.app/"
              />
              <ImgContainer>
                <Img src={Candy} alt="candy" />
              </ImgContainer>
              <TextContainer>
                <Title>Candy Store</Title>
                <Explanation>Candy store web simple design.</Explanation>
                <Technology>
                  <TechItems>
                    <Hastag>#</Hastag>HTML
                  </TechItems>
                  <TechItems>
                    <Hastag>#</Hastag>CSS
                  </TechItems>
                </Technology>
              </TextContainer>
            </Card>
            <Card>
              <Link
                githubLink="https://github.com/Achiaga/To-Do-List"
                externalLink="https://to-do-list-tau.vercel.app/"
              />
              <ImgContainer>
                <Img src={ToDo} alt="to-do" />
              </ImgContainer>
              <TextContainer>
                <Title>To-Do List</Title>
                <Explanation>A simple to-do list.</Explanation>
                <Technology>
                  <TechItems>
                    <Hastag>#</Hastag>HTML
                  </TechItems>
                  <TechItems>
                    <Hastag>#</Hastag>Javascript
                  </TechItems>
                  <TechItems>
                    <Hastag>#</Hastag>CSS
                  </TechItems>
                </Technology>
              </TextContainer>
            </Card>
          </CardRow>
          <CardRow>
            <Card>
              <Link
                githubLink="https://github.com/Achiaga/SpaceBar-Javascript-Canvas"
                externalLink="https://spacebar-js.vercel.app/"
              />
              <ImgContainer>
                <Img src={SpaceBar} alt="space-bar" />
              </ImgContainer>
              <TextContainer>
                <Title>Space Bar Game</Title>
                <Explanation>The classic space bar game.</Explanation>
                <Technology>
                  <TechItems>
                    <Hastag>#</Hastag>Javascript
                  </TechItems>
                  <TechItems>
                    <Hastag>#</Hastag>CSS
                  </TechItems>
                </Technology>
              </TextContainer>
            </Card>
            <Card>
              <Link
                githubLink="https://github.com/Achiaga/RGB-Game"
                externalLink="https://rgb-game.vercel.app/"
              />
              <ImgContainer>
                <Img src={RGB} alt="rgb-game" />
              </ImgContainer>
              <TextContainer>
                <Title>RGB Game</Title>
                <Explanation>
                  A simple game to practice your RGB skills.
                </Explanation>
                <Technology>
                  <TechItems>
                    <Hastag>#</Hastag>Javascript
                  </TechItems>
                  <TechItems>
                    <Hastag>#</Hastag>CSS
                  </TechItems>
                </Technology>
              </TextContainer>
            </Card>
          </CardRow>
        </>
      )}
    </Container>
  );
};

export default BeginnerProjects;
