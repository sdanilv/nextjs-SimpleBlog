import React, {FC} from "react";
import PostsComponent from "./Posts";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reducers/store";
import {PostType} from "../../reducers/PostsReducer";




const PostsContainer :FC<any>  = () => {
    // const dispatch = useDispatch();
    // const addPost = (post) => {
    //     dispatch({ type: 'POST_ADD', post })
    // };
    const posts = useSelector<RootState, Array<PostType>>((state) => state.Posts.posts);

    return <PostsComponent posts={posts} />
};

export default PostsContainer;