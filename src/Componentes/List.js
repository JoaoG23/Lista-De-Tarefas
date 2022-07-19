import React from "react";
import { useSelector } from "react-redux";
import './List.css';
import ListItems from './ListItems';

// Para que uam props seja exportada coloque pros no componente


function List(props) {
    const items = useSelector( state => state );
    return(<ul>{ items.map(item => <ListItems  key={ item.id } item={ item }   ></ListItems>) }</ul>)
}

export default List;