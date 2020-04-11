import React, {FC} from "react";

import Router from "next/router";
import {PostBody, PostTitle, StyledPost} from "./StyledPost";

type Props = {
    id: string,
    title: string,
    body: string
}
const Post: FC<Props> = ({id, body, title}) => {
    const toPostCallback = () => Router.push('/posts/[postId]', `/posts/${id}`);
    return (
        <StyledPost onClick={toPostCallback}>
            <PostTitle>
                {title}
            </PostTitle>
            <PostBody>
                {body}
            </PostBody>
        </StyledPost>
    )
};
export default Post;