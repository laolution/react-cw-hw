import {simpsons} from "../data";

export default function Simpson(props) {
    let {simpson} = props

    return (<div>
            <h3>{simpson.name} {simpson.surname}</h3>
            <p>Age-{simpson.age} <br/> {simpson.info}</p>
            <img src={simpson.photo} alt={simpson.name}/>
        </div>
    );
}