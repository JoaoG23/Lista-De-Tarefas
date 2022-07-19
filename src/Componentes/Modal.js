import React from "react";
import Card from "./Card";

function Modal(props) {

    function escondeModal(evento) {
        let target = evento.target;

        if (target.id === 'modal') {
            props.onEscondeModal()
        }
        console.info(target);
    }

    return(<div id="modal" onClick={escondeModal} className={props.show ? "modal" : "modal hide"}>
        <Card className="cardModal">
            {props.children}
            
        </Card>
    </div>)
}

export default Modal