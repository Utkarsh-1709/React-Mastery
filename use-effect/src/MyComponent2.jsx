import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function MyComponent2() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    
    useEffect(()=>{
        window.addEventListener("resize", handleResize);

        return() => {
            window.removeEventListener("resize",handleResize);
        }
    },[]);

    useEffect(()=>{
        document.title = `Size: ${width} X ${height}`;
    },[width,height]);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
  return (
    <div>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
    </div>
  )
}

export default MyComponent2