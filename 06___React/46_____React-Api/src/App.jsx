
import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';


function App() {
  // useState basic
  const [count, setCount] = useState(5)
console.log(count);

const addValue =()=>{
  if (count < 10 && count >= 0) {
    setCount(count + 1)
    
    
  }
}
const removeValue =()=>{
  if (count <= 10 && count > 0) {
    setCount(count - 1)
    
    
  }
  
}

// API rules
const [allData,setAllData] = useState([])

useEffect(()=>{
  async function dataF() {
    const allPdata = await axios.get("https://dummyjson.com/products")
    console.log(allPdata.data.products);
    
setAllData(allPdata.data.products)
    
    
  }
  dataF()
},[]);






  return (
<>
<h1>{count}</h1>
<button onClick={addValue}>AddValue</button>
<button onClick={removeValue}>RemoveValue</button>


{
  allData.map(item=>(
<>
    <h1>{item.title} </h1>
    <h1>{item.price} </h1>
</>

  ))
}
</>
  )
}

export default App


