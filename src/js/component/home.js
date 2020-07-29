import React, { useState } from "react";
import { Form } from "./form";
import { TodoList } from "./todoList";

export const Home = () => {
	const [todos, setTodos] = useState([]);

	return (
		<div>
			<Form />
			<TodoList />
		</div>
	);
};
