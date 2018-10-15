import React from "react";

class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {

    let data = !this.state.length ? (<p>BIO</p>) :
      (
        <div className="box">
          <h1 className="title">Jeremiah Cundiff</h1>
          <h2 className="subtitle">Quantitative Analyst</h2>
        </div>
      );

    return data;
  }
}

export default Bio;
