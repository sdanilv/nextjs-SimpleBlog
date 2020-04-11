import React, {FC, useEffect, useState} from "react";

import {connect, useDispatch, useSelector, useStore} from "react-redux";

import {addComment, PostType, retrievePost} from "../../../reducers/PostsReducer";
import {RootState} from "../../../reducers/store";
import PostWithComment from "./PostWithComment";
import {createSelector} from "reselect";


const PostWithCommentContainer: FC<any> = (props) => {
    const [loading, setLoading] = useState(true);
    console.log(props.posts);
    // debugger;
    const addComments = (comment: string) => {
        // dispatch(addComment(id, comment))
        props.newComment(props.id, comment);
    };
    const dispatch = useDispatch();
    // const retrievePostD = async () => await dispatch(retrievePost(id));
    useEffect(() => {
     props.retrievePost(props.id);
    }, []);
    // const post = useSelector<RootState, PostType>(createSelector(
    //     (state) => state.Posts.posts,
    //     posts => posts.find(post => post.id === id)));
    // // debugger
    // if (loading)
    //     return <>Loading...</>
    const post =  props.posts.find(post => post.id === props.id);

    return <PostWithComment addComments={addComments} {...post}/>

};
const mapStateToProps = (state) => ({
    posts: state.Posts.posts,
});

export default connect(mapStateToProps, {newComment: addComment, retrievePost})(PostWithCommentContainer);