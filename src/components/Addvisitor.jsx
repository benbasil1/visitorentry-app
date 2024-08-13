import axios from 'axios'
import React, { useState } from 'react'

const Addvisitor = () => {
  const [input,changeInput]=useState(
    {
      "firstname": "",
       "lastname": "",
       "purpose": "",
       "whomToMeet": ""
      }
  )
  const inputHandler=(event)=>{
          changeInput({...input,[event.target.name]:event.target.value})
  }
  const readValue=()=>{
    console.log(input)
    axios.post("http://172.16.12.153:4000/addvisitor", input).then(
    (response)=>{
      alert("successfully added")
    }
    ).catch()
  }
  return (
    <div>
      
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                 <label htmlFor="" className="form-label">first name</label>
                <input type="text" className="form-control" name='firstname' value={input.firstname} onChange={inputHandler}/>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">last name</label>
                <input type="text" className="form-control" name='lastname' value={input.lastname} onChange={inputHandler} />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">purpose</label>
                <input type="text" className="form-control" name='purpose' value={input.purpose} onChange={inputHandler}/>

              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <label htmlFor="" className="form-label">whom to meet</label>
              <input type="text" className="form-control" name='whomToMeet' value={input.whomToMeet} onChange={inputHandler}/>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={readValue}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addvisitor