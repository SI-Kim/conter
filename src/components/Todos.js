import React, { useState } from "react";
import { Paper, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const TodoItem = React.memo(function TodoItem({ todo, onToggle }) {
  return (
    <li
      style={{
        textDecoration: todo.done ? "line-through" : "none",
        fontFamily: "rounded typeface"
      }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  );
});

const TodoList = React.memo(function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todos.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
});

function Todos({ todos, onCreate, onToggle }) {
  const classes = useStyles();
  const [text, setText] = useState("");
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(text);
    setText("");
  };

  return (
    <div>
      <Paper className={classes.coverPaper}>
        <form onSubmit={onSubmit}>
          <TextField
            className={classes.textForm}
            label="To do"
            variant="filled"
            value={text}
            placehold일r=" 할 일을 입력하세요.."
            onChange={onChange}
          />
          <Button className={classes.insertBtn} variant="contained" type="submit">
            등록
          </Button>
        </form>
      </Paper>
      {(todos.length != 0) ?
        <Paper className={classes.todoItemPaper}>
          <TodoList todos={todos} onToggle={onToggle} />
        </Paper>
        : null
      }
      
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  coverPaper: {
    margin: "0 auto",
    marginLeft: "5%",
    marginRight: "5%",
    backgroundColor: "#F0FFFF",
    marginTop: "5%",
    padding: "3%"
  },
  textForm: {
    width: "60%",
    marginRight: "5%",
    height: "30%"
  },
  insertBtn: {
    width: "10%",
    marginTop: "2%"
  },
  todoItemPaper: {
    margin: "0 auto",
    marginLeft: "5%",
    marginRight: "5%",
    backgroundColor: "#F0FFFF",
    marginTop: "3%",
    padding: "1%",
    textAlign: "left"
  }
}));

export default Todos;
