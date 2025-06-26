import React from "react";

//Using JSX

const Hello = () =>{
    // return (<div>
    //     <h1>Hello, using JSX</h1>
    // </div>)

    //Without using JSX
    return(
        React.createElement('div',
        {id: 'hello', className: 'dummyClass'},
        React.createElement('h1',null,'Hello, without using JSX'))
    )
    
    
}

export default Hello