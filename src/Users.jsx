import { use } from "react"

export default function Users({ fetchUsers }) {
    const users = use(fetchUsers)
    // console.log(users);  
    // // [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
    // fetchUser থেকে JSON data আসছে। use(fetchUser) ব্যবহার করে [{...}, {...}] আকারে users array পাওয়া যাচ্ছে।

    return (
        <div className="card">
            <h3>Users : {users.length} </h3>
        </div>
    )
}