import React from "react";
import DataProvider from "./DataProvider";
import Bio from "./Bio";

class App extends React.Component {
  render() {
    /*
      * Use DataProvider to fetch data for each component
      * using Django Apps as the backend
    */
    return (
      <React.Fragment>
        // skills (sidebar)
        <DataProvider endpoint="api/skills/" render={data => <Skills data={data} />} />

        // quick bio
        <DataProvider endpoint="api/bio/" render={data => <Bio data={data} />} />

        // project updates (center page)
        <DataProvider endpoint="api/updates/" render={data => <ProjectUpdates data={data} />} />

        // projects (center page)
        <DataProvider endpoint="api/projects/" render={data => <Projects data={data} />} />
      </React.Fragment>
    );
  }
}

export default App;
