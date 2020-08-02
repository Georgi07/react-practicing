import React,  { Component }  from 'react';
import './App.css';
import styled from 'styled-components';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

const StyledButton = styled.button`
      background-color: ${props => props.alt ? 'red' : 'green'};
            color: white;
            border: 1px solid blue;
            padding: 8px;
            font: inherit;
            cursor: pointer;
            &:hover {
                background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
                color: black;
            }`;
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
        // console.log('Was clicked');
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
        // const person = Object.assign({}, this.state.persons[personIndex]);
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
        // const style = {
        //     backgroundColor: 'green',
        //     color: 'white',
        //     border: '1px solid blue',
        //     padding: '8px',
        //     font: 'inherit',
        //     cursor: 'pointer',
        //     ':hover': {
        //         backgroundColor: 'lightgreen',
        //         color: 'black',
        //     },
        // };
        let persons = null;
        if ( this.state.showPersons ) {
            persons = (
                <div>
                {this.state.persons.map((person, index) => {
                    return (<Person
                        click={() => this.deletePersonHandler(index)}
                        name={person.name}
                        age={person.age}
                        changed={(event) => this.nameChangedHandler(event, person.id)}/>);
                })}
                {/*<Person*/}
                {/*    name={this.state.persons[0].name}*/}
                {/*    age={this.state.persons[0].age}/>*/}
                {/*<Person*/}
                {/*    name={this.state.persons[1].name}*/}
                {/*    age={this.state.persons[1].age}*/}
                {/*    click={this.switchNameHandler.bind(this, 'Max!')}*/}
                {/*    changed={this.nameChangedHandler}>My Hobbies: Racing</Person>*/}
                {/*<Person*/}
                {/*    name={this.state.persons[2].name}*/}
                {/*    age={this.state.persons[2].age}/>*/}
            </div>);
            // style.backgroundColor = 'red';
            // style[':hover'] = {
            //     backgroundColor: 'salmon',
            //         color: 'black',
            // }
        }
        let classes =[];
        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }
        return(

            <div className="App">
                <h1>My react app</h1>
                <p className={classes.join(' ')}>This is really working</p>
                <StyledButton
                    alt={this.props.showPersons}
                 onClick={this.togglePersonsHandler}>Switch Name
                </StyledButton>
                {persons}
            </div>

        );
    }
}
export default App;
