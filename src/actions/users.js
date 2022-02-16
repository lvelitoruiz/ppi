import { loadUsers } from "../helpers/loadUsers";
import { types } from "../types/types";
import { db } from "../firebase/firebase-config";

export const startNewUser = ( user ) => {
  return async( dispatch,getState ) => {
    const { uid } = getState().auth;

    await db.collection(`${ uid }/ppi/users`).add( user );

    const users = await loadUsers( uid );
    dispatch( setUsers( users ) );
  }
}

export const startLoadingUsers = ( uid ) => {

  return async ( dispatch ) => {
    const users = await loadUsers( uid );
    dispatch( setUsers( users ) );
  }

}

export const reLoadingUsers = ( uid,term ) => {

  return async ( dispatch ) => {
    const users = await loadUsers( uid );
    const lowerTerm = term.toLowerCase();
    dispatch( setUsers( users ) );
    dispatch( searchUser( lowerTerm ) );
  }

}

export const startDeleting = ( id ) => {
  return async ( dispatch,getState ) => {

    const uid = getState().auth.uid;
    await db.doc(`${ uid }/ppi/users/${ id }`).delete();

    dispatch( deleteUser( id ) );
  }
}

export const setUsers = ( users ) => {

  return {
    type: types.usersLoad,
    payload: users
  }
};

export const deleteUser = ( id ) => ({
  type: types.usersDelete,
  payload: id
});

export const searchUser = ( term ) => ({
  type: types.usersSearch,
  payload: term
})