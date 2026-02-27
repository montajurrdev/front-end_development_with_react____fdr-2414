
import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import SaleOne from '/src/assets/SaleOne.png'
import SaleTwo from '/src/assets/SaleTwo.png'
import SaleThree from '/src/assets/SaleThree.png'

const Sale = () => {
  return (
    <div className='py-[100px]'>
        <Container>
            <Flex className={"items-start gap-x-4"}>
                <div className="">
                    <img src={SaleOne}  />
                </div>
                <div className="flex flex-col justify-between h-[650px]">
                    <img src={SaleTwo} />
                    <img src={SaleThree}  />
                </div>
            </Flex>
        </Container>

    </div>
  )
}

export default Sale