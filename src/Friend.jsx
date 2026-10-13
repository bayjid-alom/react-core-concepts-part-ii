import Friends from "./Friends"

export default function Friend({ friend }) {
    // console.log(friend); // {object}
    const {name, email, phone, website} = friend;

    return (
        <div className="card-inner">
            <h3>Name : {name}</h3>
            <p>Email : {email}</p>
            <p>Website : {website}</p>

        </div>
    )
}


