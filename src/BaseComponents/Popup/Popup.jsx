import { useState } from "react";
import ModalCloseButton from "../ModalCloseButton";
import StandartButton from "../StandartButton";

function Popup({
    
    
}) {

    const [openModal, setOpenModal]= useState(true);

    return (  
        <div id="popup" className="popup-Background w-full h-auto top-0 bottom-0 left-0 right-0 sm:p-4 xl:pt-48 lg:pt-48 bg-slate-800 bg-opacity-60 fixed xl:flex xl:justify-center lg:flex lg:justify-center sm:block align-middle z-50 overflow-auto touch-auto">
            <div className="popup-Container rounded-xl bg-white shadow-lg flex flex-col p-3 xl:w-1/3 xl:h-56 lg:w-2/4 lg:h-52">
                <div className=" flex justify-end"><ModalCloseButton ClickHandler={""} /></div>
                    
                {/* <div className="title text-center font-bold text-base mb-10"><p>Delivery Code: <span className=" text-rebornit-primary">sdcjhjhbdkjdfkv</span></p></div> */}
                       
                        {/* Body */}
                        
                        
                        
                    </div>
                </div>
            
    );
}

export default Popup;
