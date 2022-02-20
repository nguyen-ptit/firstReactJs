import React from "react";
import {  Banner, Container, Flex } from "./style";
import banner from "../../assets/images/banner.png"
import Search from "../../components/Search";
import Login from "../../components/Login";
import Post from "../../components/Post";
import Form from "../../components/Form";

const Home = () =>{
    return(
        <>
            <div>
                <Banner>
                <img src={banner} alt="banner" />
                </Banner>
                <Container>
                    <div>
                    <Flex>
                        <p className="allPosts">All Posts</p>
                        <Flex>
                            <Search/>
                            <Login/>
                        </Flex>
                    </Flex>
                    <Post/>

                    </div>
                    
                </Container>
                <Form/>

            </div>
        </>
    )
}


export default Home;