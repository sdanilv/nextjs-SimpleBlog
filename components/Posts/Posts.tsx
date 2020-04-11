import React, {FC} from "react";
import styled from "styled-components";
import Post from "./Post/Post";

const PostsContainer = styled.div`
width:100%
`;

const PostsComponent :FC<any>  = ({posts}) => {
    return <PostsContainer>
<Post id={posts} title={"Sunt aut facere repellat provident occaecati "} body={"Quia et suscipit suscipit recusandae consequuntur" +
" expedita et cum reprehenderit molestiae ut ut quas totam"+
    "nostrum rerum est autem sunt rem eveniet architecto"} />

    </PostsContainer>
};

export default PostsComponent;