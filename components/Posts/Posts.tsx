import React, {FC} from "react";

import Post from "./Post/Post";
import {PostType} from "../../reducers/PostsReducer";
import {PostsDivContainer} from "./PostsStyles";


const PostsComponent :FC<{posts: Array<PostType>}>  = ({posts}) => {
    return <PostsDivContainer>
        {posts.map(post => <Post key={post.id} id={post.id} title={post.title} body={post.body} />)}
    </PostsDivContainer>
};

export default PostsComponent;