import React from 'react'
import { getToken, removeToken } from '../../services/LocalStorageService'

function Logout() {


    const logoutclick = () =>{
        
    const {access, refresh} = getToken()
    console.log(access, refresh)
    removeToken()
    }

  return (
    <div>
        <button  onClick={logoutclick}>Logout</button> 
    </div>
  )
}

export default Logout
