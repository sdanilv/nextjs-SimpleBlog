import React, {FC, useState} from "react";
import {SubmitPostButton, TemplatePostBody, TemplatePostTitle, TemplatePostPost} from "./TemplatePostStyles";
import Link from "next/link";


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
            <Link href={"/"}><a><SubmitPostButton onClick={submitPostHandler}> Send </SubmitPostButton></a></Link>
        </TemplatePostPost>
    )
};
export default TemplatePost;