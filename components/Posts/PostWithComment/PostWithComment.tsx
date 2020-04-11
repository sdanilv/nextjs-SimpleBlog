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
import TemplatePost from "../PostTamplate/TemplatePost";



type Props = {
    addComments: (comments: string) => void,
    changePost: ( title: string, body: string) => void } & PostType
const PostWithComment: FC<Props> = ({title, body, comments, addComments, changePost}) => {
// debugger;
    const [comment, setComment] = useState("");
    const [editable, setEditable] = useState(true);


    const changeCommentHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value)
    };
    const SendCommentHandler = () => {
        addComments(comment);
        setComment("");
    };

    if (editable)
        return < TemplatePost callback={changePost} title={title} body={body}/>;

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
            {comments!! && comments.map(comment => <Comment key={comment.id}>{comment.body}</Comment>)}
        </Comments>
    </StyledPost>
};
export default PostWithComment;