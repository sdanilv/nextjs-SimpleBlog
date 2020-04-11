import React, {FC, useState} from "react";

import Router from "next/router";

import {PostType} from "../../../reducers/PostsReducer";
import styled from "styled-components";
import {AddPostButton, NewPostBody, NewPostTitle, NewStyledPost} from "./NewPostStyled";
import TemplatePost from "../PostTamplate/TemplatePost";


type SendPost ={sendPost: (title:string, body:string)=> void}
const NewPost: FC<SendPost> = ({sendPost}) => {
    return (
    <TemplatePost callback={ sendPost} />
    )
};
export default NewPost;