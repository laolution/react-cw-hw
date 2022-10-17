
import User from "../user/User";
import {useEffect, useState} from "react";
import {getUser, getUsers} from "../../services/user.api.service";
import {getUsersAxios} from "../../services/user.api.axios.service";

export default function Users() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState({})

    const lift= (obj)=>{
        setUser(obj)
    }

    //простими фетчами
    // useEffect(() => {
    //
    //     fetch(`https://jsonplaceholder.typicode.com/users`)
    //         .then(value => value.json())
    //         .then(item => {
    //             setUsers(item)
    //
    //         });
    //
    // }, [])


//фетчами через сервіс
//     useEffect(() => {
//         getUsers().then(value => setUsers(value))
//     }, []);

//через аксіос
    useEffect(() => {
        getUsersAxios().then(value => setUsers(value.data))
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