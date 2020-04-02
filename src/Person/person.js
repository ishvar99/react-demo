import React from 'react'
import './Person.css'
import Radium from 'radium';
const person=(props)=>{
    const style={
        '@media (min-width:500px)':{
            width:'450px'
        }
    }
    return (
        <div style={style} className="Person">
        <p onClick={props.click}>I'am {props.name} and age is {props.age}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
}
export default Radium(person);