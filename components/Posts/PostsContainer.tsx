import React, {FC, useEffect} from "react";
import PostsComponent from "./Posts";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reducers/store";
import {getPost, PostType} from "../../reducers/PostsReducer";


const PostsContainer: FC<any> = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPost());
    }, []);

    const posts = useSelector<RootState, Array<PostType>>((state) => state.Posts.posts);

    return <PostsComponent posts={posts}/>
};

export default PostsContainer;