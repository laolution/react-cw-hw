import {useEffect, useState} from "react";
import User from "../user/User";

export default function Users() {
    let [users, setUsers] = useState([])
    let [user, setUser] = useState(null);

    const lift = (obj) => {
        setUser(obj);
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(value => value.json())
            .then(item => {
                setUsers(item)
            });
    }, [])


    return (<div>
            <hr/>
            <h3>{user?.username}-{user?.email}</h3>
            <p>{user?.address['street']}</p>
            <hr/>
            {users.map(user => (<User key={user.id} user={user} lift={lift}/>))}
        </div>
    );
}