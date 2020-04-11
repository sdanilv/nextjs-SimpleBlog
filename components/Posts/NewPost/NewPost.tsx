import React, {FC, useState} from "react";

import Router from "next/router";

import {PostType} from "../../../reducers/PostsReducer";
import styled from "styled-components";
import {AddPostButton, NewPostBody, NewPostTitle, NewStyledPost} from "./NewPostStyled";


type SendPost ={sendPost: (title:string, body:string)=> void}
const NewPost: FC<SendPost> = ({sendPost}) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const changeTitleHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setTitle(e.target.value)
    };
    const changeBodyHandler = (e:React.ChangeEvent<HTMLTextAreaElement>) =>{
        setBody(e.target.value)
    };
    const SendNewPostHandler = () => {
        sendPost(title, body);
        setTitle("");
        setBody("");

    };

    return (
        <NewStyledPost>
            Title:
            <NewPostTitle value={title} onChange={changeTitleHandler}/>
            Post:
            <NewPostBody name={"body"} rows={10} value={body} onChange={changeBodyHandler}/>
            <AddPostButton onClick={SendNewPostHandler}> Send </AddPostButton>
        </NewStyledPost>
    )
};
export default NewPost;