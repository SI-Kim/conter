import React, { useState } from "react";
import { Paper, Input, Button } from "@material-ui/core";

const TodoItem = React.memo(function TodoItem({ todo, onToggle }) {
  return (
    <li
      style={{ textDecoration: todo.done ? "line-through" : "none" }}
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
  const [text, setText] = useState("");
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(text);
    setText("");
  };

  return (
    <Paper>
      <form onSubmit={onSubmit}>
        <Input
          variant="outlined"
          value={text}
          placeholder="알 일을 입력하세요.."
          onChange={onChange}
        />
        <Button variant="contained" type="submit">
          등록
        </Button>
      </form>
      <TodoList todos={todos} onToggle={onToggle} />
    </Paper>
  );
}

export default Todos;
