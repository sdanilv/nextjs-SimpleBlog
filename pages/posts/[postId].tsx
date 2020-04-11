import React from "react";
import PostWithCommentContainer from "../../components/Posts/PostWithComment/PostWithCommentContainer";
import {useRouter} from "next/router";
import {NextPage} from "next";


const PostPage: NextPage = () => {

    const router = useRouter();
    const postId = router.query.postId as string;
    return (<>
        < PostWithCommentContainer id={postId}/></>)
};

export default PostPage;

