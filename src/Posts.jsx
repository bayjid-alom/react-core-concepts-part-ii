import { use } from "react"
import Post from "./Post";

export default function Posts({ postsPromise }) {
    const posts = use(postsPromise)
    // console.log(posts);   // 100 ~ [{...}, {...}]

    return (
        <div className="card">
            <h3>All Posts are here</h3>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    )
}


