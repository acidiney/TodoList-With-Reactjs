import React from 'react';

let newTodo = '';

const fillNewTodo = (e)  =>{
    newTodo = e.target.value
}

const AddTodo = ({ getTodo }) => {

    const putTodo = () => {
        getTodo(newTodo)
    }

    return (
        <div>
            <input type="text" onChange={fillNewTodo} placeholder="Nova tarefa" />
            <button onClick={putTodo}> Adicionar Tarefa</button>
        </div>
    );
};

export default AddTodo;
