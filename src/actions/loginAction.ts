import { signInWithEmailAndPassword } from "firebase/auth"
import { redirect, type ActionFunctionArgs } from "react-router-dom"
import { auth } from "../common/firebase"

export const loginAction = async ({request}: ActionFunctionArgs):Promise<Response>=>{
    const formData = await request.formData()
    
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    try{
        await signInWithEmailAndPassword(auth, email, password)
        return redirect('/')
    } catch (error:unknown){
        if(error instanceof Error ) throw new Error(error.message)
        throw new Error('Login Failed')
    }
}