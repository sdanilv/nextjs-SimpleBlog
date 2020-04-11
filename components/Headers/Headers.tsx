import React, {FC} from "react";
import {HeaderLogo, HeaderMenu, HeaderTitle, StyledHeader} from "./HeadersStyled";


 const Header : FC = () =>
     {
         return <StyledHeader>
        <HeaderLogo src="logo.ico " alt="logo"/>
        <HeaderTitle>Simple Blog</HeaderTitle>
        <HeaderMenu>
            <div>Read</div>
            <div>Write</div>
        </HeaderMenu>

    </StyledHeader>
    };


export default Header;