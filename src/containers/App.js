import React,  { Component }  from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';

class App extends Component {
    state = {
        persons : [
            {name: 'Max', age: 28},
            {name: 'Manu', age: 29},
            {name: 'Stephanie', age: 25},
        ],
        otherState: 'some other value',
        showPersons: false,
    };
    switchNameHandler = (newName) => {
        this.setState({
            persons : [
                {name: newName, age: 28},
                {name: 'Manu', age: 29},
                {name: 'Stephanie', age: 27},
            ]
        })
    };
    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return  p.id === id;
        });
        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({persons: persons})
    };
    togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({
          showPersons: !doesShow
      })
    };
    deletePersonHandler = (personIndex) => {
      const persons =  [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons})
    };
    render() {
        let persons = null;
        if ( this.state.showPersons ) {
            persons = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}/>
            </div>);
        }
        return(
            <div className="App">
                {persons}
            </div>
        );
    }
}
export default App;
