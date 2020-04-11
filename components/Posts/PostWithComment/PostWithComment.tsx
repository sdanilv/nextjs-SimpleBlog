import React, {FC} from "react";
import styled from "styled-components";
import {PostType} from "../../../reducers/PostsReducer";

const StyledPost = styled.div`

`;
const PostTitle = styled.h2`
margin: 20px auto;
text-align: center;
`;
const PostBody = styled.div`
margin: 50px ;
`;
const Comments = styled.div``;
const Comment = styled.div``;

const PostWithComment :FC<PostType> = ({title, body, comments}) => {
    return<StyledPost>
        <PostTitle>
            {title}
        </PostTitle>
        <PostBody>
            {body}
        </PostBody>
        <Comments>
            {comments&& comments.map(comment => <Comment>{comment}</Comment> )}
        </Comments>
    </StyledPost>
};
export default PostWithComment;