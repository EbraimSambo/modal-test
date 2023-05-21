import React from 'react'

export const Modal = ({isOpen}) => {
if(isOpen) {
     return (
        <div>
            <h2>Modal Activado</h2>
            <p>Modal Activado com sucesso</p>
        </div>
  )}
}
