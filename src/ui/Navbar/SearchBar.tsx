import { CiSearch } from "react-icons/ci"

type SearchBarProps = { hidden: string };

export const SearchBar: React.FC<SearchBarProps> = ({ hidden }) => {
    return (
        <div className={`h-[30%] p-1 lg:h-[40%] xl:w-[20dvw] ${hidden}`}>
            <div className="bg-white h-full w-full rounded-xl border-2 border-[#e0e0e0] flex items-center p-2 box-border gap-4">
                <CiSearch className="font-black text-2xl text-green-500" />
                <p className="text-[#93939b]"> Search for Events & Movies</p>
            </div>
        </div>
    )
}