import React, { useState } from 'react'
import TodoList from './TodoList';

const Todo = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (e) => {
    setInput(e.target.value)
  };
  
  const list = () => {
    setItems((old) => {
      return [...old, input];
    })
    setInput("")
  };

  const deleteItem = (index) => {
    setItems((old) => {
      return old.filter((val, idx) => {
        return idx !== index;
      });
    });
  };

  return (
    <div>
      <h1>Todo</h1>
      <div>
        <input type='text' placeholder='Add Item' value={input} onChange={itemEvent}/>
        <button onClick={list}>Add</button>
        <ol>
          {items.map((val, idx) => {
            return <TodoList key={idx} text={val} index={idx} onDelete={deleteItem}/>
          })}
        </ol>
      </div>
    </div>
  );
};

export default Todo;
