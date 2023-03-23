import React from 'react'

export default function Fruits(props) {

    const {Fruits}=props;
    return (
    <div>
         {Fruits.map((fruit,index)=>{
                  return <p className='mb-0' key={index}>{fruit}</p>
                })}
    </div>
  )
}
