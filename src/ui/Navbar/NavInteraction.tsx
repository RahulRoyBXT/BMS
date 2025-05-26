import { FaWandMagicSparkles } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";
import { MdOutlineEvent } from "react-icons/md";
import { ImNewspaper } from "react-icons/im";

type InteractionBarProps = {hidden : string}


export const NavInteraction: React.FC<InteractionBarProps> = ({hidden}) => {

    return (
        <div className={`w-auto grid grid-cols-4 gap-4 md:justify-self-center md:self-center ${hidden}`}>
            <div className="h-full md-auto rounded-2xl md:rounded-xl text-[#3c2d7b] bg-[#eae5ff] box-border flex justify-center items-center flex-col gap-1 p-2">
                <FaWandMagicSparkles className="text-xl md:hidden" />
                <p className="text-xs md:text-lg">For You</p>
            </div>

            <div className="h-full w-auto rounded-xl box-border flex justify-center items-center flex-col gap-1 p-2">
                <BiCategory className="text-xl md:hidden" />
                <p className="text-xs md:text-lg">Movies</p>
            </div>
            <div className="h-full w-auto rounded-xl box-border flex justify-center items-center flex-col gap-1 p-2">
                <MdOutlineEvent className="text-xl md:hidden" />
                <p className="text-xs md:text-lg">Events</p>
            </div>
            <div className="h-full w-auto rounded-xl box-border flex justify-center items-center flex-col gap-1 p-2">
                <ImNewspaper className="text-xl md:hidden" />
                <p className="text-xs md:text-lg">News</p>
            </div>
        </div>
    )

}