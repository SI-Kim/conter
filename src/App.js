import React from "react";
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";
import { Container } from '@material-ui/core';

function App() {
  return (
    <div class="App" style={{height: "100%", overflow: "hidden"}}>
      <Container style={{height: "100%"}}>
        <CounterContainer />
        <hr />
        <TodosContainer />
      </Container>
    </div>
  );
}

export default App;
