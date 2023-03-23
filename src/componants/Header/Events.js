import React from 'react'

export default function Events() {
  const shoot =()=>{
    alert("You Clicked on Button");
  }
  
    return (
    <>
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="text-center  py-3  ">
                <button className="btn btn-success" onClick={shoot}>
                    Click Me
                </button> <br />
                
                </div>
            </div>
        </div>
    </div>

    </>
  )
}
