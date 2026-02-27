import React from 'react'

const Badge = ({badgeText,className}) => {
  return (
    <div className={`bg-black text-white py-3.5 px-8 text-[14px] font-bold inline-block ${className}`}>{badgeText}</div>
  )
}

export default Badge 