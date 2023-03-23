import React from 'react'
import Fruits from './Fruits';

export default function Carasol() {
  const fruits = ['apple', 'banana', 'orange','orange' ];
        
  return (
    <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="mb-0 text-center ">
                <h1>My Carasoul</h1>
                
                <Fruits Fruits={fruits}/>
                {/* {fruits.map((fruit,index)=>{

                  return <p className='mb-0' key={index}>{fruit}</p>
                })} */}
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}
