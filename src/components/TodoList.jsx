import React from 'react'

const TodoList = (props) => {
  const handleClick = () => {
    props.onDelete(props.index);
  };

  return (
    <div>
      <li>{props.text}  <button onClick={handleClick}>X</button> </li>
    </div>
  );
};

export default TodoList;
