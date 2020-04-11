import styled from "styled-components";

export const StyledPost = styled.div`
margin: 0 300px;
`;
export const PostTitle = styled.h2`
margin: 20px auto;
text-align: center;
`;
export const PostBody = styled.div`
margin: 30px 0  ;
padding-bottom: 20px;
border-bottom: black solid 1px;
& ::before{
content: "";
padding: 10px;
}
`;
export const Comments = styled.div``;
export const Comment = styled.div``;
export const AddCommentTextArea = styled.textarea`
margin-top: 10px;
width: 100%;
`;
export const AddCommentButton = styled.button`
font-size: 1.1rem;
padding: 2px 20px;
border-radius: 6px;
border-width: 1px;
& :hover{
background: white;
cursor: pointer;
}
`;
