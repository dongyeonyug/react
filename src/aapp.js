import { useEffect, useState } from "react";


function Hello(){
    

    useEffect(()=>{
        console.log("hi");
        return ()=>console.log("bye");
    },[]);
        

    useEffect(function() {
        console.log("h1");
        return function(){
        console.log("bye");
        }
    },[]);
    
    return <h1>hello</h1>;
}

function App() {

  const [showing,setShowing] =useState(false);  
  const onClick=()=> setShowing(prev => !prev);
  

  return (
    <div>
      {showing ? <Hello />: null}
      <button onClick={onClick}>{showing ? "HIDE" : "Show"}</button>
  
    </div>
  );
}

export default App;
