import React, {FC, useState} from "react";

import Router from "next/router";

import {PostType} from "../../../reducers/PostsReducer";
import styled from "styled-components";
import {SubmitPostButton, TemplatePostBody, TemplatePostTitle, TemplatePostPost} from "./TemplatePostStyles";


type Props = { callback: (title: string, body: string) => void, title?: string, body?: string }
const TemplatePost: FC<Props> = ({callback, title = "", body = "",}) => {
    const [titleValue, setTitle] = useState(title);
    const [bodyValue, setBody] = useState(body);

    const changeTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    };
    const changeBodyHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setBody(e.target.value)
    };
    const submitPostHandler = () => {
        callback(titleValue, bodyValue);
        if (!title) {
            setTitle("");
            setBody("");
        }
    };

    return (
        <TemplatePostPost>
            Title:
            <TemplatePostTitle value={titleValue} onChange={changeTitleHandler}/>
            Post:
            <TemplatePostBody name={"body"} rows={10} value={bodyValue} onChange={changeBodyHandler}/>
            <SubmitPostButton onClick={submitPostHandler}> Send </SubmitPostButton>
        </TemplatePostPost>
    )
};
export default TemplatePost;