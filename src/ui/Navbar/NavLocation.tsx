import type React from "react"
import { IoLocationOutline } from "react-icons/io5"

export const NavLocation:React.FC = ()=> {

    return (
        <span className="flex justify-center items-center gap-2" tabIndex={1}>
            <IoLocationOutline className="text-3xl text-green-500 lg:text-2xl lg:font-black" />
            <span><span className="text-lg font-bold">Coochbehar</span> <br />
                <span className="text-sm xs:text-xs">Bakshirhat</span>
            </span>
        </span>
    )
}
