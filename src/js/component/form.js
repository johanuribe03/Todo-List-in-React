import React, { useState } from "react";
import PropTypes from "prop-types";

export const Form = props => {
	const { todos, setTodos } = props; //obj destructuring
	const [text, setText] = useState(""); // where we are storing it temporarily
	const handleSubmit = e => {
		e.preventDefault(); //stop the func from submiting
		setTodos(todos.concat([{ label: text, done: false }])); // call the setter and pass a value of a new array
		setText("");
	};
	return (
		<form onSubmit={e => handleSubmit(e)}>
			{/*pass event into the handler */}
			<input
				type="text"
				value={text}
				onChange={e => setText(e.target.value)}
			/>{" "}
			{/*storing the value as exchange */}
			<input type="submit" value="Add to do" />
		</form>
	);
};

Form.propTypes = {
	todos: PropTypes.array,
	setTodos: PropTypes.func
};
