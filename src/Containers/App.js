import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../Components/persons';
import Cockpit from '../Components/Cockpit/cockpit';
class App extends Component{
  state={
    persons:[
      {id:'1',name:'Ishan',age:20},
      {id:'2',name:'John',age:25},
      {id:'3',name:'Ronaldo',age:30}
    ],
    showPersons:false
  }
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
    let persons=null;
    if(this.state.showPersons){
      persons=(
        <div>
          <Persons persons={this.state.persons}
           clicked={this.deletePersonHandler}
             changed={this.nameChangeHandler}/>
      </div>
      );
    }

  return (
    <div className={classes.App}>
      <Cockpit persons={this.state.persons}
      showPersons={this.state.showPersons}
      clicked={this.toggleButtonHandler}/>
      {persons}
    </div>
  );
  }
}
export default App;
