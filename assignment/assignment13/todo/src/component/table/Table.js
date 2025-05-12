import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../../store/slices/todoSlice';

export default function Table({ setEditData }) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>#</th>
          <th>Todo</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, idx) => (
          <tr key={todo.id}>
            <td>{idx + 1}</td>
            <td>{todo.text}</td>
            <td>
              <button onClick={() => setEditData(todo)}>Edit</button>
              <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
