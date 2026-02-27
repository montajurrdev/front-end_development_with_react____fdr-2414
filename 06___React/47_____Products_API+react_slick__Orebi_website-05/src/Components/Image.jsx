
import React, { Children } from 'react'

const Image = ({className,imgSrc,imgAlt}) => {
  return (
    <img className={`${className}`} src={imgSrc} alt={imgAlt} />
  )
}

export default Image



// import React, { Children } from 'react'

// const Image = ({imgSrc,imgAlt}) => {
//   return (
//     <img src={imgSrc} alt={imgAlt} />
//   )
// }

// export default Image


 
// import React, { Children } from 'react'

// const Image = (props) => {
//   return (
//     <img src={props.imgSrc} alt={props.imgAlt} />
//   )
// }

// export default Image




