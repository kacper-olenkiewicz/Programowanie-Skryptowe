import HandleClick from './HandleClick';
import React, { useCallback } from 'react';
import Counter from './Counter';
import ProductList from "./ProductList";
function App() {
  const [count ,setCount]=React.useState(0);
  const onLog =useCallback(()=>{
    console.log("Licznik:",count)
  },[count])
  return(
   <div>
            <button onClick={HandleClick}>Kliknij mnie!</button>
            <button onClick={()=> setCount((c)=> c + 1)}>Zwiększ:{count}</button>
            <Counter onLog ={()=>console.log("Licznik tylko gdy sie zmienia:",count)}/>
              <Counter onLog={onLog} />
              <ProductList />
    </div>

  );
}

export default App;
