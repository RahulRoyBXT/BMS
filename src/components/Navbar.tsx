import React from "react";
import { NavInteraction } from "../ui/Navbar/NavInteraction";
import { NavLocation } from "../ui/Navbar/NavLocation";
import { ProfileIcon } from "../ui/Navbar/ProfileIcon";
import { SearchBar } from "../ui/Navbar/SearchBar";
import { ProfileMenu } from "./ProfileMenu";


export const Navbar: React.FC = () => {


    return (
        <div className="h-55 md:h-50 xl:h-20 lg:h-40 w-full bg-secondary drop-shadow-lg shadow-amber-black p-2 pt-4 flex flex-col gap-2 lg:gap-4 xl:justify-center">


            <div className="h-[30%] lg:h-[40%] w-full flex justify-between items-center">


                <div className="flex justify-center items-center gap-3 lg:p-3 xl:gap-1">
                    <ProfileIcon />
                    <span className="max-xl:hidden border-r-2 p-2 border-[#e0e0e0] h-[40px]"></span>
                    <NavLocation />
                </div>

                <NavInteraction hidden='max-lg:hidden' />

                <div className="p-2 xl:flex xl:gap-4 xl:items-center">
                    <SearchBar hidden="max-xl:hidden" />

                    <ProfileMenu />
                </div>
            </div>

            <SearchBar hidden='min-xl:hidden' />

            <NavInteraction hidden='min-lg:hidden' />
        </div>
    )
}