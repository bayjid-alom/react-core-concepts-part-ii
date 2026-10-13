import { useEffect, useState } from "react"

export default function Comments() {

    const [comments, setComments] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(response => response.json())
            .then(data => setComments(data))
    }, [])


    return (
        <div className="card">
            <h3>Total Comment :  {comments.length}</h3>
            {
                comments.map(comment =>
                    <div className="card-inner">
                        <h5>Body : {comment.body}</h5>
                        <h4>Email : {comment.email}</h4>
                    </div>)
            }
        </div>
    )
}

