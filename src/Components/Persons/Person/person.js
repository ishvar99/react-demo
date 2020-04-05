import React ,{Component} from 'react'
import classes from './Person.module.css'
import Aux from '../../../hoc/auxiliary';
import withClass from '../../../hoc/withClass';
class person extends Component{
    constructor(props){
        super(props);
        console.log('Inside [Person.js] constructor()')
    }
    componentWillMount(){
        console.log('Inside [Person.js] componentWillMount()');
      }
      componentDidMount(){
        console.log('Inside [Person.js] componentDidMount()');
      }
    render(){
        console.log('Inside [Person.js] render');
    return (
        <Aux>
        <p onClick={this.props.click}>I'am {this.props.name} and age is {this.props.age}</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}></input>
        </Aux>
    )
    }
}
export default withClass(person,classes.Person);