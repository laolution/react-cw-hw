import {useState} from "react";
import Character from "../Character/Character";

export  function Characters() {
    const [characters, setCharacters] = useState([]);
    fetch(`https://rickandmortyapi.com/api/character`)
        .then(value=> value.json())
        .then(value =>{
            setCharacters(value.results.splice(0,10));
        });

return (<div>
        {characters.map(person =><Character key={person.id} person={person}/>)}
</div>
);
} 