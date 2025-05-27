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
    let message = "Signup failed. Please try again.";

    if (typeof error === "object" && error !== null && "code" in error) {
      const err = error as { code: string };

      switch (err.code) {
        case "auth/email-already-in-use":
          message = "Email is already in use.";
          break;
        case "auth/weak-password":
          message = "Password should be at least 6 characters.";
          break;
        case "auth/invalid-email":
          message = "Invalid email address.";
          break;
      }
    }
    return {error : message}
  }
}
