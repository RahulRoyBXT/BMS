import { auth, db, googleProvider } from "../common/firebase";

import { doc, setDoc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import type { UserType } from "../types/user";

import type { UserUpdateType } from "../common/schemas/userSchema";
import { userUpdateSchema } from "../common/schemas/userSchema";
import {signInWithPopup, signOut } from "firebase/auth";

// Add or Create User

export const createUser = async (
  uid: string,
  userData: UserType
): Promise<void> => {
  try {
    await setDoc(doc(db, "users", uid), userData);
  } catch (error) {
    console.error("Failed to save user:", error);
  }
};


// Login With Google

export const loginWithGoogle = ()=>{
  return signInWithPopup(auth, googleProvider)
}


export const SignoutUser = async ()=>{
  try{
    await signOut(auth)
  } catch(error:unknown){
    if( error instanceof Error) throw new Error(error.message)
    throw new Error('Unable to Logout')
  }
}


// Get User Data

export const getUser = async (uid: string) => {
  const userSnap = await getDoc(doc(db, "users", uid));
  return userSnap.exists() ? userSnap.data() : null;
};

// Update user data

export const updateUser = async (uid: string, updates: UserUpdateType) => {
  const result = userUpdateSchema.safeParse(updates);

  if (!result.success) {
    throw new Error("Invalid User Data");
  }

  await updateDoc(doc(db, "users", uid), result.data);
};

// Delete User

export const deleteUser = async (uid: string): Promise<Error | void> => {
  try {
    await deleteDoc(doc(db, "users", uid));
  } catch (error: unknown) {
    if (error instanceof Error) return error;
    throw new Error('An unexpected Error has occurred!')
  }
};
