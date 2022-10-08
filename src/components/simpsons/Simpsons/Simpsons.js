import {simpsons} from "../data";
import Simpson from "../Simpson/Simpson";

export default function Simpsons(props) {

    return (<div>
            {simpsons.map((simpson, index) => <Simpson key={index} simpson={simpson}/>)}
        </div>
    );
}