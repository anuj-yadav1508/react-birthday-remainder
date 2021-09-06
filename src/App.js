import axios from 'axios';
import React, {useState,useEffect} from 'react'
import './App.css';
import Tours from './Tours'

function App() {
   const [loading, setLoading] = useState(true)
  
  const [tours, setTours] = useState()

 useEffect(async () => {
  await axios.get('https://course-api.com/react-tours-project')
   .then((res) => {
     setTours(res.data)
     console.log(res.data)
   })
   setLoading(false)
  },[])
  
      
    

  
  if(loading){
    return(
      <h1>...loading</h1>
    )
  }else{
  return (
    <div className="App">
      <div className="container">
        <h1>Ours Tours</h1>
        
        <div className="underline"></div>
        <Tours tours={tours} />
      </div>
    </div>
  );
}
}

export default App;
