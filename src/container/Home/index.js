import React from "react";
import { Banner, Container, Flex } from "./style";
import banner from "../../assets/images/banner.png"
import Search from "../../components/Search";
import Login from "../../components/Login";
import Post from "../../components/Post";
import Form from "../../components/Form";
import { useMedia } from "react-use";
import breakpoints from "../../theme/breakpoints";

const Home = () => {
    const isMobile = useMedia(breakpoints.sm);

    return (
        <>
            <div>
                <Banner>
                    <img src={banner} alt="banner" />
                </Banner>
                <Container>          
                    {(isMobile) 
                    ?<div>
                            <Flex>
                                <p className="allPosts">All Posts</p>
                                <Login />
                            </Flex>
                        <Search />
                        <Post />
                    </div>
                    :<div>
                    <Flex>
                        <p className="allPosts">All Posts</p>
                        <Flex>
                            <Search />
                            <Login />
                        </Flex>
                    </Flex>
                    <Post />
                </div>

                    }


                </Container>
                <Form />

            </div>
        </>
    )
}


export default Home;