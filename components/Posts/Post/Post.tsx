import React, {FC} from "react";
import styled from "styled-components";
import Router from "next/router";

const StyledPost = styled.div`
width: 40vw;
height: 80vh;
margin: 4vw;
background: green;
display: inline-block;
`;
const PostTitle = styled.h3`
margin: 20px;
`;
const PostBody = styled.div`
margin: 20px;
`;

type Props = {
    id:number,
    title: string,
    body: string
}
const Post: FC<Props> = ({id, body, title}) => {
    return (
        <StyledPost onClick={() => Router.push('/post/[pid]', `/post/${id}`)}>
            <PostTitle>
                {title}
            </PostTitle>
            <PostBody>
                {body}
            </PostBody>
        </StyledPost>
    )
};
export default Post;