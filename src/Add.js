import React, { useState } from 'react'

const Add = ({addNewMovie}) => {

    const [inputs,setInputs] = useState({
        title : '' ,
        description : '' ,
        rate : '' ,
        img : '' ,
    })

const handleChange = (e) => {
    setInputs({...inputs,[e.target.name]:e.target.value})
}

const handleAdd = () => {
    addNewMovie(inputs)
}

  return (
    <div className='add'>
        <h1 style={{color:'white'}}>Add New Movie</h1>
        <input placeholder='title' name='title' onChange={handleChange}></input>
        <input placeholder='description' name='description' onChange={handleChange}></input>
        <input placeholder='rate' name='rate' onChange={handleChange}></input>
        <input placeholder='img' name='img' onChange={handleChange}></input>
        <br></br>
        <button onClick={handleAdd}>Add new movie</button>
    </div>
  )
}

export default Add