import logo from './logo.svg';
import './App.css';
import {users} from "./data";
import User from "./components/user/User";

function App() {

    return (<div>
            <h2>app component</h2>
            {users.map(user => (<User item={user} key={user.id}/>))}
        </div>);
}

export default App;
