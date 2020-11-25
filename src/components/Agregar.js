import React, { useContext, useState } from 'react'
import {ChatContext} from '../context/ChatProvider';

const Agregar = () => {

    const {agregarMensajes ,usuario} = useContext(ChatContext);
    const [mensaje,setMensaje] = useState('');


    const agregar = e => {
        e.preventDefault();
        if(!mensaje.trim()){
            console.log('vacio');
            return;
        }
        agregarMensajes(usuario.uid,mensaje)
        setMensaje('');

    }
    return (
        <form className="input-group fixed-bottom p-3 bg-dark" 
            onSubmit={agregar}
        >
            <input 
                type='text'
                className='form-control '
                name= 'mensaje'
                value= {mensaje}
                onChange={(e) => setMensaje(e.target.value)}
            />
            <div className='input-group-append'>
                <button
                    type='submit'
                    className='btn btn-primary'
                >Enviar</button>

            </div>
        </form>
    )
}

export default Agregar
