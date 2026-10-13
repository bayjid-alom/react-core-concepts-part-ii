import Posts from "./Posts"

export default function Post({ post }) {
    // console.log(post);   // object {}
    const { body, id, title, userId } = post;


    return (
        <div className="card-inner">
            <h4>Title : {title}</h4>
            <h5>Body : {body}</h5>
            <p>UserID : {userId}  ~  ID : {id}</p>
        </div>
    )
}

