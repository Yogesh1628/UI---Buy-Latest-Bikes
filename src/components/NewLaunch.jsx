import React from 'react'

const NewLaunch = () => {
  function handleClick()
  {
    alert("Clicked on Buy Now");
  }  
  return (
    <div>
    <h3>Newly Launched</h3>
    <h1>Kryo X26 MTB</h1>
    <ul>
      <li>Lightweight 18" Frame</li>
      <li>Steel Suspension Fork</li>
      <li>Steel Hardtail Frame</li>
    </ul>
    <button className="buy-btn" onClick={handleClick}>Buy Now</button>
    </div>
  )
}

export default NewLaunch;