import React from 'react'
import Header from '../Layout/Header'
import Banner from '../Layout/Banner'
import Sale from '../Layout/Sale'
import NewArrival from '../Layout/NewArrival'
import Terms from '../Layout/Terms'

import BestSelling from '../Layout/BestSelling'
import SpecialOffer from '../Layout/SpecialOffer'
// import Problem from '../Layout/Problem'


const Home = () => {
  return (
    <>
    <Banner/>
    <Terms/>
    <Sale/>
    <NewArrival/> 
    <BestSelling/>
    <SpecialOffer/>
 
    {/* <Problem/> */}

    
    {/* <Heading as={"h5"} text={"my name is monir"} className={"bg-amber-300"}/> */}
    </>
  )
}
 
export default Home  