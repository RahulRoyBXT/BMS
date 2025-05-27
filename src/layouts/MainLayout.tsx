// Main Layout

import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";



export function MainLayout() {

  return (
    <div className="h-full w-full  max-w-screen-2xl 2xl:mx-auto">
      <Navbar />
      <main className="h-55 md:h-50 xl:h-20 lg:h-40">
        <Outlet />
      </main>

      {/* Could be footer */}
    </div>
  );
}
