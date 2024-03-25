import { Dispatch } from 'react';
import { UserAction, UserActionsType } from '../../types/user';
import axios from 'axios';

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionsType.FETCH_USERS });
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      dispatch({
        type: UserActionsType.FETCH_USERS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: UserActionsType.FETCH_USERS_ERROR,
        payload: 'An error has occurred',
      });
    }
  };
};
