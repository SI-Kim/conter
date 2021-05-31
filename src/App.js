import React from "react";
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";
import { Card, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Route, Link } from "react-router-dom";

function App() {
  const classes = useStyle();
  return (
    <div className={classes.cover}>
      <Link to="/counter">
        <Button className={classes.routeBtns} variant="contained">
          Counter
        </Button>
      </Link>
      <br />
      <Link to="/todo">
        <Button className={classes.routeBtns} variant="contained">
          Todo
        </Button>
      </Link>
      <hr />
      <Card className={classes.card}>
        <Route path="/counter" exact={true} component={CounterContainer} />
        <Route path="/todo" component={TodosContainer} />
      </Card>
    </div>
  );
}

const useStyle = makeStyles((theme) => ({
  card: {
    height: "100%",
    textAlign: "center",
    backgroundColor: "#DCDCDC"
  },
  cover: {
    height: "100%",
    overflow: "hidden"
  },
  routeBtns: {
    marginLeft: "3%",

    marginTop: "3%",
    marginBottom: "1%"
  }
}));

export default App;
