import React, { useState } from "react";
import { Form } from "./form";
import { TodoList } from "./todoList";

export const Home = () => {
	const [todos, setTodos] = useState([
		{ label: "here is my Todo", done: false }
	]); // array of objects , initial state, (initial value)

	return (
		<div>
			<Form todos={todos} setTodos={setTodos} /> {/*props*/}
			<TodoList todos={todos} setTodos={setTodos} />
		</div>
	);
};
