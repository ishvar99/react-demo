import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../Components/persons';
import Cockpit from '../Components/Cockpit/cockpit';
import withClass from '../hoc/withClass'
import Aux from '../hoc/auxiliary';
class App extends Component{ //Stateful Component
  constructor(props){
    super(props);
    console.log('Inside [App.js] constructor()')
    this.state={
      persons:[
        {id:'1',name:'Ishan',age:20},
        {id:'2',name:'John',age:25},
        {id:'3',name:'Ronaldo',age:30}
      ],
      showPersons:false
    }
  }
  componentWillMount(){
    console.log('Inside [App.js] componentWillMount()');
  }
  componentDidMount(){
    console.log('Inside [App.js] componentDidMount()');
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
    console.log('Inside [App.js] render()')
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
    <Aux>
      <Cockpit persons={this.state.persons}
      appTitle={this.props.appTitle}
      showPersons={this.state.showPersons}
      clicked={this.toggleButtonHandler}/>
      {persons}
      </Aux>
  );
  }
}
export default withClass(App,classes.App);
