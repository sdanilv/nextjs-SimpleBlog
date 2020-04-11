import axios from "axios"
import {PostType} from "../reducers/PostsReducer";

const axiosInstance = axios.create({
    baseURL: "https://simple-blog-api.crew.red/",
    // withCredentials: true,
    headers: {}
});

export const PostsApi = {
    getPosts: async () => {
        const posts = await axiosInstance.get<Array<PostType>>("posts");
        return posts.data;
    },
    retrievePost: async (postId: string) => {
        const post = await axiosInstance.get<PostType>(`posts/${postId}?_embed=comments`);
        return post.data;
    },
    addPost: async (title: string, body: string) => {
        const post = await axiosInstance.post<PostType>("posts", {title, body});
        return post.data;
    },
    changePost: async (postId: string, title: string, body: string) => {
        const post = await axiosInstance.post<PostType>(`posts/${postId}`, {title, body});
        return post.data;
    },
    deletePost: async (postId: string) => {
        const posts = await axiosInstance.delete(`posts/${postId}`);
    },
    addComment: async (postId: string, body: string) => {
        const posts = await axiosInstance.post("comments", {postId, body});
        return posts.data;
    }
};