const POSTS_GET = "POSTS/POSTS_GET";
const POST_ADD = "POSTS/POST_ADD";
const POST_DELETE = "POSTS/POST_DELETE";
const POST_RETRIEVE = "POSTS/POST_GET";
const COMMENT_ADD = "POSTS/COMMENT_ADD";

type Action <T, K = {}> = { type: T } & K;


export type Comment = { id: number, postId: number, body: string }
export type PostType = {
    readonly id: number,
    title: string,
    body: string
    comments?: Array<Comment>
}

type ActionsTypes = Action<typeof POSTS_GET, { posts: Array<PostType> }> |
    Action<typeof POST_ADD, { post: PostType }> |
    Action<typeof POST_DELETE, { id: number }> |
    Action<typeof POST_RETRIEVE, { id: number, comments: Array<Comment> }> |
    Action<typeof COMMENT_ADD, { id: number, comment: Comment }>

export const initialPostsState = {posts: []};
export const postsReducer = (state = initialPostsState, action: ActionsTypes) => {
    switch (action.type) {
        case POSTS_GET:
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