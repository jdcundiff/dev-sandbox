import React from "react";
import DataProvider from "./DataProvider";
import Bio from "./Bio";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="column">
        <div className="columns">
          <div className="column">
            <DataProvider endpoint="api/bio/" render={data => <Bio data={data} />} />
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
