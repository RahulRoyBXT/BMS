// Main Layout

import { Outlet, useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";


export function MainLayout() {
  const {user, loading} = useAuth()
  const navigate = useNavigate()

  useEffect(()=>{
    if(!user){
      navigate('/auth')
    }
  },[user, navigate])

  return (
    <div className="h-full w-full  max-w-screen-2xl 2xl:mx-auto">
      <Navbar />
      <main className="h-55 md:h-50 xl:h-20 lg:h-40">
        {loading && <p> loading.... </p>}
        <Outlet />
      </main>

      {/* Could be footer */}
    </div>
  );
}
