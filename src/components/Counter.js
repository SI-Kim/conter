import React from "react";
import { makeStyles } from '@material-ui/styles';
import {
  Paper,
  Grid,
} from '@material-ui/core';

function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {

  const onChange = (event) => {
    onSetDiff(parseInt(event.target.value, 10));
  };

  const classes = useStyles();

  return (
    <div>
      <Paper elevation={3} className={classes.numberPaper}>
        <h1 className={classes.numberH1}>{number}</h1>
      </Paper>
      <Grid>
        <span>
          <input className={classes.diffInput} type="number" value={diff} min="1" onChange={onChange} />
        </span>
        <span>
          <button className={classes.buttons} onClick={onIncrease}>+</button>
        </span>
        <button className={classes.buttons} onClick={onDecrease}>-</button>


      </Grid>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  numberPaper: {
    width: "40%",
    height: "80%",
    minHeight: "80px",
    marginTop: "20px",
    marginBottom: "20px",
    marginLeft: "20px",
    margin: "0 auto"
  },
  numberH1: {
    textAlign: "center",

  },
  diffInput: {
    alignItems: "center"
  },
  buttons: {

  },
}));

export default Counter;
