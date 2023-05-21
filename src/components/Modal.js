import React from 'react'

export const Modal = ({isOpen, setOpen}) => {
if(isOpen) {
     return (
        <div className='modal'>
            <h2>Modal Activado</h2>
            <p>Modal Activado com sucesso</p>
            <button onClick={()=>setOpen(!isOpen)} >Fechar</button>  
        </div>
  )}
}
