import React from "react";
import ModalCloseButton from "../ModalCloseButton";
import Dropdown from "../Dropdown";
import StandartButton from "../StandartButton";

function DeliveryModal(){
    return(
        <div id="modal" className="modalBackground">
            <div className="modalContainer">
                <ModalCloseButton />
                <div className="title"><h1>Modal Title</h1></div>
                <div className="body">
                    Modal Body

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates ullam praesentium? Necessitatibus hic fuga sunt ullam rerum enim tenetur, in delectus? Est numquam labore vitae quisquam quae laudantium sed nobis, aliquid voluptatibus ratione consequuntur. Nemo deserunt, magni architecto minima quia illo iusto, aspernatur eveniet doloremque incidunt soluta consectetur suscipit.</p>
                </div>
                <div className="footer">
                        <div><Dropdown /></div>
                        <div><StandartButton /></div>
                </div>
            </div>
        </div>
    );
}

export default DeliveryModal;