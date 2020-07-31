import React, { useState } from "react";
import { Form } from "./form";
import { TodoList } from "./todoList";

export const Home = () => {
	const [todos, setTodos] = useState([
		{ label: "here is my Todo", done: false }
	]);

	return (
		<div>
			<Form todos={todos} setTodos={setTodos} />
			<TodoList todos={todos} setTodos={setTodos} />
		</div>
	);
};
