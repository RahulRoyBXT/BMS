import { useNavigate } from "react-router-dom"

export const ProfileIcon: React.FC = () => {
    const navbar = useNavigate()
    return (
        <div className="max-lg:hidden flex flex-col justify-center items-center leading-1" onClick={()=> navbar('/')}>
            <span className="font-exile text-4xl">BMS </span>
            <span className="font-playpen xl:text-xs">By Rahul </span>
        </div>
    )
}