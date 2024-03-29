import React from 'react';
import '../../Styles/App.css';
import BackArrow from './BackArrow';
import Editar from '../../Images/EditarPreto.svg';
import DeleteUser from '../Modal/DeleteUser';
import DeleteEvent from '../Modal/DeleteEvent';
import DeleteHouse from '../Modal/DeleteHouse';
import SuccessModal from '../Modal/SuccessModal';
import {Link} from 'react-router-dom';
import Lixo from '../../Images/LixoPreto.svg';

class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showDelete: false,
            showSuccessModal: false,
            tipoNoti: ""
        }
    }

    onOpen = () => this.setState({showDelete: true});
    onClose = (resposta, tipo) => {
        if(resposta === "Cancela"){
            this.setState({showDelete: false, showSuccessModal: false})
        } else {
            this.setState({showDelete: false, showSuccessModal: true, tipoNoti: tipo})
        };
    }
    onCloseSuccess = () => this.setState({showSuccessModal: false});

    render(){
        return(
            <>
            {this.props.detalhe == "sim" ?
            <div className='m-0 p-0 row inicioPagina'>
                <span className="col-2 d-flex align-items-center">
                    <BackArrow nome={this.props.nome}/>
                </span>
                <h1 className='tituloPagina col-8'>{this.props.nome}</h1>
                {this.props.apagaMuda !== "nao" ?
                    <span className="col-2 d-flex align-items-center justify-content-end">
                        {this.props.nome === "Casas" ?
                        <Link className='mx-4' to={`/houses/edit/${this.props.id}`}>
                            <img className="topIcons" src={Editar}/>    
                        </Link>
                        :
                        this.props.nome === "Utilizadores" ?
                        <Link className='mx-4' to={`/users/edit/${this.props.id}`}>
                            <img className="topIcons" src={Editar}/>    
                        </Link>
                        :
                        <Link className='mx-4' to={{
                            pathname: `/events/edit/${this.props.id}`,
                            state: {
                                informacao: this.props.info
                            }}}>
                            <img className="topIcons" src={Editar}/>    
                        </Link>
                        }
                        <img className="topIcons" style={{marginRight: "40px", cursor: "pointer"}} onClick={() => this.onOpen()} src={Lixo}/>
                        {this.props.nome === "Utilizadores" ?
                        <DeleteUser show={this.state.showDelete} onHide={this.onClose} id={this.props.id}/>
                        :
                        this.props.nome === "Casas" ?
                        <DeleteHouse show={this.state.showDelete} onHide={this.onClose} id={this.props.id}/>
                        :
                        <DeleteEvent show={this.state.showDelete} onHide={this.onClose} id={this.props.id}/>
                        }
                    </span>
                :
                <></>
                }
            <SuccessModal show={this.state.showSuccessModal} onHide={this.onCloseSuccess} tiponotif={this.state.tipoNoti}/>
            </div>
            :
            <div className='m-0 p-0 inicioPagina'>
                <h1 className='tituloPagina'>{this.props.nome}</h1>
            </div>
            }
            </>
        )
    } 
}

export default Header;