import React, {FC, useState} from "react";

import {PostType} from "../../../reducers/PostsReducer";
import {
    AddCommentButton,
    AddCommentTextArea,
    Comments,
    Comment,
    PostBody,
    PostTitle,
    StyledPost, DeleteButton, EditButton
} from "./PostWithCommentStyles";
import TemplatePost from "../PostTamplate/TemplatePost";
import Link from "next/link";


type Props = {
    deletePost: () => void,
    addComments: (comments: string) => void,
    changePost: (title: string, body: string) => void
} & PostType
const PostWithComment: FC<Props> = (props) => {
    const {comments, body, title} = props;
    const [commentText, setCommentText] = useState("");
    const [editable, setEditable] = useState(false);

    const changeCommentHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCommentText(e.target.value)
    };
    const SendCommentHandler = () => {
        props.addComments(commentText);
        setCommentText("");
    };

    if (editable)
        return < TemplatePost callback={props.changePost} title={title} body={body}/>;

    return <StyledPost>
        <PostTitle>
            {title}
            <EditButton onClick={() => setEditable(true)}> Edit</EditButton>
            <Link href={"/"}><DeleteButton onClick={props.deletePost}> Delete</DeleteButton></Link>
        </PostTitle>
        <PostBody>
            {body}
        </PostBody>
        {comments ? comments.length : 0} comments
        <AddCommentTextArea maxLength={500} rows={10} name="comment"
                            onChange={changeCommentHandler} value={commentText}/>
        <AddCommentButton onClick={SendCommentHandler}> Send </AddCommentButton>
        <Comments>
            {comments && comments.map(comment => <Comment key={comment.id}>{comment.body}</Comment>)}
        </Comments>
    </StyledPost>
};

export default PostWithComment;
