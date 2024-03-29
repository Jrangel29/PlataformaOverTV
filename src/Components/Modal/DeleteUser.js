import React from 'react';
import '../../Styles/Modal.css';
import {Button, Modal} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteSingleUser } from '../../Store/Users/Actions';

function DeleteUser (props) {

    const dispatch = useDispatch();

    const apagaUser = () => {
        props.onHide("Confirma", "Utilizador")
        dispatch(deleteSingleUser(props.id))
    }

    return(
        <Modal
            {...props}
            centered
            backdrop="static"
            size="lg"
        >
            <Modal.Header className='tituloModal' closeVariant='white'>
                Eliminar Utilizador
            </Modal.Header>
            <Modal.Body>
                <div className='row m-0'>
                    <p className='textoSeccaoPagina p-0'>Tem a certeza que pretende apagar este utilizador? Se o fizer, este deixará de estar no serviço e de receber informações na sua Box.</p>
                </div>
                
                <div className='row m-0 mt-3 justify-content-end'>
                    <Button className='col-2 me-3' variant='danger' onClick={() => props.onHide("Cancela")}>Cancelar</Button>
                    <Button className='col-2' variant='success' onClick={() => apagaUser()}>Confirmar</Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default DeleteUser;