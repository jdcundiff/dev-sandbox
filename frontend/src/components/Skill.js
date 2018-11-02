import React from "react";
import css from '../App.css';

class Skill extends React.Component {
  render() {
    let name =  this.props.skill.name;
    let years = this.props.skill.years;
    let time_spent = years >= 1 ? 
      years + (years != 1 ? ' years' : ' year') : 
      '<1 year';
    return (
      <div className="level-item has-text-centered">
        <div>
          <p className="title is-6">{name}</p>
          <p className="heading">{time_spent}</p>
        </div>
      </div>
    );
  }
}

export default Skill;
