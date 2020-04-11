import React, {FC, useEffect, useState} from "react";

import {connect, useDispatch, useSelector, useStore} from "react-redux";

import {addComment, changePost, PostType, retrievePost} from "../../../reducers/PostsReducer";
import {RootState} from "../../../reducers/store";
import PostWithComment from "./PostWithComment";
import {createSelector} from "reselect";
import {curry} from "../../../Tools/carry"

type Props = {
    posts: Array<PostType>, addComment: (id: string, comment: string) => void,
    changePost: (postId: string, title: string, body: string) => void,
    retrievePost: (id: string) => void, id: string
}
const PostWithCommentContainer: FC<Props> = (props) => {
    const [loading, setLoading] = useState(true);
    const addComments = (comment: string) => {
        props.addComment(props.id, comment);
    };
    const changePost =(title: string, body: string) => {
        props.changePost(props.id, title, body)
    };
    const dispatch = useDispatch();

    useEffect(() => {
        props.retrievePost(props.id);
    }, []);

    const post = props.posts.find(post => post.id === props.id);

    return <PostWithComment addComments={addComments} changePost={changePost} {...post}/>

};
const mapStateToProps = (state) => ({
    posts: state.Posts.posts,
});

export default connect(mapStateToProps, {addComment, retrievePost, changePost})(PostWithCommentContainer);