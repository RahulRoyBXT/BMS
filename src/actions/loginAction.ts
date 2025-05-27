import { signInWithEmailAndPassword } from "firebase/auth";
import { redirect, type ActionFunctionArgs } from "react-router-dom";
import { auth } from "../common/firebase";

export const loginAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    return redirect("/");
  } catch (error: unknown) {
    console.log(error)
    let message = "Login Failed. Please try again.";

    if (typeof error === "object" && error !== null && "code" in error) {
      const err = error as { code: string };

      switch (err.code) {
        case "auth/user-not-found":
          message = "No user found with this Email.";
          break;
        case "auth/wrong-password":
          message = "Invalid Credentials";
          break;

        case "auth/invalid-email":
          message = "Invalid Credentials";
          break;
        case 'auth/invalid-credential':
          message = 'Invalid Credentials'
          break
        default:
          message = "Something went wrong.";
      }
    }
    return { error: message };
  }
};
