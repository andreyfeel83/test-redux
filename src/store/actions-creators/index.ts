import * as UserActionCreator from './user'
import * as TodoActionCreator from './todo'

 const ActionCreaters = {
    ...UserActionCreator,
    ...TodoActionCreator
}

export default ActionCreaters