import React from "react";
import css from '../App.css';

class Skill extends React.Component {
  render() {
    return (
      <div className="level-item has-text-centered">
        <div>
          <p className="title is-6">{this.props.skill.name}</p>
          <p className="heading">{this.props.skill.hours_spent} hours</p>
        </div>
      </div>
    );
  }
}

export default Skill;
