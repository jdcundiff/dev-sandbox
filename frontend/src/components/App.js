import React from "react";
import DataProvider from "./DataProvider";
import Bio from "./Bio";
import Skills from "./Skills";
import Projects from "./Projects";

class App extends React.Component {
  render() {
    {/*
      * Use DataProvider to fetch data for each component
      * using Django Apps as the backend
    */}
    return (
      <React.Fragment>
        {/* Sidebar */}
        <DataProvider endpoint="api/bio/" render={data => <Bio data={data} />} />
        <DataProvider endpoint="api/skills/" render={data => <Skills data={data} />} />

        {/* Center page */}
        <DataProvider endpoint="api/projects/" render={data => <Projects data={data} />} />

      </React.Fragment>
    );
  }
}

export default App;
