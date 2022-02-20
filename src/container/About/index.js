import React from "react";
import about from "../../assets/images/about.png"
import { Container, Grid } from "./style";

const About = () => {
    return (
        <>
            <Container>
                <Grid>
                    <div className="textWrapper">
                        <p className="title">About the Blog</p>
                        <p className="description">This is the first ReactJS project created </p>
                    </div>
                    <div>
                        <img className="aboutImage" src={about} alt="about"></img>
                    </div>
                </Grid>
            </Container>
        </>
    )
}

export default About;