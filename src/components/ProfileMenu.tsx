// components/ProfileMenu.tsx

import React, { useState, useRef, useEffect } from "react";
import { CiUser } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { SignoutUser } from "../api/FirebaseUserApi";

export const ProfileMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const {user} = useAuth();

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Logout FN
  const handleLogoutBtn = async ():Promise<void> =>{
      setOpen(false)
    try{
        await SignoutUser()
        navigate('/auth')
    } catch (error:unknown){
        if(error instanceof Error) throw new Error(error.message)
        throw new Error('Unable to Logout....')
    }
  }

  return (
    <div className="relative" ref={menuRef}>
      <div
        className="h-[3rem] w-[3rem] bg-black/10 rounded-full flex justify-center items-center cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <CiUser className="text-2xl text-green-500" />
      </div>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg z-50 p-2 border">
          <div className="px-4 py-2 text-sm text-gray-600 border-b">
            {user?.email || "Guest"}
          </div>
          <button
            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
            onClick={() => {
              navigate("/profile");
              setOpen(false);
            }}
          >
            Profile Settings
          </button>
          <button
            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
            onClick={() => {
              navigate("/dashboard");
              setOpen(false);
            }}
          >
            Dashboard
          </button>
          <button
            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
            onClick={handleLogoutBtn}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
