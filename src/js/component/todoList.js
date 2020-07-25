import React from "react";


//create your first component
export class TodoList extends React.Component() {
    constructor (){
        super();
        this.state ={
            todoList: [
                {
                    done: false, title: "wake up", id: Math.random()*10},
                    {
                        done: false, title: "wake up 2", id: Math.random()*10},
                        {
                            done: false, title: "wake up 3", id: Math.random()*10},}
                    }
                }
            ], taskInput: ""
        };
    }
    handleFormSubmit(e){
        e.preventDefault();
        this.setState({
            todoList: this.state.todoList.concat([{
                title: this.state.taskInput,
                done: false, 
                id: Math.random()*10},
            }
        ])
        });
        return false;
    }
}

export default TodoList;