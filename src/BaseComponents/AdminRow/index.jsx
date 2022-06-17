import React,{useState} from "react";
import Dropdown from "../Dropdown";
import StandartButton from "../StandartButton";
import '../AdminRow/Admin.css';
import DeliveryModal from "../DeliveryModal";


function AdminRow({
    delicery_code="chbXASXSVgva545s",
    name= "Gotabhaya Rajapakse",
    contact="07--------",
    status="Order Placed",
    css_for_dropdown={},
    delivery_fee_status=false,
    fee="fee",
    seemore_button_click
}){

    const [selected, setSelected]=useState("");

    function openModel(){
        seemore_button_click(true);
    }

    return(
        <div id="admin-row" >
            
            {/* class container removed */}
            <div className="delivery-card">
                <div className="delivery-card-content row border-b-2 pb-2 mt-4 border-rebornit-primary text-center border-opacity-80">
               
                    {/* code */}
                        <div className="delivery-card-content-code col-sm-2 pt-2">
                            <span className="delivery-card-content-code-mobile font-bold underline">Delivery Code:</span>
                            <span className="delivery-card-content-code-mobile-value font-bold text-sm">{` ${delicery_code}`}</span>
                        </div>
            
                    {/* Name */}
                        <div className="delivery-card-content-name col-sm-2 pt-2">
                        <span className="delivery-card-content-name-mobile font-bold underline">Reseiver:</span>
                        <span className="delivery-card-content-name-mobile-value font-bold text-sm">{` ${name}`}</span>
                        </div>
            
                    {/* Contact Number */}
                        <div className="delivery-card-content-contact col-sm-1 pt-2">
                        <span className="delivery-card-content-contact-mobile font-bold underline ">Contact Number:</span>
                        <span className="delivery-card-content-contact-mobile-value font-bold text-sm">{` ${contact}`}</span>
                        </div>

                    {/* Delivery Fee */}
                        <div className="delivery-card-content-contact col-sm-2 pt-1">
                        <span className="delivery-card-content-contact-mobile font-bold underline ">Delivery Fee:</span>
                        <span className="delivery-card-content-contact-mobile-value"><StandartButton children={delivery_fee_status? "700" : "+ Add Fee"} extraTailwindClasses={"p-2 h-8 bg-gray-500 font-bold shadow-xl xl:w-1/3 lg:w-1/2 text-xs"} clickHandler={""} /></span>
                        </div>
            
                    {/* Status */}
                        <div className="delivery-card-content-buttons col-sm-5 flex justify-evenly">
                            <div className="col-sm-3 delivery-card-content-buttons-dropdown">
                                <Dropdown  selected={selected} setSelected={setSelected} extraCss={`shadow-xl lg:text-xs xl:text-sm ${css_for_dropdown}`}/>
                            </div>
                    
                            <div className="col-sm-3 delivery-card-content-buttons-seemore">
                                <StandartButton children={"more details >>"} extraTailwindClasses={"p-2 bg-see_more_green duration-700 hover:translate-x-2 font-bold shadow-xl lg:text-xs xl:text-sm xl:w-full lg:w-full"} clickHandler={openModel}/>
                            </div>   
                        </div>
                </div>
            </div>
        </div>
    );
}

export default AdminRow;