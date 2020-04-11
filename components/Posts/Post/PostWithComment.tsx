import React, {FC} from "react";
import styled from "styled-components";

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

type Props =  {
    title: string,
    body: string
}
const Post :FC<Props> = (props) => {
    return<StyledPost>
        <PostTitle>
            {props.title}
        </PostTitle>
        <PostBody>
            {props.body}
        </PostBody>
    </StyledPost>
};
export default Post;