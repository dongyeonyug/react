import { useEffect, useState } from "react";


function App() {

    const[loading,setLoading]=useState(true);
    const[coins,setCoins]=useState([]);

    const [InputNum,setNum]=useState(0);

    const [calculate,setCalculate]=useState(0);

    const [coinNum,setcoinNum]=useState(0);

    const [coinname,setcoinname]=useState('');

    const onChange=(event)=>{setNum(event.target.value);
    
    }
    const onSubmit=(event)=>{
    
      event.preventDefault();
     
      setCalculate(InputNum/parseFloat(coinNum))

    }

    const onChange2=(event)=>{setcoinNum(event.target.value);
      setcoinname(event.currentTarget.id);
      console.log(event.target.value);
      console.log(event.currentTarget.id);
      console.log(event);
    }

    useEffect(()=>{

        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response)=>response.json())
        .then((json)=>setCoins(json));
      
      
        setLoading(false);
        
        
        
    }, [])
  
  return(
    <div>
        <h1>The Coins {loading ? "" : `(${coins.length})`}</h1>
        <p><strong>Choose your Coin!</strong></p>
        {loading ? (<strong>Loaing</strong>) : 
        
        (
        <select  onChange={onChange2}>
          <option>Select Coin!</option>
    {coins.map((coin,index)=>
    
    <option key={index} 
    
    value={coin.quotes.USD.price}
   
    >
    {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
    </option>)}
   
    </select>
    
    )}
    <p><strong>Write dollar!</strong></p>
  <form onSubmit={onSubmit}>
    <input value={InputNum} onChange={onChange}></input>
    <button type="submit">submit</button>
  </form>  


   <h2>{InputNum} USD is {calculate} {coinname}</h2>
      
    
    </div>
  );
}

export default App;
