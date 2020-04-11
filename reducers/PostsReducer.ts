import {ThunkAction} from "redux-thunk";
import {RootState} from "./store";
import {PostsApi} from "../api/api";

const LOAD_POSTS = "POSTS/LOAD_POSTS";
const POST_ADD = "POSTS/POST_ADD";
const POST_DELETE = "POSTS/POST_DELETE";
const POST_RETRIEVE = "POSTS/POST_GET";
const COMMENT_ADD = "POSTS/COMMENT_ADD";

type Action<T, K = {}> = { type: T } & K;


export type Comment = { id: string, postId: string, body: string }
export type PostType = {
    readonly id: string,
    title: string,
    body: string
    comments?: Array<Comment>
}

export type ActionsTypes = Action<typeof LOAD_POSTS, { posts: Array<PostType> }> |
    Action<typeof POST_ADD, { post: PostType }> |
    Action<typeof POST_DELETE, { id: string }> |
    Action<typeof POST_RETRIEVE, { id: string, comments: Array<Comment> }> |
    Action<typeof COMMENT_ADD, { id: string, comment: Comment }>
type ThunkActionType = ThunkAction<void, RootState, {}, ActionsTypes>;


export const initialPostsState = {posts: []};
export const postsReducer = (state = initialPostsState, action: ActionsTypes) => {
    switch (action.type) {
        case LOAD_POSTS:
            return {...state, posts: action.posts};
        case POST_ADD:
            return {...state, posts: [...state.posts, action.post]};
        case POST_DELETE:
            return {...state, posts: state.posts.filter((post) => post.id !== action.id)};
        case POST_RETRIEVE:
            return {
                ...state, posts: state.posts.map((post) => {
                    if (post.id === action.id)
                        post.comments = action.comments;
                    return post
                })
            };
        case COMMENT_ADD:
            return {
                ...state, posts: state.posts.map((post) => {
                    if (post.id === action.id)
                        post.comments.push(action.comment);
                    return post
                })
            };
        default:
            return state
    }
};

const getPostsAC = (posts: Array<PostType>): ActionsTypes => ({type: LOAD_POSTS, posts});
export  const getPost = (): ThunkActionType => async (dispatch) => {
    const posts = await PostsApi.getPosts();
    dispatch(getPostsAC(posts));
};

