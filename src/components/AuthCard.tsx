import { RxCross2 } from "react-icons/rx";
import { FaGoogle } from "react-icons/fa";
import { Form, Link, useActionData, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";
// import { auth } from "../common/firebase";
import { loginWithGoogle } from "../api/FirebaseUserApi";

export const AuthCard: React.FC = () => {
    const url = useLocation();
    const navigate = useNavigate();
    const register = url.pathname !== '/auth/login';

    const { user } = useAuth()

    console.log('current user', user)

    const actionData = useActionData()

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user, navigate])


    const handleCancelBtn = () => {
        navigate('/auth');
    };

    return (
        <Form method="post" className={`bg-secondary w-full max-w-[600px] md:w-[80%] lg:w-[60%] xl:w-[50%] h-[90%] md:h-auto shadow-top rounded-2xl overflow-auto mx-auto my-4 flex flex-col justify-self-center self-center`}>

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
                            placeholder="********"
                            className="w-full p-2 border border-gray-400 rounded-md"
                            required
                        />
                    </div>
                )}

                {actionData?.error && <p className="text-red font-bold">{actionData.error}</p>}

                {/* Buttons */}
                <div className="flex flex-col items-center gap-3 w-full max-w-[400px] mt-4">
                    <button type="submit" className="w-full p-3 bg-black text-white font-semibold rounded-md">
                        Continue
                    </button>
                    <span className="font-bold">OR</span>
                    <button onClick={loginWithGoogle} className="w-full p-3 bg-black text-white flex items-center justify-center gap-2 rounded-md">
                        <FaGoogle />
                        <span className="font-semibold text-sm">Connect with Google</span>
                    </button>
                </div>
            </div>
        </Form>
    );
};
