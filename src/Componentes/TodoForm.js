import React ,{ useState } from "react";
import './TodoForm.css';
import { addItem } from '../Actions/listActions';
import { useDispatch } from "react-redux";


function TodoForm(props) {

    const [text , setText] = useState("");
    const dispatch = useDispatch()

    function mostrarNoImput(evento) {
        let t = evento.target.value; // Tipo o This
        console.info(t); // 1º Passo - Toda a vez que estado for digitado ele modificará na tela
        setText(t); // 2º Passo - Ele irá inserir esse texto

    }
    
    function addItemEvent(evento) {
        evento.preventDefault();
        if (text) {
            
            dispatch(addItem(text))
            setText(""); // Limpa o input na tela
            props.onEscondeModal()
        } 
    }
     
    return(<form className="space-between">
        <input className="inputStyle" onChange={mostrarNoImput} type="text" value={text}></input> 
        <button className="btn" onClick={addItemEvent}> &#10010;</button>
    </form>
    )
}

export default TodoForm;