import React from 'react';

import App from './App'

class Todo extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: []
        }
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
            let id = App.todo.id + 1;

            if (App.todo.role.length > 0) {
                let copyState = this.state.todo;
                this.setState({
                    todo: [...copyState, App.todo]
                })

                App.todo = {
                    role: '',
                    checked: false,
                    id: id
                };
            }
        })

        const mylistNotComplited = this.state.todo.map(el => {
            return el.checked !== true ? (<tr key={el.id}>
                <td> {el.role} </td>
                <td> <input type="checkbox" value={el.checked} /> </td>
            </tr>) : null
        });

        return (
            <div>
                <h4> Por Completar </h4>
                <table>
                    <thead>
                        <tr>
                            <td> Role </td>
                            <td> Açoes </td>
                        </tr>
                    </thead>
                    <tbody>
                        {mylistNotComplited}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Todo;