import styled from "styled-components";

export const StyledHeader = styled.header`
display:flex;
background: lightgray;
width: 100%;
height: 50px;
`;
export const HeaderLogo = styled.img`
float:left;

height: 30px;
margin: 10px 50px
`;
export const HeaderTitle = styled.h1`
float:left;
margin:0;
color: black;
`;

export const HeaderMenu = styled.div`
margin-left: auto;
margin-right: 30px;

& > div{
display: inline-block;
padding: 10px 20px;
font-size: 1.4em;
&:hover{
background: silver;
cursor:pointer;
}
& > a{
color: black;
text-decoration: none;
}
}
`;