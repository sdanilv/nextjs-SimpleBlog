import React, {FC, useEffect} from "react";
import {connect} from "react-redux";

import {addComment, changePost, deletePost, PostType, retrievePost} from "../../../reducers/PostsReducer";
import PostWithComment from "./PostWithComment";

type Props = {
    posts: Array<PostType>, addComment: (id: string, comment: string) => void,
    changePost: (postId: string, title: string, body: string) => void,
    retrievePost: (id: string) => void, id: string, deletePost: (id: string) => void
}
const PostWithCommentContainer: FC<Props> = (props) => {

    const addComments = (comment: string) => {
        props.addComment(props.id, comment);
    };
    const changePost = (title: string, body: string) => {
        props.changePost(props.id, title, body)
    };
    const deletePost = () => {
        props.deletePost(props.id);
    };

    useEffect(() => {
        props.retrievePost(props.id);
    }, []);

    const post = props.posts.find(post => post.id === props.id);

    return <PostWithComment deletePost={deletePost} addComments={addComments} changePost={changePost} {...post}/>

};
const mapStateToProps = (state) => ({
    posts: state.Posts.posts,
});

export default connect(mapStateToProps, {addComment, retrievePost, changePost, deletePost})
(PostWithCommentContainer);