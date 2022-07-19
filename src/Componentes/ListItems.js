import React from "react";
import { useDispatch } from "react-redux";
import Card from './Card';
import './List.css';
import { deleteItem, changeDone } from '../Actions/listActions';

function DoneImg(props) {
    if ( props.done ) {
        return (<img alt="done" src="./Assets/feito.svg"></img>)
    } else {
        return (<img alt="undone" src="./Assets/naofeito.svg"></img>)
    }
}


function ListItems(props) {
    const dispatch = useDispatch()
    return(<li>
        <Card className={props.item.done ? "done item" : "item"}>
                            { props.item.text }
                                <div>
                                    <button onClick={ () => { dispatch( changeDone( props.item.id ) ) }}><DoneImg done={ props.item.done }></DoneImg> </button>
                                    <button onClick={ () => { dispatch( deleteItem( props.item.id ) ) }}><img alt="delete" src="./Assets/remove.svg"></img></button>
                                </div>
                            </Card>
                        </li>)
}

export default ListItems;