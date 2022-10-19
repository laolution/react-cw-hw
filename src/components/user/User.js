export default function User(props) {
const {user,lift}=props
    return (<div>
            <h2>{user.id}-{user.name}</h2>
            <button onClick={() => {
                lift(user)
            }}>more info
            </button>
        </div>
    );
};