import React, {FC} from "react";
import NewPost from "./NewPost";
import {useDispatch} from "react-redux";
import {addPost} from "../../../reducers/PostsReducer";

const NewPostContainer :FC = ()  =>{
    const dispatch = useDispatch();
    const sendPost =(title, body) => dispatch(addPost(title, body));
   return <NewPost sendPost={sendPost}/>
};

export default NewPostContainer;
