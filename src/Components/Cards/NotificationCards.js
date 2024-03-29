import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../Styles/Cards.css';
import {Card, ListGroupItem, ListGroup} from 'react-bootstrap';
import Lixo from '../../Images/LixoBranco.svg';
import Editar from '../../Images/EditarBranco.svg';
import Plus from '../../Images/Plus.svg';
import {Link} from 'react-router-dom';
import Loading from '../../Pages/Loading';
import { getNotifications } from '../../Store/Notifications/Actions';
import NotificationModal from '../../Components/Modal/NotificationModal';
import Pagination from '../Geral/Pagination';

const NotificationCards = (props) => {

    const dispatch = useDispatch();
    const dataAtual = new Date();
    
    const notificationList = useSelector(({ notificacoes }) => notificacoes.data)
    const isLoadingAll = useSelector(({ notificacoes }) => notificacoes.isLoadingAll)
    const [modal, setModal] = useState([false, {}]);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(15);
    const indexOfLastPost = currentPage * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    const [currentItems, setCurrentItems] = useState({todos: [], current: []});

    useEffect(() => {
        dispatch(getNotifications())
    }, [])

    useEffect(() => {
        let array = [];
        if(!isLoadingAll){
            var sorted = notificationList.sort((a, b) => new Date(b.data) - new Date(a.data));
            sorted.map((item) => {
                let dataNova = new Date(item.data);
                if(dataNova < dataAtual && props.tipo === 'Enviadas' || dataNova >= dataAtual && props.tipo === 'Por enviar'){
                    if(props.pesquisa === ''){
                        array.push(item);
                    } else {
                        let pesquisado = props.pesquisa.toLowerCase();
                        let nomes = item.mensagem.toLowerCase();
                        if(item.mensagem.startsWith(props.pesquisa) || nomes.startsWith(pesquisado)){
                            array.push(item)
                        }
                    }
                }
            })
            setCurrentItems({todos: array, current: array.slice(indexOfFirstPost, indexOfLastPost)});
        }
    }, [currentPage, isLoadingAll, props.pesquisa])

    useEffect(() => {
        setCurrentPage(1)
    }, [props.pesquisa])

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    if (isLoadingAll) {
        return (
            <Loading />
        )
    }
    
    return(
        <div className='container m-0' style={props.pagina === 'users' ? {padding: "0 40px"} : null}>
            <div className='row cartasMainBody'>
                {currentItems.current.map((item, index) => {
                    let dataNova = new Date(item.data);
                    var dataFinal = ((dataNova.getDate() > 9) ? dataNova.getDate() : ('0' + dataNova.getDate()))  + '/' + ((dataNova.getMonth() > 8) ? (dataNova.getMonth() + 1) : ('0' + (dataNova.getMonth() + 1))) + '/' + dataNova.getFullYear();

                    var hora = 'Indefinida'
                    let diaSemana = dataNova.getDay()

                    if(item.hora !== null){
                        hora = item.hora.substring(0, 5);
                    }
                    
                    return(
                        <span key={index} className='col-4 ps-0 pb-3'>
                            {props.tipo === 'Por enviar' ?
                            <Card className='hoverCarta' style={{cursor: "pointer", minHeight: "100%"}}>
                                <Card.Header as={Link} to={`/notifications/${item.id_notificacao}`} style={{textDecoration: "none"}} className='row headerCarta m-0 gx-1'>
                                    <span className='col-9 p-0 tituloNotificacao'>{item.mensagem}</span>
                                    <span className='col-3 p-0 dataNotificacao'>
                                        {dataFinal}
                                    </span>
                                </Card.Header>
                                
                                <Card.Body as={Link} to={`/notifications/${item.id_notificacao}`} style={{textDecoration: "none", color: "black"}} className='bodyCartaRotina row m-0 px-0'>
                                    <span className='col-6'>
                                        <Card.Title className='dataNotifsTitle'>Dia</Card.Title>
                                        <Card.Text className='dataNotifs'>
                                            {diaSemana === 1 ? 'Segunda-Feira' : diaSemana === 2 ? 'Terça-Feira' : diaSemana === 3 ? 'Quarta-Feira' : diaSemana === 4 ? 'Quinta-Feira' : diaSemana === 5 ? 'Sexta-Feira' : diaSemana === 6 ? 'Sábado' : 'Domingo' }
                                        </Card.Text>
                                    </span>
                                    <span className='col-6 d-flex flex-column' style={{textAlign: "right"}}>
                                        <Card.Title className='dataNotifsTitle'>Horas</Card.Title>
                                        <Card.Text className='dataNotifs'>{item.ref_id_rotinas === null ? hora : item.ref_id_rotinas === 1 ? 'Rotina de Bom dia' : 'Rotina de Boa Noite'}</Card.Text>
                                    </span>
                                </Card.Body>
                            </Card>
                            :
                            <Card className='hoverCarta' style={{cursor: "pointer", minHeight: "100%"}}>
                                <Card.Header as={Link} to={`/history/${item.id_notificacao}`} style={{textDecoration: "none"}} className='row headerCarta m-0 gx-1'>
                                    <span className='col-9 p-0 tituloNotificacao'>{item.mensagem}</span>
                                    <span className='col-3 p-0 dataNotificacao'>
                                        {dataFinal}
                                    </span>
                                </Card.Header>
                                
                                <Card.Body as={Link} to={`/history/${item.id_notificacao}`} style={{textDecoration: "none", color: "black"}} className='bodyCartaRotina row m-0 px-0'>
                                    <span className='col-6'>
                                        <Card.Title className='dataNotifsTitle'>Dia</Card.Title>
                                        <Card.Text className='dataNotifs'>
                                            {diaSemana === 1 ? 'Segunda-Feira' : diaSemana === 2 ? 'Terça-Feira' : diaSemana === 3 ? 'Quarta-Feira' : diaSemana === 4 ? 'Quinta-Feira' : diaSemana === 5 ? 'Sexta-Feira' : diaSemana === 6 ? 'Sábado' : 'Domingo' }
                                        </Card.Text>
                                    </span>
                                    <span className='col-6 d-flex flex-column' style={{textAlign: "right"}}>
                                        <Card.Title className='dataNotifsTitle'>Horas</Card.Title>
                                        <Card.Text className='dataNotifs'>{item.ref_id_rotinas === null ? hora : item.ref_id_rotinas === 1 ? 'Rotina de Bom dia' : 'Rotina de Boa Noite'}</Card.Text>
                                    </span>
                                </Card.Body>
                            </Card>
                            }
                        </span>
                    )
                })}
                {currentItems.todos.length > 15 ? 
                    <Pagination itemsPerPage={itemsPerPage} totalItems={currentItems.todos.length} paginate={paginate} currentPage={currentPage}/>
                :
                <></>
                }
                {currentItems.todos.length === 0 ?
                <span className='col-12 ps-0 pb-3' style={{textAlign:'center'}}>
                    Não encontramos nenhuma notificação!
                </span>
                :
                <></>}
            </div>
            <NotificationModal show={modal[0]} onHide={() => setModal([false, {}])} tipo="notificacoes" info={modal[1]}/>
        </div>
    )
}

export default NotificationCards;