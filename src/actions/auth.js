import Swal from "sweetalert2";
import { firebase } from "../firebase/firebase-config";
import { types } from "../types/types";
import { startLoading,finishLoading } from "./ui";

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch( startLoading() );
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then( ({ user }) => {

        dispatch(
          login(user.uid, user.displayName)
        );
        dispatch( finishLoading());

      })
      .catch(err => {
        console.log(err);
        dispatch( finishLoading());
        Swal.fire('Error',err.message,'error');
      });
  }
}

export const startLogout = () => {
  return async( dispatch ) => {
    await firebase.auth().signOut();

    dispatch( logout() );
  }
}

export const logout = () => ({
  type: types.logout
})

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName
    }
  }
}
