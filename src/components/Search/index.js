import React, { useState } from "react";
import { useMedia } from "react-use";
import breakpoints from "../../theme/breakpoints";
import { SearchWrapper } from "./style";

const Search = () => {
    const [show, setShow] = useState(false);
    const alwaysShow = useMedia(breakpoints.sm);        
    return (
        <>
            <SearchWrapper>
                <img
                    className="search-icon"
                    src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" alt="icon"
                    onClick={()=>setShow(true)}
                />
                {(show || alwaysShow) &&
                    <> 
                        <input type="text" placeholder="Search" />
                        <img
                            className="closeIcon"
                            src="https://img.icons8.com/material-outlined/24/000000/delete-sign.png" alt="icon"
                            onClick={() => setShow(false)
                            }
                        />
                    </>
                }
            </SearchWrapper>
        </>
    )
};

export default Search;