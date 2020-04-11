import React, {FC} from "react";
import {HeaderLogo, HeaderMenu, HeaderTitle, StyledHeader} from "./HeadersStyled";
import Link from "next/link";


 const Header : FC = () =>
     {

         return <StyledHeader>
        <Link href={"/"}><a><HeaderLogo src="logo.ico " alt="logo"/>
            <HeaderTitle>Simple Blog</HeaderTitle></a></Link>
        <HeaderMenu>
            <div><Link href={"/"}><a>Read</a></Link></div>
            <div><Link href={"/"}><a>Write</a></Link></div>
        </HeaderMenu>

    </StyledHeader>
    };


export default Header;