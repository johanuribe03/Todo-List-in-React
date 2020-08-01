import React, { useState } from "react";
import PropTypes from "prop-types";

export const Form = props => {
	const { todos, setTodos } = props; //obj destructuring, 9to access it
	const [text, setText] = useState(""); // where we are storing it temporarily(hook) initial vaalue is empty ""
	const handleSubmit = e => {
		/*defining func*/

		e.preventDefault(); //stop the func from submiting, prevent is to put conditions
		// setTodos([{ label: text, done: false }]); //this way wont concatenate
		// setTodos(todos.concat([{ label: text, done: false }])); // call the setter and pass a value of a new array.
		setTodos([...todos, { label: text, done: false }]); //...todos (spread operator) is doing a concat
		setText(""); //with concat im adding, not deleting, adding sth new
	}; //handler is a function, allow to handle the validation for the input. Best way to hangle form
	return (
		<form onSubmit={e => handleSubmit(e)}>
			{" "}
			{/*calling the func*/}
			{/*pass event into the handler */}
			<input
				type="text"
				value={text}
				onChange={e => setText(e.target.value)} //every time we type we change the state.(hook in ln 6) "e" or event is a standard parameter
			/>{" "}
			{/*storing the value as exchange */}
			<input type="submit" value="Add to do" />{" "}
			{/*button type submit(btn), this trigering ln 13*/}
		</form>
	);
};

Form.propTypes = {
	todos: PropTypes.array,
	setTodos: PropTypes.func
};
