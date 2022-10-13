// import {users} from "../../data";
import User from "../user/User";
import {useEffect, useState} from "react";

export default function Users() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState({})

    const lift= (asd)=>{
        setUser(asd)
    }

    // useEffect(() => {
    //
    //     fetch(`https://jsonplaceholder.typicode.com/users`)
    //         .then(value => value.json())
    //         .then(item => {
    //             setUsers(item)
    //
    //
    //         });
    //
    // }, [])

    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(value => value.json())
            .then(item => {
                setUsers(item)


            });

    }, [])


    return (<div>
            <hr/>
            {/*{user && <div>{JSON.stringify(user)}</div>}*/}
            {/*{user?<div>asdfasd </div>:<div>weweee</div>}*/}
            {/*{JSON.stringify(user)}*/}
            <h3>{user?.username}</h3>
            <hr/>

            {users.map(user => (<User item={user} key={user.id} lift={lift}/>))}
        </div>
    );
}