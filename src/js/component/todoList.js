import React, { useState } from "react";
import PropTypes from "prop-types";

export const TodoList = props => {
	const { todos, setTodos } = props; // data from home
	const makeList = () => {
		return todos.map((
			item,
			index //map is a loop, a for loop the dif is that is returning html (similar to for eaxh) 1st para: obj,2nd para optional but is recomended to use it
		) => (
			<li key={index}>
				{item.label} <span onClick={e => handleDelete(item)}>X</span>{" "}
				{/**/}
			</li>
		));
	};
	const handleDelete = todoItem => {
		let newArray = todos.filter(item => item !== todoItem); // give me all the items that are not todo item.  creating a  anew clone of the todos array and filetring out the ones thatll be deleted
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
