import React, {FC} from "react";
import TemplatePost from "../PostTamplate/TemplatePost";


type SendPost ={sendPost: (title:string, body:string)=> void}
const NewPost: FC<SendPost> = ({sendPost}) => {
    return (
    <TemplatePost callback={ sendPost} />
    )
};
export default NewPost;