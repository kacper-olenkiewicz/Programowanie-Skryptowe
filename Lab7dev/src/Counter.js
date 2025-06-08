import {useState} from 'react';

function Counter(){
    const [count, setCount]=useState(0);
    return(
        <div>
            <p>Kliknieto {count} razy</p>
            <button onClick={() => setCount(count+1)}>Kliknij mnie</button>
        </div>   
    );
}
export default Counter;