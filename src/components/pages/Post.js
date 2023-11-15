import React, { useEffect, useState } from 'react'

function  Post() {
    const  [data, setData] = useState([])
   
    const abc = async()  => {
      const response = await fetch("http://127.0.0.1:8000/api/blog/")
      console.log(response)
    
      const new_data = await response.json()
      setData(new_data)
      
    }

  return (
    <>
    <button className='btn btn-primary' onClick={abc}>See Posts</button>
    
    { data &&  data.map((e)=> 
   
    <div className='row'>
      <div className='col-6 my-2'>
        <img src={e.image}  style ={{width: "500px"}}  /  >
        </div>
        <div className='my-2'>
          <h6>{e.title}</h6>
          
        </div>
        <div className='my-2'>
        <p>{e.content}</p>
        </div>
        </div>
        )
    }
      
    
    </>
  )
}

export default Post
