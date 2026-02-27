import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './Components/Heading'
import Image from './Components/Image'
import monir from '/src/assets/pic.jpg'

function App() {
 

  return (
  <>
 <Heading text={"hello h1"} as={"h1"}/>
 <Heading text={"hello h2"} as={"h2"}/>
 <Heading text={"hello h3"} as={"h3"}/>
 <Heading text={"hello h4"} as={"h4"}/>
 <Heading text={"hello h5"} as={"h5"}/>
 <Heading text={"hello h6"} as={"h6"}/>


 {/* <Image imgSrc={"/src/assets/pic.jpg"}/> or  */}
 <Image imgSrc={monir}/>
   </>
  )
}

export default App
