import Person from './Persons/Person/person';
import React ,{Component} from 'react'
class persons extends Component{
    constructor(props){
        super(props);
        console.log('Inside [Persons.js] constructor()')
    }
    componentWillMount(){
        console.log('Inside [Persons.js] componentWillMount()');
      }
      componentDidMount(){
        console.log('Inside [Persons.js] componentDidMount()');
      }
    render(){
        console.log('Inside [Persons.js] render()')
        return(
    this.props.persons.map((person,index)=>{
        return <Person 
        click={()=>this.props.clicked(index)}
        changed={(event)=>this.props.changed(event,index)} 
        name={person.name} 
        age={person.age}
        key={person.id}/>
       })
        )
    }
    }
export default persons