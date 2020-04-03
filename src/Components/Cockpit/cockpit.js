import React from 'react';
import classes from './cockpit.module.css';
let cockpit=(props)=>{
    const assignedClasses=[];
    let btnClass='';
    if(props.showPersons){
        btnClass=classes.Red;
    }
    if(props.persons.length<=2)
      assignedClasses.push(classes.Red)
    
    if(props.persons.length<=1)
      assignedClasses.push(classes.Bold)
    return (
    <div className={classes.Cockpit}>
    <h1>I'am a react App</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
    </div>
    )
}
export default cockpit