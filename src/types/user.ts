export interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
}

export enum UserActionsType {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface FetchUserAction {
  type: UserActionsType.FETCH_USERS;
}
interface FetchUserSuccessAction {
  type: UserActionsType.FETCH_USERS_SUCCESS;
  payload: any[];
}
interface FetchUserErrorAction {
  type: UserActionsType.FETCH_USERS_ERROR;
  payload: string;
}

export type UserAction =
  | FetchUserAction
  | FetchUserSuccessAction
  | FetchUserErrorAction;
