import React from 'react'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'

const Notification =(props) =>{

    const NotificationWindow = () =>{
        
        return (<Toast>
            <Toast.Header className='toastheader'>
                <strong className="me-auto">Notificacion</strong>
            </Toast.Header>
            <Toast.Body><i class="fas fa-exclamation-circle" style={{color:'green'}}></i> {props.name} fue añadido al carro.</Toast.Body>
        </Toast>)
    }
    return(
        <div>

            
                <ToastContainer position="bottom-end" className="p-3">
            <NotificationWindow/>
        </ToastContainer>
        </div>
    )
}

export default Notification;