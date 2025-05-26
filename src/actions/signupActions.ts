import { redirect, type ActionFunctionArgs } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../common/firebase";
import { createUser } from "../api/FirebaseUserApi";

type RegisterFormUserType = {
  email: string;
  password: string;
};


export async function SignupAction({ request }: ActionFunctionArgs) {
  console.log("That Request: ", request);
  const formData = await request.formData();

  console.log(formData)

  const userData: RegisterFormUserType = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  const email = userData.email;
  const password = userData.password;

  console.log(email, password)

  try {
    // Sign up in FIrebase Auth
    const userCred = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("This is returned after user created:", userCred.user.email);
    const user = userCred.user;

    // Saving to firebase store

    await createUser(user.uid, {
      uid: user.uid,
      email: user.email!,
      name: "",
      photo: user.photoURL || "",
      online: true,
      createdAt: Date.now(),
    });

    return redirect('/')

  } catch (error: unknown) {
    if (error instanceof Error) throw new Error(error.message);
    throw new Error("Something Went Wrong");
  }
}
