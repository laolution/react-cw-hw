export default function Character(props) {
    const {person} = props
    return (<div>
            <h2>{person.name}</h2>
            <p>{person.id}</p>
            <p>{person.type}</p>
            <img src={person.image} alt={person.name}/>
        </div>
    );
}