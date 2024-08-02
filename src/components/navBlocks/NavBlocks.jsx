import { IoCaretUpOutline } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";

export const NavBlocks = ({item, revenue, indicator, icon}) => {
    return (
        <div className="p-4 w-48 bg-gray-800 rounded-lg shadow-md">
            {icon}
            <h2 className="text-sm mt-1">{item}</h2>
            <div className="flex justify-between mt-1">
                <p className="text-2xl font-bold">{revenue}</p>
                {indicator == "positive" 
                    ? <span className="flex text-green-600"><IoCaretUpOutline className="mt-1"/> 3% </span>
                    : <span className="flex text-red-600"><FaCaretDown className="mt-1"/> 3% </span>
                }
                
            </div>
        </div>
    )
}