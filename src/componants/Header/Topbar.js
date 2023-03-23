import React from 'react'
import { userName } from '../../data/user'
export default function Topbar() {
  return (
    <div className='bg-success'>
      <div className="conatiner" >
        <div className="row">
          <div className="col">
            <p className="mb-0 text-center text-white">{userName}</p>
          </div>
        </div>
      </div >
    </div >
  )
}
