import React from "react";
import css from '../App.css';

class Skill extends React.Component {
  render() {
    let name =  this.props.skill.name;
    let years = this.props.skill.years;
    let hours = this.props.skill.hours_spent;
    let time_spent = years > 0 ? 
      years + (years != 1 ? ' years' : ' year') : 
      hours + (hours != 1 ? ' hours' : ' hour');
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
