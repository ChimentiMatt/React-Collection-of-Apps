import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';


export default function TextApp() {
  const [animation, setAnimation] = useState('')
  return (
    <>
      <div className="text-page-body">
        <h1 id='textapp-reflection' >This has a water reflection effect</h1>
        
        <button onclick={() => setAnimation('textapp-reflection')}>Reload page</button>
        
        <h1 id="textapp-fade-in" className="animated fadeOutClass">Fade In Text</h1>

        <button onclick = "myFunction()">Reload page</button>
      </div>
    </>
  );
}
