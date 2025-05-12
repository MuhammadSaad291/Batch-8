import React, { useState } from 'react';
import Input from '../../component/input/Input';
import Table from '../../component/table/Table';

export default function Home() {
  const [editData, setEditData] = useState(null);

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto' }}>
      <h2>Redux Todo App</h2>
      <Input editData={editData} setEditData={setEditData} />
      <Table setEditData={setEditData} />
    </div>
  );
}
