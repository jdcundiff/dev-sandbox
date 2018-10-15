import React from "react";
import DataProvider from "./DataProvider";
import Projects from "./Projects";

class CenterPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="column">
          <DataProvider endpoint="api/projects/" render={data => <Projects data={data} />} />
        </div>
      </React.Fragment>
    );
  }
}

export default CenterPage;
