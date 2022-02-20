
import { Link } from "react-router-dom";
import { HeaderWrapper, Nav } from "./style";

const Header = () => {

    return (
        <>
            <HeaderWrapper >
                {/* <div className="mobile" /> */}
                <div className="name" >Nguyen' Blog</div>
                {/* {!isMobile && ( */}
                    <Nav>
                        <Link className="item" to="/" >
                            <p> Home </p>
                        </Link>
                        <Link className="item" to="contact" >
                            <p> Contact </p>
                        </Link>
                        <Link className="item" to="about" >
                            <p > About </p>
                        </Link>
                    </Nav>

                {/* )} */}

            </HeaderWrapper>
        </>
    )
}

export default Header;