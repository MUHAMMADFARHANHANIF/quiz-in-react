import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App() {
let [allquestion,setQuestion]=useState(null)
useEffect(()=>{
 async function getdata() {
  try {
    
    let getquestion = await axios('https://the-trivia-api.com/v2/questions')
    setQuestion(getquestion.data)
    
    console.log(getquestion.data);
    // console.log(allquestion[0].id);
  }
  catch (error) {
    console.log("errri");
    
    
  }
}
  getdata()
},[])



  return (
    <>
    <div className='text-4xl text-center font-bold '>Quiz App</div>
    <div>

     {/* <h1>{allquestion ? allquestion.question : console.log("noquestions")
     }</h1> */}
    </div>
  
    
    
    </>
  )
}

export default App