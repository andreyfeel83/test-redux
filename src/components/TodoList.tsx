import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

export const TodoList: React.FC = () => {
  const { page, error, loading, limit, todos } = useTypedSelector(
    (state) => state.todo
  );
  const { fetchTosos,setTodoPage } = useActions();
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTosos(page, limit);
  }, [page]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id} - {todo.title}
        </div>
      ))}
      <div style={{ display: 'flex' }}>
        {pages.map((p) => (
            <div
                onClick={() => setTodoPage(p)}
            style={{
              border: p === page ? '2px solid red' : '1px solid gray',
              padding: '4px',
                margin: '2px',
              cursor:'pointer'
            }}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};
