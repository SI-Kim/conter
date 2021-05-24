import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Paper, Grid } from "@material-ui/core";

function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
  const onChange = (event) => {
    onSetDiff(parseInt(event.target.value, 10));
  };

  const classes = useStyles();

  return (
    <div>
      <Paper elevation={3} className={classes.numberPaper}>
        <Grid item xs={12} container justify="center">
          <h1 className={classes.numberH1}>{number}</h1>
        </Grid>
      </Paper>
      <Grid>
        <span>
          <input
            className={classes.diffInput}
            type="number"
            value={diff}
            min="1"
            onChange={onChange}
          />
        </span>
        <span>
          <button className={classes.buttons} onClick={onIncrease}>
            +
          </button>
        </span>
        <button className={classes.buttons} onClick={onDecrease}>
          -
        </button>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  numberPaper: {
    width: "50%",
    height: "20vh",
    margin: "0 auto",
    minHeight: "80px",
    marginTop: "20px",
    marginBottom: "20px",
    marginLeft: "auto",
    marginRight: "auto"
  },
  numberH1: {
    textAlign: "center"
  },
  diffInput: {
    alignItems: "center"
  },
  buttons: {}
}));

export default Counter;
