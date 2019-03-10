import React from "react";
import DataProvider from "./DataProvider";
import Sidebar from "./Sidebar";
import Bio from "./Bio";
import CenterPage from "./CenterPage";

class App extends React.Component {
  render() {
    {/*
      * Each component uses DataProvider to fetch data
      * using Django Apps as the backend to serve the data
    */}
    return (
      <div>
        <div className="columns is-multiline is-mobile">
          <div className="column">
            <div className="columns">
              <div className="column">
                <DataProvider endpoint="api/bio/" render={data => <Bio data={data} />} />
              </div>
            </div>
          </div>
        </div>
        <div className="columns is-multiline is-mobile">
          <Sidebar/>
          <CenterPage/>
        </div>
      </div>
    );
  }
}

export default App;
