import React, {useState} from "react";
import '../Dropdown/Dropdown.css';


function Dropdown({ selected, setSelected, extraCss={} }){

    const [isActive, setIsActive] = useState(false);
    const options =["In Transit", "Pickedup", "Delivered"];
    return(
        <div className="dropdown w-full h-10  my-auto cursor-pointer select-none">
            <div className={`dropdown-btn px-4 py-2 flex justify-between border-1 border-black border-opacity-70 rounded-full cursor-pointer ${extraCss} `} 
            onClick={(e) => 
            setIsActive(!isActive)}>
                {selected? `${selected}`:"Order Placed"} 
                <i class="fa fa-caret-down" aria-hidden="true"></i>
            </div>
            {isActive && (
                    <div className="dropdown-content bg-white absolute left-0 top-full p-3 bd-white shadow-xl w-11/12">
                        {options.map((option) =>(
                            <div 
                                onClick={(e) => {
                                setSelected(option);
                                setIsActive(false);
                                }}  
                                className="drodown-item p-2 cursor-pointer text-black  hover:bg-gray-200 sm:text-sm">
                                    {option}
                            </div>
                        ))}
                
                    </div>
                )}
            
    </div>
    );
}

export default Dropdown 
