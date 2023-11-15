const storetoken = (value) =>{
    if (value){
  // console.log(value)
  const  {access, refresh} = value
  localStorage.setItem('access_token' ,access)
  localStorage.setItem('refresh_token' ,refresh)
        
    }
}


const getToken = () =>{
    let access_token = localStorage.getItem('access_token')
    let refresh_token = localStorage.getItem('refresh_token')
    // console.log(access_token, refresh_token)
    return {access_token, refresh_token
    }
}


const removeToken = ()=>{
  console.log('remove')
    
  localStorage.removeItem('access_token' )
  localStorage.removeItem('refresh_token')
}


export {removeToken, getToken, storetoken}