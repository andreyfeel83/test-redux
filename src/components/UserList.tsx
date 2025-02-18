import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUsers } from '../store/actions-creators/user';
import { useActions } from '../hooks/useActions';

export const UserList: React.FC = () => {
  const { error, loading, users } = useTypedSelector((state) => state.user);
  const {fetchUsers} = useActions();

  useEffect(() => {
    fetchUsers()
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};
