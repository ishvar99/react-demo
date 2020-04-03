import Person from './Persons/Person/person';
import React from 'react'
let persons=(props)=>
    props.persons.map((person,index)=>{
        return <Person 
        click={()=>props.clicked(index)}
        changed={(event)=>props.changed(event,index)} 
        name={person.name} 
        age={person.age}
        key={person.id}/>
       })

export default persons