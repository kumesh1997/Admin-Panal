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
    const [openModal, setOpenModal]=useState(true);
    const [immediateCourier, setImmediateCourier]=useState(true);
    
    return(
        <div id="landing" className="container mt-40 xl:mt-28 lg:mt-28">

                      {/* Table Headings */}
                     <div className="row table-header w-full h-12 text-center font-bold bg-admin-bg text-rebornit-primary p-6 fixed">
                          <div className="col-sm-2">Delivery Code</div>
                          <div className="col-sm-2">Receiver's Name</div>
                          <div className="col-sm-2">Mobile Number</div>
                          <div className="col-sm-3">Status</div>
                     </div>
                  
          
                <div className="row bg-admin-bg p-4 delivery-list sm:p-0 sm:mt-11">
                    <div>
                        <AdminRow css_for_dropdown={"bg-order_placed_red text-white font-bold"} seemore_button_click={setOpenModal}/>
                        <AdminRow css_for_dropdown={"bg-order_placed_red text-white font-bold"}/>
                        <AdminRow css_for_dropdown={"bg-order_placed_red text-white font-bold"}/>
                        <AdminRow css_for_dropdown={"bg-order_placed_red text-white font-bold"}/>
                        <AdminRow css_for_dropdown={"bg-order_placed_red text-white font-bold"}/>
                        <AdminRow css_for_dropdown={"bg-order_placed_red text-white font-bold"}/>
                        <AdminRow css_for_dropdown={"bg-order_placed_red text-white font-bold"}/>
                        <AdminRow css_for_dropdown={"bg-order_placed_red text-white font-bold"}/>
                        <AdminRow css_for_dropdown={"bg-order_placed_red text-white font-bold"}/>
                        <AdminRow css_for_dropdown={"bg-order_placed_red text-white font-bold"}/>
                        <AdminRow css_for_dropdown={"bg-order_placed_red text-white font-bold"}/>
                        <AdminRow css_for_dropdown={"bg-order_placed_red text-white font-bold"}/>
                    </div>
               
                </div>  


                {openModal && <div id="modal" className="modalBackground w-full h-auto bg-modal_bg_gray flex justify-center align-middle ">
                        <div className="modalContainer rounded-xl bg-modal_blue shadow-lg flex flex-col p-6 lg:w-3/4 lg:h-3/4 xl:w-3/4 xl:h-3/4 sm:w-56">
                            <div className=" flex justify-end"><ModalCloseButton ClickHandler={setOpenModal} /></div>
                    
                        <div className="title text-center font-bold text-xl mb-2"><h1>Delivery Code: <span className=" text-white">sdcjhjhbdkjdfkv</span></h1></div>
                       
                        {/* Body */}
                        <div className="body flex gap-1 mb-1">

                           <div className=" w-3/6 bg-white rounded-xl p-2 py-4">
                                <h1 className=" font-bold text-lg px-4">Sender</h1>                                   
                                <div className="">
                                    <div className=" flex justify-between px-4 mt-3">
                                        <div>Sithum Dashantha</div>
                                        <div>sithum@yaho.com</div>
                                    </div>

                                    <div className=" flex justify-between px-4 mt-2">
                                        <div>No.2, Presidents House, Colombo 7</div>
                                        <div className="">
                                            <p>0719594446</p>
                                            <p>0715616515</p>
                                        </div>
                                    </div>   
                                </div>
                           </div>

                           <div className=" w-3/6 bg-white rounded-xl p-2">
                            <h1 className=" font-bold text-lg px-4">Receiver</h1>                                   
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
                        <div className="footer w-full h-auto bg-white rounded-xl flex justify-evenly">
                            
                            <div className=" w-1/4 text-left p-2">
                                <h1 className=" font-bold text-lg inline-block">Delivery Details</h1>
                                { immediateCourier &&<span className=" text-order_placed_red inline-block">Immediate Courier</span>}
                            
                                <div className=" mt-3">
                                    <div className=" mb-2"><span className=" font-bold ">Pickup Date :</span> 5 june 2022</div>
                                    <div className=" mb-2"><span className=" font-bold">Vehicle Type :</span>  Car</div>
                                    <div className=" mb-2"><span className=" font-bold">Weight :</span> 1kg</div>
                                    <div className=" mb-2"><span className=" font-bold">Fee(LKR):</span> 700</div>
                                </div>
                            </div>

                            <div className=" p-2 w-1/3">
                                <div>
                                    <div className=" font-bold">Description:</div>
                                    <div className=" pl-3 text-justify text-sm">Lorem, ipsum dolor sit amet
                                         consectetur adipisicing elit. 
                                         Voluptate, nobis facilis distinctio 
                                         quis natus ducimus non deleniti 
                                         dolorum ipsa rem.
                                    </div>
                                </div>

                                <div className=" my-3">
                                    <div className=" font-bold">Special Note:</div>
                                    <div className=" pl-3 text-justify text-sm">Lorem, ipsum dolor sit amet
                                         consectetur adipisicing elit. 
                                         Voluptate, nobis facilis distinctio 
                                         quis natus ducimus non deleniti 
                                         dolorum ipsa rem.
                                    </div>
                                </div>
                            </div>

                            <div className=" lg:py-10 xl:py-7">
                                <div className="delivery-card-content-buttons-dropdown">
                                    <Dropdown  selected={selected} setSelected={setSelected} extraCss={`shadow-xl lg:text-xs xl:text-sm bg-order_placed_red text-white font-bold lg:h-auto`}/>
                                </div>
                    
                                <div className="delivery-card-content-buttons-seemore mt-4">
                                    <StandartButton children={"Done"} extraTailwindClasses={"p-2 bg-see_more_green xl:h-auto lg:h-11 font-bold shadow-xl lg:text-xs xl:text-sm"} clickHandler={setOpenModal} />
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>}
                

        </div>
    );
}