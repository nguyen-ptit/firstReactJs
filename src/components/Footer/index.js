import React from "react";
import { Container } from "../../container/Home/style";
import { FooterWrapper } from "./style";

const Footer = () => {
    return (
        <>
            <Container>
                <FooterWrapper>
                    <div>
                        <a href="https://www.facebook.com/nguyen.nh2000/">
                            <img className="icon" alt="iconSocial" src="https://img.icons8.com/material-two-tone/24/000000/facebook-f--v2.png" />
                        </a>
                        <a>
                            <img className="icon" alt="iconSocial" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/000000/external-twitter-an-american-online-news-and-social-networking-service-logo-bold-tal-revivo.png" />
                        </a>
                        <a href="https://www.instagram.com/n11.08.2/">
                            <img className="icon" alt="iconSocial" src="https://img.icons8.com/material-rounded/24/000000/instagram-new.png" />
                        </a>
                    </div>
                    <p>©2022 by Nguyen Huy Nguyen.</p>
                </FooterWrapper>
            </Container>
        </>
    )
};

export default Footer;