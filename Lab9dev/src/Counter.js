import React from 'react';
export default function Counter( {onLog} ){
    console.log("Counter zrenderoway")
    return <button onClick={onLog}>Pokaż licznik</button>
}
