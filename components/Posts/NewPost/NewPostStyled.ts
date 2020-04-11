import styled from "styled-components";


export const NewStyledPost = styled.div`
margin: 30px auto;
max-width: 500px;
`;
export const NewPostTitle = styled.input`
margin: 10px 0;
text-align: center;
width: 100%;

`;
export const NewPostBody = styled.textarea`
margin: 10px 0  ;
width: 100%;
padding-bottom: 20px;
border-bottom: black solid 1px;
white-space: normal;
overflow:hidden;
`;
export const AddPostButton = styled.button`
font-size: 1.1rem;
padding: 2px 20px;
border-radius: 6px;
border-width: 1px;
& :hover{
background: white;
cursor: pointer;
}
`;