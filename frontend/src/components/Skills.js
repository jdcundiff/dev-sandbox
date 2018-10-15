import React from "react";

class Skills extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.length
    let comp = !data ? (<p>Skills</p>) :
      (
        <div className="box">
          <h1 className="title">Jeremiah Cundiff</h1>
          <h2 className="subtitle">Quantitative Analyst</h2>
        </div>
      );

    return comp;
  }
}

export default Skills;
