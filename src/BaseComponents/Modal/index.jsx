import React from "react";
import ModalCloseButton from "../ModalCloseButton/index";
import StandartButton from "../StandartButton";
import Dropdown from "../Dropdown";


function Modal(){
    return(
        <div id="modal" className=" bg-modal_bg flex min-h-full m-0 fixed top-0 left-0 h-screen w-screen">
            <div className="container bg-white">
                <div className="row">
                    <ModalCloseButton />
                </div>
                <div className="row">
                    <h1>Delivery Code <span>XGFGFCjhahsb516</span></h1>
                </div>
                <div className="row">
                    <div className="col-sm-6"></div>
                    <div className="col-sm-6"></div>
                </div>
                <div className="row">
                    <div className="">
                        Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Ducimus ratione itaque harum 
                        voluptate ullam similique sapiente autem tempore tenetur. 
                        Odit blanditiis amet dolorum ab. Facilis soluta praesentium 
                        placeat consectetur neque, ipsam dolores nam similique rem maxime 
                        in delectus. Accusamus ut ab unde quod architecto quibusdam neque, 
                        aliquam soluta alias laudantium.
                    </div>

                    <div className="">
                    <Dropdown extraCss={`shadow-xl bg-order_placed_red text-white font-bold lg:text-xs xl:text-sm`}/>
                    <StandartButton children={"Done"} extraTailwindClasses={"p-2 bg-see_more_green duration-700 hover:translate-x-2 font-bold shadow-xl lg:text-xs xl:text-sm"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;

