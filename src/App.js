import React from "react";
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

function App() {
  const classes = useStyle();
  return (
    <div className={classes.cover}>
      <Card className={classes.card}>
        <CounterContainer />
        <hr />
        <TodosContainer />
      </Card>
    </div>
  );
}

const useStyle = makeStyles((theme) => ({
  card: {
    height: "100%",
    textAlign: "center"
  },
  cover: {
    height: "100%",
    overflow: "hidden"
  }
}));

export default App;
