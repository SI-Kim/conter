import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Paper, Grid, Input, Button } from "@material-ui/core";

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
            variant="filled"
            value={diff}
            min="1"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <Button
            style={{ marginBottom: "5%" }}
            variant="contained"
            className={classes.buttons}
            onClick={onIncrease}
          >
            +
          </Button>
          <br />
          <Button
            variant="contained"
            className={classes.buttons}
            onClick={onDecrease}
          >
            -
          </Button>
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
    width: "50%",
    height: "37%",
    backgroundColor: "#FFEBCD"
  },
  outterPaper: {
    margin: "0 auto",
    width: "90%",
    backgroundColor: "#FFFFF0",
    height: "40%",
    marginTop: "5%",
    marginBottom: "5%",
    paddingTop: "5%",
    minHeight: "232px",
  }
}));

export default Counter;
