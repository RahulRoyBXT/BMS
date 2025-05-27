import { RxCross2 } from "react-icons/rx";
import { FaGoogle } from "react-icons/fa";
import { Form, Link, useActionData, useLocation, useNavigate, useSubmit } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import React, { useEffect, useRef, useState } from "react";
// import { auth } from "../common/firebase";
import { loginWithGoogle } from "../api/FirebaseUserApi";
import { loginSchema, registerSchema } from "../common/schemas/userSchema";

export const AuthCard: React.FC = () => {
    const [showError, setShowError] = useState<boolean>(false)
    const [clientError, setClientError] = useState<string | null>(null)

    const submit = useSubmit()

    const formRef = useRef<HTMLFormElement>(null)

    const url = useLocation();

    const navigate = useNavigate();
    const register = url.pathname === '/auth/register' || url.pathname === '/auth/register/';

    const { user } = useAuth()
    // Check if current path is for registration

    const actionData = useActionData() as { error?: string }

    console.log(actionData)
    useEffect(() => {
        console.log(actionData)
    })

    useEffect(() => {
        if (user) {
            navigate('/')
        }

    }, [user, navigate])

    useEffect(() => {
        if (actionData?.error) {
            setShowError(true)
            const timerId = setTimeout(() => setShowError(false), 2000)

            return () => clearTimeout(timerId)
        }

    }, [actionData])


    const handleCancelBtn = () => {
        navigate('/auth');
    };


    const handleFormValidation = (e: React.FormEvent) => {
        e.preventDefault()

        const form = formRef.current!
        const formdata = new FormData(form)

        const data = {
            email: formdata.get('email') as string,
            password: formdata.get('password') as string,
            confirmPassword: formdata.get('confirmPassword') as string
        }

        const result = register ? registerSchema.safeParse(data)
            : loginSchema.safeParse(data)

        if (!result.success) {
            setClientError(result.error.errors[0].message)
            setShowError(true)
            setTimeout(() => setShowError(false), 2000)
            return

        }

        setClientError(null)


        // Note: after preventing default .submit and .requestSubmit() do not trigger router action
        submit(formdata, {
            method: "post",
        });
    }

    return (
        <Form
            onSubmit={handleFormValidation}
            ref={formRef}
            className={`bg-secondary w-full max-w-[600px] md:w-[80%] lg:w-[60%] xl:w-[50%] h-[90%] md:h-auto shadow-top rounded-2xl overflow-auto mx-auto my-4 flex flex-col justify-self-center self-center`}
        >

            {/* Header */}
            <div className="bg-gradient-to-t from-[#5f30ca] via-[#8835d9] to-[#c03bea] rounded-t-2xl p-4 relative">
                <button onClick={handleCancelBtn} className="absolute top-4 right-4 text-white text-xl cursor-pointer">
                    <RxCross2 />
                </button>
                <div className="text-white text-center">
                    <h1 className="font-exile text-5xl md:text-4xl">BMS</h1>
                    <p className="font-playpen text-sm">By Rahul</p>
                    <p className="text-xs mt-1">Experience the Best ways to Book your Experience.</p>
                </div>
            </div>

            {/* Body */}
            <div className="flex flex-col items-center gap-4 p-4">
                <h2 className="text-2xl md:text-xl font-bold">Please Login To Start</h2>
                <h3 className="text-xl md:text-lg font-bold">The Experience</h3>

                <p className="text-sm text-[#414144] text-center">
                    {register ? (
                        <>Already have an account? <Link to="/auth/login" className="text-blue-600 underline">Login</Link></>
                    ) : (
                        <>Don't have an account? <Link to="/auth/register" className="text-blue-600 underline">Register</Link></>
                    )}
                </p>

                {/* Email Input */}
                <div className="w-full max-w-[400px]">
                    <label className="block font-semibold mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="example@example.com"
                        className="w-full p-2 border border-gray-400 rounded-md"
                        required
                    />
                </div>

                {/* Password Input */}
                <div className="w-full max-w-[400px]">
                    <label className="block font-semibold mb-1">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="********"
                        className="w-full p-2 border border-gray-400 rounded-md"
                        required
                    />
                </div>

                {/* Confirm Password (only if register) */}
                {register && (
                    <div className="w-full max-w-[400px]">
                        <label className="block font-semibold mb-1">Re-enter Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="********"
                            className="w-full p-2 border border-gray-400 rounded-md"
                            required
                        />
                    </div>
                )}
                {clientError && showError && <p className="text-red-600 text-xs font-bold">{clientError}</p>}
                {actionData?.error && showError && <p className="text-red-600 text-xs font-bold">{actionData.error}</p>}

                {/* Buttons */}
                <div className="flex flex-col items-center gap-3 w-full max-w-[400px] mt-4">
                    <button type="submit" className="w-full p-3 bg-black text-white font-semibold rounded-md">
                        Continue
                    </button>
                    <span className="font-bold">OR</span>
                    <button type="button" onClick={loginWithGoogle} className="w-full p-3 bg-black text-white flex items-center justify-center gap-2 rounded-md">
                        <FaGoogle />
                        <span className="font-semibold text-sm">Connect with Google</span>
                    </button>
                </div>
            </div>
        </Form>
    );
};
