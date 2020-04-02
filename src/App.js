import React, { Component } from 'react';
import './App.css';
import Person from './Person/person'
import Radium, {StyleRoot} from 'radium';
class App extends Component{
  state={
    persons:[
      {id:'1',name:'Ishan',age:20},
      {id:'2',name:'John',age:25},
      {id:'3',name:'Ronaldo',age:30}
    ],
    showPersons:false
  }
  // switchButtonHandler=(newName)=>{
  //   this.setState({
  //     persons:[
  //       {name:'Ishan',age:20},
  //       {name:'John',age:25},
  //       {name:newName,age:30}
  //     ]
  //   })
  // }
  // changeHandler=(event)=>{
  //   console.log("CHANGED! ",event.target.value)
  //   this.setState({
  //     persons:[
  //       {name:'Ishan',age:20},
  //       {name:'John',age:25},
  //       {name:event.target.value,age:30}
  //     ]
  //   }) 
  // }
  toggleButtonHandler=()=>{
    const currentState=this.state.showPersons;
    this.setState({
      showPersons:!currentState
    })
  }
  nameChangeHandler=(event,personIndex)=>{
    const persons=[...this.state.persons];
    const person=persons[personIndex];
    person.name=event.target.value;
    persons[personIndex]=person;
    this.setState({
      persons:persons
    })
  }
  deletePersonHandler=(personIndex)=>{
    const persons=[...this.state.persons];
    persons.splice(personIndex,1)
    this.setState({
      persons:persons
    })
  }
  render(){
    const style={
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      ':hover':{
        backgroundColor:'lightgreen',
        color:'black'
      }
    }
    let persons=null;
    if(this.state.showPersons){
      persons=(
        <div>
          {this.state.persons.map((person,index)=>{
           return <Person 
           click={()=>{this.deletePersonHandler(index)}}
           changed={(event)=>{this.nameChangeHandler(event,index)}} 
           name={person.name} 
           age={person.age}
           key={person.id}/>
          })}
      </div>
      );
      style.backgroundColor='red';
      style[':hover']={
        backgroundColor:'salmon',
        color:'black'
      }
    }
    const classes=[];
    if(this.state.persons.length<=2)
      classes.push('red')
    
    if(this.state.persons.length<=1)
      classes.push('bold')

  return (
    <StyleRoot>
    <div className="App">
      <h1>I'am a react App</h1>
      <p className={classes.join(' ')}>This is really working</p>
      {/* <button style={style} onClick={this.switchButtonHandler.bind(this,'Nemar')}>Switch</button> */}
      <button style={style} onClick={this.toggleButtonHandler}>Toggle Persons</button>
      {persons}
    </div>
    </StyleRoot>
  );
  }
// return React.createElement('div',{className:'App'},React.createElement('h1',null,'I\'am a normal App'))
}

export default Radium(App);
