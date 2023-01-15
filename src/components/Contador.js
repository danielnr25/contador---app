import React from 'react'
import '../App.css'
function Contador({numClics}) {
  return (
    <div className='contador'>
      {numClics}
   </div>
  )
}

export default Contador