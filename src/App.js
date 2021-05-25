import React from "react";
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";
import { Card } from '@material-ui/core';

function App() {
  return (
    <div class="App" style={{height: "100%", overflow: "hidden", backgroundColor: "lightgreen"}}>
      <Card style={{marginLeft: "5%", marginRight: "5%", marginTop: "5%", marginBottom: "5%", height: "90%"}}>
        <CounterContainer />
        <hr />
        <TodosContainer />
      </Card>
    </div>
  );
}

export default App;
