import React, { useState } from "react";
import PropTypes from "prop-types";

export const TodoList = props => {
	const { todos, setTodos } = props;
	const makeList = () => {
		return todos.map((item, index) => (
			<li key={index}>
				{item.label} <span onClick={e => handleDelete(item)}>X</span>
			</li>
		));
	};
	const handleDelete = todoItem => {
		let newArray = todos.filter(item => item !== todoItem); // creating a  anew clone of the todos array and filetring out the ones thatll be deleted
		setTodos(newArray); //replace the todo list with new todo list
	};
	return <ul>{makeList()}</ul>;
};

TodoList.propTypes = {
	todos: PropTypes.array,
	setTodos: PropTypes.func
};

// arrow func notation
//react hooks
//array functions (maping concat fitler)
//review comments
