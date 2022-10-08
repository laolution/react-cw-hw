// import {users} from "../../data";
import User from "../user/User";
import {useState} from "react";

export default function Users() {
    let [users,setUsers] = useState([]);

    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(value=> value.json())
        .then(item =>{
            setUsers(item)

        });

return (<div>
        {users.map(user => (<User item={user} key={user.id}/>))}
</div>
);
}