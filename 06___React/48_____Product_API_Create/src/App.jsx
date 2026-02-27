
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [apiData,setApiData] = useState([])

// apiData.pop()


  useEffect(()=>{
    async function allApiData (){
      const data = await axios.get("/data.json")
      setApiData(data.data.data)
      
    }
    allApiData()

  })


  return (
    <>


  {
  apiData.map((item)=>(
<div className="card w-96 bg-base-100 card-xs shadow-sm mb-2 m-auto pt-5 ">
  <div className="card-body">
  <ul className='text-[14px]'>
    <li>Name : <span>{item.name}</span></li>
    <li>Age : <span>{item.age}</span></li>
    <li className='font-bold'>Skill : <span>{item.skill}</span></li>
  </ul>
  </div>
</div>
  ))
}



    </>
  )
}

export default App
