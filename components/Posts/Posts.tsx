import React, {FC} from "react";
import styled from "styled-components";
import Post from "./Post/Post";
import {PostType} from "../../reducers/PostsReducer";

const PostsContainer = styled.div`
width:100%;
display: flex;
`;

const PostsComponent :FC<{posts: Array<PostType>}>  = ({posts}) => {
    return <PostsContainer>
        {posts.map(post => <Post key={post.id} id={post.id} title={post.title} body={post.body} />)}
    </PostsContainer>
};

export default PostsComponent;