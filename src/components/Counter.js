import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Paper, Grid, Input } from "@material-ui/core";

function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
  const onChange = (event) => {
    onSetDiff(parseInt(event.target.value, 10));
  };

  const classes = useStyles();

  return (
    <Paper className={classes.outterPaper}>
      <Paper elevation={3} className={classes.numberPaper}>
        <Grid item xs={12} container justify="center">
          <h1 className={classes.numberH1}>{number}</h1>
        </Grid>
      </Paper>
      <Grid container>
        <Grid item xs={6} sm={6}>
          <Input
            className={classes.diffInput}
            type="number"
            value={diff}
            min="1"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <button className={classes.buttons} onClick={onIncrease}>
            +
          </button>
          <br />
          <button className={classes.buttons} onClick={onDecrease}>
            -
          </button>
        </Grid>
      </Grid>
    </Paper>
  );
}

const useStyles = makeStyles((theme) => ({
  numberPaper: {
    width: "50%",
    height: "50%",
    margin: "0 auto",
    minHeight: "80px",
    marginTop: "10%",
    marginBottom: "20px",
    marginLeft: "auto",
    marginRight: "auto"
  },
  numberH1: {
    textAlign: "center"
  },
  diffInput: {
    alignItems: "center",
    marginTop: "3%",
    width: "80%",
    height: "50%"
  },
  buttons: {
    width: "60%"
  },
  outterPaper: {
    margin: "0 auto",
    width: "90%",
    backgroundColor: "#FFFFF0",
    height: "40%"
  }
}));

export default Counter;
