import React from "react";
import DataProvider from "./DataProvider";
import Skills from "./Skills";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="column is-full-mobile is-one-fifth-desktop">
        <div className="columns">
          <div className="column">
            <div className="columns is-multiline is-mobile">
              <DataProvider endpoint="api/skills/" render={data => <Skills data={data} />} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
