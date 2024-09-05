interface user {
    _id: number;
    username: string;
    password: string;
    age: number;
}
interface following
{
    follower_id: number;
    following_id: number;
    date: Date;
}

interface post {
    _id: number;
    user_id: number;
    content: string;
    image_content: string;
    created_at: Date;
}

interface comment
{
    _id: number;
    user_id: number;
    post_id: number;
    content: string;
    created_at: Date;
}

interface replay
{
    _id: number;
    user_id: number;
    comment_id: number;
    content: string;
    created_at: Date;
}
interface upvote_post{
    _id: number;
    user_id: number;
    post_id: number;
    created_at: Date;
}
interface upvote_comment{
    _id: number;
    user_id: number;
    commment_id: number;
    created_at: Date;
}
