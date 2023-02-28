import Button from "./button"
import styles from "./App.module.css";
import { useEffect, useState } from "react";



function App() {

  const [counter,setvalue]=useState(0);
  const [keyword, setkeyword]=useState("")
  const onClick=()=> setvalue((prev) => prev +1);

  const onChange=(event)=>setkeyword(event.target.value);

  console.log("i run");

  useEffect(()=>{

  console.log('Call');

},[counter]);

useEffect(()=>{
  if(keyword !=="" && keyword.length>5){
  console.log('search',keyword);
  }
},[keyword]);

 

  return (
    <div className="App">
      <input 
      value={keyword}
      onChange={onChange}
      type="text" placeholder="Search" />

      <h1 className={styles.title}>Welcome{counter}</h1>
      <button onClick={onClick}>click</button>
      <Button text={"Continue"}/>
    </div>
  );
}

export default App;
