import {useEffect, useState} from "react";
import {getUserAxios} from "../../services/user.api.axios.service";

export default function UserChooser() {
    let [user, setUser] = useState(null);
    let [id, setId] = useState(1);

    const increment = () => {
        id++;
        setId(id)
    };
    const decrement = () => {
        id--;
        setId(id)
    };


    useEffect(() => {
        getUserAxios(id).then(({data}) => {
            setUser(data);
        })

    }, [id])


    return (<div>
            <p>{JSON.stringify(user)}</p>

            <button onClick={() => {
                decrement(id);
            }}>prev
            </button>
            <button onClick={() => {
                increment(id)
            }}>next
            </button>
        </div>
    );
}