import styled from "styled-components";

export const StyledPost = styled.div`
width: 40%;
height: 60vh;
margin: 4vw;
background: lightgray;
border: black 2px double;

border-radius: 10px;
display: inline-block;
float: left;
  position: relative;
  
&:hover{
cursor: pointer;
border-color: lightskyblue;
border-width: 2px;
}

`;
export const PostTitle = styled.h2`
margin: 7%;

`;
export const PostBody = styled.div`
margin: 7%;
 overflow: hidden;
text-overflow: ellipsis;
-ms-text-overflow: ellipsis;
-ms-line-clamp: 10;
-webkit-line-clamp: 10;
line-clamp: 10;
display: -webkit-box;
word-wrap: break-word;
-webkit-box-orient: vertical;
box-orient: vertical;
font-size: 15px;
line-height: 19px;
`;
