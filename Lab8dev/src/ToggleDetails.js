import React,{useState} from "react";

function ToggleDetails(){
    const [show , setShow]=useState(false);
    return(
        <div>
            <button onClick={()=> setShow(prev=> !prev)}>
                {show ? 'Ukryj szczegóły': 'Pokaż szczególy'}
            </button>
            {show && <p>Kacper Olenkiewcz 20470</p>}
        </div>
    );
}
export default ToggleDetails;