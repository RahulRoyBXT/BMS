import { Link, Outlet, useLocation } from "react-router-dom";

export function AuthLayout() {
    const url = useLocation()
    const active: boolean = url.pathname === '/auth' || url.pathname === '/auth/';

    return (

        <div className="min-h-screen w-full flex items-end bg-gradient-to-t from-[#5f30ca] via-[#8835d9] to-[#c03bea]">
            {active && (
                <div className="absolute inset-0 flex flex-col justify-center items-center gap-6 text-white p-4 z-10 bg-opacity-70">
                    {/* Heading */}
                    <div className="text-center max-w-[800px]">
                        <p className="text-3xl md:text-4xl lg:text-5xl font-black font-playpen leading-tight">
                            Your Entertainment, One Click Away.
                        </p>
                        <p className="text-lg md:text-xl mt-2">
                            Login to discover shows, seats, and seamless booking.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[400px] mt-4">
                        <Link
                            to="/auth/login"
                            className="w-full bg-green-400 text-black font-semibold text-lg md:text-xl py-3 rounded-xl text-center shadow-lg hover:bg-green-500 transition-all"
                        >
                            Login
                        </Link>
                        <Link
                            to="/auth/register"
                            className="w-full bg-pink-500 text-black font-semibold text-lg md:text-xl py-3 rounded-xl text-center shadow-lg hover:bg-pink-600 transition-all"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            )}

            <Outlet />
        </div>

    )
}