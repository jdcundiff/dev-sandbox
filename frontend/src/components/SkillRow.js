import React from "react";
import css from '../App.css';

class SkillRow extends React.Component {
  render() {
    const skill = this.props.data;
    return (
      <React.Fragment>
        <b>{skill.name}</b>
        <small> {skill.hours_spent} hours</small>
        <progress value={skill.hours_spent} max="10000" className="progress is-small show-value">
        {skill.hours_spent}
        </progress>
      </React.Fragment>
    );
  }
}

export default SkillRow;
