import React, {FC, useState} from "react";
import styled from "styled-components";
import {addComment, PostType} from "../../../reducers/PostsReducer";
import {
    AddCommentButton,
    AddCommentTextArea,
    Comments,
    Comment,
    PostBody,
    PostTitle,
    StyledPost
} from "./PostWithCommentStyles";


type AddCommentType = { addComments: (comments: string) => void }
const PostWithComment: FC<PostType & AddCommentType> = ({title, body, comments, addComments}) => {
// debugger;
    const [comment, setComment] = useState("");

    const changeCommentHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value)
    };
    const SendCommentHandler = () => {
        addComments(comment);
        setComment("");

    };

    return <StyledPost>
        <PostTitle>
            {title}
        </PostTitle>
        <PostBody>
            {body}
        </PostBody>
        {comments ? comments.length : 0} comments
        <AddCommentTextArea rows={10} name="comment" onChange={changeCommentHandler} value={comment}/>
        <AddCommentButton onClick={SendCommentHandler}> Send </AddCommentButton>
        <Comments>
            {comments!! && comments.map(comment => <Comment key ={comment.id}>{comment.body}</Comment>)}
        </Comments>
    </StyledPost>
};
export default PostWithComment;