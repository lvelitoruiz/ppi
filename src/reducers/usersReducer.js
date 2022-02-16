import { types } from "../types/types";

const initialState = {
  users: [],
}

export const usersReducer = ( state = initialState, action ) => {
  
  switch (action.type) {
    
    case types.usersLoad:
      return {
        ...state,
        users: [...action.payload]
      }

    case types.usersDelete:
      return {
        ...state,
        users: state.users.filter( user => user.id !== action.payload )
      }
    
    case types.usersLogoutCleaning:
      return {
        ...state,
        users: []
      }
    
    case types.usersSearch:
      return {
        ...state,
        users: state.users.filter( user => JSON.stringify(user).toLocaleLowerCase().includes( action.payload ) )
      }

    default:
      return state;
  }

}
