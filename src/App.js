import React , {  useState } from 'react';
import Lista from './Componentes/List';
import TodoForm from './Componentes/TodoForm';
import Modal from './Componentes/Modal';
import './todo.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import listReduce from './Reduces/listReduce';

    const ITEM_SALVADOS = 'itemSalvado';

function persistState( state ) {
    localStorage.setItem( ITEM_SALVADOS , JSON.stringify( state ));
}

function loadState() {
    const actualState = localStorage.getItem(ITEM_SALVADOS);
    if (actualState) 
        return JSON.parse(actualState)
     else 
        return []
}



const store = createStore(listReduce, loadState());

store.subscribe(() => {
    persistState( store.getState() )
})


function App() {

    const [showModal , setMostraModal] = useState(false);

    function onEscondeModal() {
        setMostraModal(false);
    }

    return(
        <div className='container container-Style'>
        <Provider store={ store } >
            <header className='header'><h1>Lista de Tarefas</h1> <button onClick={() => {setMostraModal(true)}} className='botaoAdicionar'>+</button> </header>
            
            <Lista></Lista>
            <Modal show={ showModal } onEscondeModal={onEscondeModal}><TodoForm onEscondeModal={onEscondeModal}></TodoForm></Modal>
        </Provider>
        </div>
    )
}


export default App;