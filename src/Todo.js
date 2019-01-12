import React from 'react';

import App from './App'

class Todo extends React.Component {
    state = {
        todo: [

        ]
    }

    addTodo(newTodo) {
        this.setState({
            todo: newTodo
        })
    }

    removeTodo(e) {

    }

    render() {
        window.addEventListener('click', () => {
            if (App.todo.length > 0) {
                let copyState = this.state.todo;
                this.setState({
                    todo: [...copyState, App.todo]
                })
                App.todo = "";
            }
        })

        const mylist = this.state.todo.map (el => (
            <li key={Math.random}>{el}</li>
        ));
        return (
            <ul>
                {mylist}
            </ul>
        );
    }
}

export default Todo;