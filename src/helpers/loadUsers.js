import { db } from "../firebase/firebase-config";


export const loadUsers = async ( uid ) => {

  const notesSnap = await db.collection(`${uid}/ppi/users`).get();

  const users = [];

  notesSnap.forEach( snapChildren => {
    users.push({
      id: snapChildren.id,
      ...snapChildren.data()
    });
  })

  return users;

} 