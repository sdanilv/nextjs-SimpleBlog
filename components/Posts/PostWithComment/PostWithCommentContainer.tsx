import React, {FC, useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";

import {PostType, retrievePost} from "../../../reducers/PostsReducer";
import {RootState} from "../../../reducers/store";
import PostWithComment from "./PostWithComment";


const PostWithCommentContainer: FC<{id:string}> = ({id}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(retrievePost(id));
    }, []);


    const post = useSelector<RootState, PostType>((state) => state.Posts.posts.find(post => post.id===id));

    return <PostWithComment {...post}/>
};

export default PostWithCommentContainer;