import RoundedInput from "../../BaseComponents/RoundedInput";
import StandartButton from "../../BaseComponents/StandartButton";
import SearchableDropDown from "../../BaseComponents/SearchableDropdown";
import Dropdown from "../../BaseComponents/Dropdown";
import { useState } from "react";
import AdminRow from "../../BaseComponents/AdminRow";
import '../LandingPage/Landing.css';
import Modal from "../../BaseComponents/Modal";
import ModalCloseButton from "../../BaseComponents/ModalCloseButton";

export const Landing=()=>{

    const [selected, setSelected]=useState("");
    const [openModal, setOpenModal]=useState(false);
    const [immediateCourier, setImmediateCourier]=useState(true);
    const [popupContent, setPopupContent]= useState([]);
    const changeContent = () => {
        // setPopupContent([delivery]);
    }

    function closeModal(){
        setOpenModal(false);
    }

    function openTheModel(){
        setOpenModal(true);
    }
    
    return(
        <div id="landing" className="container mt-40 xl:mt-28 lg:mt-28">

                      {/* Table Headings */}
                     <div className="row table-header w-full h-12 text-center font-bold bg-admin-bg text-rebornit-primary p-6 fixed z-20">
                          <div className="col-sm-2">Delivery Code</div>
                          <div className="col-sm-2">Receiver's Name</div>
                          <div className="col-sm-1">Contacts</div>
                          <div className="col-sm-2">Delivery Fee</div>
                          <div className="col-sm-3">Status</div>
                     </div>
                  
          
                <div className="row bg-admin-bg p-4 delivery-list sm:p-0 sm:mt-11">
                    <div>
                        <AdminRow css_for_dropdown={"bg-light-blue text-white font-bold"} seemore_button_click={openTheModel}/>
                        <AdminRow css_for_dropdown={"bg-light-blue text-white font-bold"} seemore_button_click={openTheModel}/>
                        <AdminRow css_for_dropdown={"bg-light-blue text-white font-bold"} seemore_button_click={openTheModel}/>
                        <AdminRow css_for_dropdown={"bg-light-blue text-white font-bold"} seemore_button_click={openTheModel}/>
                        {/* <AdminRow css_for_dropdown={"bg-order_placed_red text-white font-bold"}/>
                        <AdminRow css_for_dropdown={"bg-order_placed_red text-white font-bold"}/>
                        <AdminRow css_for_dropdown={"bg-order_placed_red text-white font-bold"}/>
                        <AdminRow css_for_dropdown={"bg-order_placed_red text-white font-bold"}/>
                        <AdminRow css_for_dropdown={"bg-order_placed_red text-white font-bold"}/>
                        <AdminRow css_for_dropdown={"bg-order_placed_red text-white font-bold"}/>
                        <AdminRow css_for_dropdown={"bg-order_placed_red text-white font-bold"}/>
                        <AdminRow css_for_dropdown={"bg-order_placed_red text-white font-bold"}/>
                        <AdminRow css_for_dropdown={"bg-order_placed_red text-white font-bold"}/>
                        <AdminRow css_for_dropdown={"bg-order_placed_red text-white font-bold"}/>
                        <AdminRow css_for_dropdown={"bg-order_placed_red text-white font-bold"}/> */}
                    </div>
               
                </div>  


                {openModal && <div id="modal" className="modalBackground w-full h-auto top-0 bottom-0 left-0 right-0 sm:p-4 xl:p-6 lg:p-6 bg-slate-800 bg-opacity-60 fixed xl:flex xl:justify-center lg:flex lg:justify-center sm:block align-middle z-50 overflow-auto touch-auto">
                        <div className="modalContainer rounded-xl h-auto bg-slate-100 shadow-lg flex flex-col p-3 lg:w-3/4 lg:h-3/4 xl:w-3/4 xl:h-2/3 sm:w-full">
                            <div className=" flex justify-end"><ModalCloseButton ClickHandler={closeModal} /></div>
                    
                        <div className="title text-center font-bold text-xl mb-10"><h1>Delivery Code: <span className=" text-rebornit-primary">sdcjhjhbdkjdfkv</span></h1></div>
                       
                        {/* Body */}
                        <div className="body xl:flex lg:flex sm:block gap-1 mb-1">

                        <div className=" xl:w-3/6 lg:w-3/6 sm:w-full xl:mt-0 bg-white rounded-xl p-2 py-4 shadow-lg">
                            <h1 className=" font-bold text-lg px-3">Sender</h1>                                   
                                <div className="">
                                    <div className=" flex justify-between px-4 mt-3">
                                        <div>Sithum Dashantha</div>
                                        <div>sithum@yaho.com</div>
                                    </div>

                                    <div className=" flex justify-between px-4 mt-2">
                                        <div>No.2, Presidents House, Colombo 7</div>
                                        <div>
                                            <p>0719594446</p>
                                            <p>0715616515</p>
                                        </div>
                                    </div>   
                                </div>
                           </div>

                           <div className=" xl:w-3/6 lg:w-3/6 sm:w-full xl:mt-0 bg-white rounded-xl p-2 py-4 shadow-lg">
                            <h1 className=" font-bold text-lg px-3">Receiver</h1>                                   
                                <div className="">
                                    <div className=" flex justify-between px-4 mt-3">
                                        <div>Sithum Dashantha</div>
                                        <div>sithum@yaho.com</div>
                                    </div>

                                    <div className=" flex justify-between px-4 mt-2">
                                        <div>No.2, Presidents House, Colombo 7</div>
                                        <div>
                                            <p>0719594446</p>
                                            <p>0715616515</p>
                                        </div>
                                    </div>   
                                </div>
                           </div>
                        </div>


                        {/* Footer */}
                        <div className="footer w-full h-auto bg-white rounded-xl xl:flex xl:justify-evenly lg:flex lg:justify-center sm:block p-2 shadow-md" >
                            
                            <div className=" xl:w-1/4 lg:w-1/4 sm:w-full text-left p-2">
                                <h1 className=" font-bold text-lg inline-block">Delivery Details</h1>
                                { immediateCourier &&<span className=" text-order_placed_red inline-block xl:pl-0 lg:pl-0 sm:pl-2">Immediate Courier</span>}
                            
                                <div className=" mt-3">
                                    <div className=" mb-2"><span className=" font-bold ">Pickup Date :</span> 5 june 2022</div>
                                    <div className=" mb-2"><span className=" font-bold">Vehicle Type :</span>  Car</div>
                                    <div className=" mb-2"><span className=" font-bold">Weight :</span> 1kg</div>
                                    <div className=" mb-2"><span className=" font-bold">Fee(LKR):</span> 700</div>
                                </div>
                            </div>

                            <div className=" p-2 xl:w-1/3 lg:w-1/3 sm:w-full">
                                <div>
                                    <div className=" font-bold">Description:</div>
                                    <div className="xl:pl-3 lg:pl-3 sm:pl-0  xl:pt-0 lg:pt-0 sm:pt-2 text-justify text-sm">Lorem, ipsum dolor sit amet
                                         consectetur adipisicing elit. 
                                         Voluptate, nobis facilis distinctio 
                                         quis natus ducimus non deleniti 
                                         dolorum ipsa rem.
                                    </div>
                                </div>

                                <div className=" my-3">
                                    <div className=" font-bold">Special Note:</div>
                                    <div className=" xl:pl-3 lg:pl-3 sm:pl-0  xl:pt-0 lg:pt-0 sm:pt-2 text-justify text-sm">Lorem, ipsum dolor sit amet
                                         consectetur adipisicing elit. 
                                         Voluptate, nobis facilis distinctio 
                                         quis natus ducimus non deleniti 
                                         dolorum ipsa rem.
                                    </div>
                                </div>
                            </div>

                            <div className=" lg:py-10 xl:py-10 xl:w-auto lg:w-1/3 xl:p-0 lg:p-3 sm:p-0">
                                <div className="delivery-card-content-buttons-seemore flex justify-center">
                                    {/* <Dropdown  selected={selected} setSelected={setSelected} extraCss={`shadow-xl lg:text-xs xl:text-sm bg-order_placed_red text-white font-bold lg:h-auto`}/> */}
                                    <StandartButton children={"Order Placed"} extraTailwindClasses={" shadow-xl lg:text-xs xl:text-sm bg-light-blue text-white font-bold lg:h-auto p-2 outline-none xl:w-full lg:w-full sm:w-9/12"} />
                                </div>
                    
                                {/* <div className="delivery-card-content-buttons-seemore xl:mt-4 lg:mt-4 sm:mt-2">
                                    <StandartButton children={"Done"} extraTailwindClasses={"p-2 bg-see_more_green xl:h-auto lg:h-11 font-bold shadow-xl lg:text-xs xl:text-sm"} clickHandler={closeModal} />
                                </div> */}
                            </div> 
                        </div>

                         {/* Cancel Button */}
                        <div className="mt-4 mb-4 flex justify-center">
                            <StandartButton children={"Ok"} extraTailwindClasses={" xl:w-1/6 lg:w-1/6 w-full shadow-xl lg:text-xs xl:text-sm bg-see_more_green text-white font-bold lg:h-auto p-2 mb-6"} clickHandler={closeModal} />
                        </div>
                    </div>
                </div>}
                

        </div>
    );
}