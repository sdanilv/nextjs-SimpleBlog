import styled from "styled-components";

export const StyledHeader = styled.header`
display:flex;
background: gray;
width: 100%;
height: 50px;
`;
export const HeaderLogo = styled.img`
height: 30px;
margin: 10px 50px
`;
export const HeaderTitle = styled.h1`
float:left;
margin:0;
`;

 export const HeaderMenu = styled.div`
margin: auto ;
margin-right:30px;
& > div{
display: inline-block;
margin: 0 20px;
font-size: 1.2em;
}
`;