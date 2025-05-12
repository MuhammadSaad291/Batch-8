import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../../store/slices/todoSlice';

export default function Input({ editData, setEditData }) {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (editData) setText(editData.text);
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    if (editData) {
      dispatch(updateTodo({ id: editData.id, text }));
      setEditData(null);
    } else {
      dispatch(addTodo(text));
    }

    setText('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />
      <button type="submit">{editData ? 'Update' : 'Add'}</button>
    </form>
  );
}
