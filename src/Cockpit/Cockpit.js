import React from "react";
import styled from "styled-components";
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
const cockpit = (props) => {
    let classes =[];
    if (props.persons.length <= 2) {
        classes.push('red');
    }
    if (props.persons.length <= 1) {
        classes.push('bold');
    }
  return (
      <div>
      <h1>My react app</h1>
      <p className={classes.join(' ')}>This is really working</p>
    <StyledButton
        alt={this.props.showPersons}
        onClick={this.togglePersonsHandler}>Switch Name
    </StyledButton>
    </div>
  );
};
export default cockpit;