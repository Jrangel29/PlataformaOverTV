import React from 'react';
import Navbar from '../../Components/Geral/Navbar';
import Header from '../../Components/Geral/Header';
import {Button, Dropdown, Collapse, Form, OverlayTrigger} from 'react-bootstrap';
import DownArrow from '../../Images/DownArrow.png';
import NotificationTimeSelection from '../../Components/Forms/NotificationTimeSelection';
import SuccessModal from '../../Components/Modal/SuccessModal';
import SubmitButton from '../../Components/Geral/SubmitButton';
import { BuscaTipologiasNotificacoes } from '../../Components/Forms/Hooks';
import { ListaUsersPesquisa, ListaUsersAdicionados, CasasPesquisa, CasasEscolhidas } from '../../Components/Forms/ListaPesquisa';
import { DeliveryOptions } from '../../Components/Forms/DeliveryOptions';
import { PreviewNotif } from '../../Components/Forms/PreviewNotif';
import UserPreferencesModal from '../../Components/Modal/UserPreferencesModal';
import InformationIcon from '../../Images/information.png';
import { MomentsTooltip, CategoryTooltip } from '../../Components/Forms/Tooltips';
import {connect} from 'react-redux';
import { useNavigate } from "react-router-dom";
import { ListaMeo, Apps } from '../../Components/Forms/ListaMeo';

class EditNotification extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            mostraModal: false,
            mostraModalInfo: false,
            tipologia: "Agenda",
            idTipologia: 1,
            categoriaInfo: "",
            nomeItem: "",
            regularidade: '',
            envioNotif: "Pontual",
            idRegular: '',
            diaUnico: '',
            hora: '',
            momentoUnico: '',
            usersEscolhidos: [],
            casasEscolhidas: [],
            tipoPersonalizado: 'Relembra',
            diaMes: '',
            dataFim: '',
            canal: {
                nome: '',
                id: ''
            },
            dias: {
                domingo0: false,
                segunda1: false,
                terca2: false,
                quarta3: false,
                quinta4: false,
                sexta5: false,
                sabado6: false
            },
            paramsPersonalizado: {
                usaIcone: "Não",
                icone: "Agenda",
                tipoRecetor: 'Recetores Individuais'
            },
            colapsado: {
                collapse1: false,
                collapse2: false,
                collapse3: false,
                collapse4: false
            },
            mensagens: {
                semanaAntes: {
                    active: false, 
                    message: '',
                    tituloBlade: '',
                    descricao: '',
                    persVal: false},
                dias3: {
                    active: false, 
                    message: '',
                    tituloBlade: '',
                    descricao: '',
                    persVal: false},
                diaAnterior: {
                    active: false, 
                    message: '',
                    tituloBlade: '',
                    descricao: '',
                    persVal: false},
                diaProprio: {
                    active: false, 
                    message: '',
                    tituloBlade: '',
                    descricao: '',
                    persVal: false},
                horaEspecifica: {
                    active: false, 
                    message: '',
                    tituloBlade: '',
                    descricao: '',
                    persVal: false},
                imediato: {
                    active: false, 
                    message: '',
                    tituloBlade: '',
                    descricao: '',
                    persVal: false},
                intervaloHoras: {
                    active: false, 
                    message: '',
                    tituloBlade: '',
                    descricao: '',
                    persVal: false},
                horaAntes: {
                    active: false, 
                    message: '',
                    tituloBlade: '',
                    descricao: '',
                    persVal: false},
                meiaHora: {
                    active: false, 
                    message: '',
                    tituloBlade: '',
                    descricao: '',
                    persVal: false},
                quartoHora: {
                    active: false, 
                    message: '',
                    tituloBlade: '',
                    descricao: '',
                    persVal: false},
                minutos5: {
                    active: false, 
                    message: '',
                    tituloBlade: '',
                    descricao: '',
                    persVal: false},
                momentoAcontecimento: {
                    active: false, 
                    message: '',
                    tituloBlade: '',
                    descricao: '',
                    persVal: false}
            }
        }
    }

    mudaTipoPersonalizado = (valor) => {
        this.setState({
            tipoPersonalizado: valor,
        })
    }

    alteraFormulario = (valor, id, subcategoria) => {
        
        if(subcategoria === "nao"){
            this.setState({
                tipologia: valor,
                idTipologia: id,
                categoriaInfo: '',
                usersEscolhidos: [],
                casasEscolhidas: [],
                canal: {
                    nome: '',
                    id: ''
                },
                mensagens: {
                    semanaAntes: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    dias3: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    diaAnterior: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    diaProprio: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    horaEspecifica: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    imediato: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    intervaloHoras: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    horaAntes: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    meiaHora: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    quartoHora: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    minutos5: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    momentoAcontecimento: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false}
                }
            })
        }
        if(subcategoria === "Combustíveis" || subcategoria === "Greves" || subcategoria === "Farmácias de Serviço" || subcategoria === "Feriados" || subcategoria === "Inatividade" || subcategoria === "Ingestão de Líquidos" || subcategoria === "Medicação"){
            this.setState({
                tipologia: valor,
                idTipologia: id,
                categoriaInfo: subcategoria,
                usersEscolhidos: [],
                casasEscolhidas: [],
                canal: {
                    nome: '',
                    id: ''
                },
                mensagens: {
                    semanaAntes: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    dias3: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    diaAnterior: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    diaProprio: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    horaEspecifica: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    imediato: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    intervaloHoras: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    horaAntes: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    meiaHora: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    quartoHora: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    minutos5: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    momentoAcontecimento: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false}
                }
            })
        }
    }

    alteraEnvio = (valor) => {
        if(valor === 'Pontual'){
            this.setState({
                envioNotif: valor,
                idRegular: 1,
                mensagens: {
                    semanaAntes: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    dias3: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    diaAnterior: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    diaProprio: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    horaEspecifica: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    imediato: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    intervaloHoras: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    horaAntes: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    meiaHora: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    quartoHora: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    minutos5: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    momentoAcontecimento: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false}
                }
            })
        }
        if(valor === 'Diária'){
            this.setState({
                envioNotif: valor,
                idRegular: 2,
                mensagens: {
                    semanaAntes: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    dias3: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    diaAnterior: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    diaProprio: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    horaEspecifica: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    imediato: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    intervaloHoras: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    horaAntes: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    meiaHora: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    quartoHora: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    minutos5: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    momentoAcontecimento: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false}
                }
            })
        }
        if(valor === 'Semanal'){
            this.setState({
                envioNotif: valor,
                idRegular: 3,
                mensagens: {
                    semanaAntes: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    dias3: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    diaAnterior: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    diaProprio: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    horaEspecifica: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    imediato: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    intervaloHoras: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    horaAntes: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    meiaHora: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    quartoHora: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    minutos5: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    momentoAcontecimento: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false}
                }
            })
        }
        if(valor === 'Mensal'){
            this.setState({
                envioNotif: valor,
                idRegular: 4,
                mensagens: {
                    semanaAntes: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    dias3: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    diaAnterior: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    diaProprio: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    horaEspecifica: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    imediato: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    intervaloHoras: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    horaAntes: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    meiaHora: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    quartoHora: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    minutos5: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    momentoAcontecimento: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false}
                }
            })
        }
    }

    alteraHorario = (valor) => {
        this.setState({
            horario: valor
        })
    }

    alteraDiaUnico = (valor) => {
        var newDateOptions = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        }
       const data = valor.toLocaleDateString('en-US', newDateOptions);

        this.setState({
            diaUnico: data
        })
    }

    alteraHora = (valor) => {
        this.setState({
            hora: valor.target.value
        })
    }

    alteraDataFim = (valor) => {
        this.setState({
            dataFim: valor.target.value
        })
    }

    alteraRegularidade = (valor) => {
        if(valor.target.value === "Pontual" && this.state.tipologia !== 'Informação'){
            this.setState({
                regularidade: valor.target.value,
                envioNotif: "Pontual",
                momentoUnico: 'Imediato',
                mensagens: {
                    semanaAntes: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    dias3: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    diaAnterior: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    diaProprio: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    horaEspecifica: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    imediato: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    intervaloHoras: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    horaAntes: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    meiaHora: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    quartoHora: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    minutos5: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    momentoAcontecimento: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false}
                }
            })
        } else if(valor.target.value === "Pontual" && this.state.tipologia === 'Informação') {
            this.setState({
                regularidade: valor.target.value,
                envioNotif: "Pontual",
                momentoUnico: 'Dia e Hora',
                mensagens: {
                    semanaAntes: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    dias3: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    diaAnterior: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    diaProprio: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    horaEspecifica: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    imediato: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    intervaloHoras: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    horaAntes: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    meiaHora: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    quartoHora: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    minutos5: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    momentoAcontecimento: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false}
                }
            })
        } else{
            this.setState({
                regularidade: valor.target.value,
                envioNotif: "Diária",
                momentoUnico: "",
                mensagens: {
                    semanaAntes: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    dias3: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    diaAnterior: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    diaProprio: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    horaEspecifica: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    imediato: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    intervaloHoras: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    horaAntes: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    meiaHora: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    quartoHora: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    minutos5: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    momentoAcontecimento: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false}
                }
            })
        }
    }

    alteraMomentoUnico = (valor) => {
        this.setState({
            momentoUnico: valor,
            mensagens: {
                semanaAntes: {
                    active: false, 
                    message: '',
                    tituloBlade: '',
                    descricao: '',
                    persVal: false},
                dias3: {
                    active: false, 
                    message: '',
                    tituloBlade: '',
                    descricao: '',
                    persVal: false},
                diaAnterior: {
                    active: false, 
                    message: '',
                    tituloBlade: '',
                    descricao: '',
                    persVal: false},
                diaProprio: {
                    active: false, 
                    message: '',
                    tituloBlade: '',
                    descricao: '',
                    persVal: false},
                horaEspecifica: {
                    active: false, 
                    message: '',
                    tituloBlade: '',
                    descricao: '',
                    persVal: false},
                imediato: {
                    active: false, 
                    message: '',
                    tituloBlade: '',
                    descricao: '',
                    persVal: false},
                intervaloHoras: {
                    active: false, 
                    message: '',
                    tituloBlade: '',
                    descricao: '',
                    persVal: false},
                horaAntes: {
                    active: false, 
                    message: '',
                    tituloBlade: '',
                    descricao: '',
                    persVal: false},
                meiaHora: {
                    active: false, 
                    message: '',
                    tituloBlade: '',
                    descricao: '',
                    persVal: false},
                quartoHora: {
                    active: false, 
                    message: '',
                    tituloBlade: '',
                    descricao: '',
                    persVal: false},
                minutos5: {
                    active: false, 
                    message: '',
                    tituloBlade: '',
                    descricao: '',
                    persVal: false},
                momentoAcontecimento: {
                    active: false, 
                    message: '',
                    tituloBlade: '',
                    descricao: '',
                    persVal: false}
            }
        })
    }

    onOpen = () => this.setState({mostraModal: true});
    onClose = () => this.setState({mostraModal: false});
    onOpenInfo = () => this.setState({mostraModalInfo: true});
    onCloseInfo = () => this.setState({mostraModalInfo: false});


    alteraDia = (dia) => {
        this.setState({
            dias: {
                ...this.state.dias,
                [dia.target.value]: !this.state.dias[dia.target.value]
            }
        })
    }

    alteraTexto = (e) => {
        this.setState({
            [e.currentTarget.id]: e.currentTarget.value
        })
    }

    alteraIcone = (valor, tipo) => {
        if(valor === "icone") {
            this.setState({
                paramsPersonalizado:{
                    ...this.state.paramsPersonalizado,
                    icone: tipo,
                }
            })
        } else if(valor === "temIcone" || this.state.paramsPersonalizado.usaIcone === "Não"){
            this.setState({
                paramsPersonalizado:{
                    ...this.state.paramsPersonalizado,
                    usaIcone: "Sim",
                }
            })
        } else {
            this.setState({
                paramsPersonalizado:{
                    ...this.state.paramsPersonalizado,
                    usaIcone: "Não",
                }
            })
        }
    }

    alteraRecetoresIndividual = (valor) => {
        if(valor === 'Casas'){
            this.setState({
                paramsPersonalizado:{
                    ...this.state.paramsPersonalizado,
                    tipoRecetor: "Casas",
                }
            })
        } else {
            this.setState({
                paramsPersonalizado:{
                    ...this.state.paramsPersonalizado,
                    tipoRecetor: "Recetores Individuais",
                }
            })
        }
    }

    alteraMomento = (valor) => {
        this.setState({
            paramsPersonalizado:{
                ...this.state.paramsPersonalizado,
                momentoEnvio: valor
            }
        })
    }

    escolheRecetores = (e) => {
        if(e === "Individuais") {
            this.setState({
                recetores: "Individuais"
            })
        } else {
            this.setState({
                recetores: "Grupos"
            })
        }
    }

    mudaCollapse = (val) => {
        let string = `collapse${val}`;

        this.setState({
            colapsado: {
                ...this.state.colapsado,
                [string]: !this.state.colapsado[string]
            }
        })
        
    }

    updateMomentosEnvio = (val) => {
        let escolhido = val.target.value;
        this.setState({
            mensagens:{
                ...this.state.mensagens,
                [escolhido]: {
                    ...this.state.mensagens[escolhido],
                    active: !this.state.mensagens[escolhido].active
                }
            }
        })
    }
    
    updatePersCheck = (val, pick) => {
        //console.log(val, pick)
        this.setState({
            mensagens:{
                ...this.state.mensagens,
                [val]: {
                    ...this.state.mensagens[val],
                    persVal: pick
                }
            }
        })
    }

    updateMensagensEnvio = (val) => {
        let escolhido = val.target.id;
        let escrito = val.target.value
        this.setState({
            mensagens:{
                ...this.state.mensagens,
                [escolhido]: {
                    ...this.state.mensagens[escolhido],
                    message: escrito
                }
            }
        })
    }

    updateBlade = (val) => {
        let escolhido = val.target.id;
        let escrito = val.target.value;
        if(escolhido === 'semanaAntesTituloBlade'){
            this.setState({
                mensagens:{
                    ...this.state.mensagens,
                    semanaAntes: {
                        ...this.state.mensagens.semanaAntes,
                        tituloBlade: escrito
                    }
                }
            })
        } else if(escolhido === 'semanaAntesDescricaoBlade'){
            this.setState({
                mensagens:{
                    ...this.state.mensagens,
                    semanaAntes: {
                        ...this.state.mensagens.semanaAntes,
                        descricao: escrito
                    }
                }
            })
        } else if(escolhido === 'dias3TituloBlade'){
            this.setState({
                mensagens:{
                    ...this.state.mensagens,
                    dias3: {
                        ...this.state.mensagens.dias3,
                        tituloBlade: escrito
                    }
                }
            })
        } else if(escolhido === 'dias3DescricaoBlade'){
            this.setState({
                mensagens:{
                    ...this.state.mensagens,
                    dias3: {
                        ...this.state.mensagens.dias3,
                        descricao: escrito
                    }
                }
            })
        } else if(escolhido === 'diaAnteriorTituloBlade'){
            this.setState({
                mensagens:{
                    ...this.state.mensagens,
                    diaAnterior: {
                        ...this.state.mensagens.diaAnterior,
                        tituloBlade: escrito
                    }
                }
            })
        } else if(escolhido === 'diaAnteriorDescricaoBlade'){
            this.setState({
                mensagens:{
                    ...this.state.mensagens,
                    diaAnterior: {
                        ...this.state.mensagens.diaAnterior,
                        descricao: escrito
                    }
                }
            })
        } else if(escolhido === 'diaProprioTituloBlade'){
            this.setState({
                mensagens:{
                    ...this.state.mensagens,
                    diaProprio: {
                        ...this.state.mensagens.diaProprio,
                        tituloBlade: escrito
                    }
                }
            })
        } else if(escolhido === 'diaProprioDescricaoBlade'){
            this.setState({
                mensagens:{
                    ...this.state.mensagens,
                    diaProprio: {
                        ...this.state.mensagens.diaProprio,
                        descricao: escrito
                    }
                }
            })
        } else if(escolhido === 'horaAntesTituloBlade'){
            this.setState({
                mensagens:{
                    ...this.state.mensagens,
                    horaAntes: {
                        ...this.state.mensagens.horaAntes,
                        tituloBlade: escrito
                    }
                }
            })
        } else if(escolhido === 'horaAntesDescricaoBlade'){
            this.setState({
                mensagens:{
                    ...this.state.mensagens,
                    horaAntes: {
                        ...this.state.mensagens.horaAntes,
                        descricao: escrito
                    }
                }
            })
        } else if(escolhido === 'meiaHoraTituloBlade'){
            this.setState({
                mensagens:{
                    ...this.state.mensagens,
                    meiaHora: {
                        ...this.state.mensagens.meiaHora,
                        tituloBlade: escrito
                    }
                }
            })
        } else if(escolhido === 'meiaHoraDescricaoBlade'){
            this.setState({
                mensagens:{
                    ...this.state.mensagens,
                    meiaHora: {
                        ...this.state.mensagens.meiaHora,
                        descricao: escrito
                    }
                }
            })
        } else if(escolhido === 'quartoHoraTituloBlade'){
            this.setState({
                mensagens:{
                    ...this.state.mensagens,
                    quartoHora: {
                        ...this.state.mensagens.quartoHora,
                        tituloBlade: escrito
                    }
                }
            })
        } else if(escolhido === 'quartoHoraDescricaoBlade'){
            this.setState({
                mensagens:{
                    ...this.state.mensagens,
                    quartoHora: {
                        ...this.state.mensagens.quartoHora,
                        descricao: escrito
                    }
                }
            })
        } else if(escolhido === 'minutos5TituloBlade'){
            this.setState({
                mensagens:{
                    ...this.state.mensagens,
                    minutos5: {
                        ...this.state.mensagens.minutos5,
                        tituloBlade: escrito
                    }
                }
            })
        } else if(escolhido === 'minutos5DescricaoBlade'){
            this.setState({
                mensagens:{
                    ...this.state.mensagens,
                    minutos5: {
                        ...this.state.mensagens.minutos5,
                        descricao: escrito
                    }
                }
            })
        } else if(escolhido === 'momentoAcontecimentoTituloBlade'){
            this.setState({
                mensagens:{
                    ...this.state.mensagens,
                    momentoAcontecimento: {
                        ...this.state.mensagens.momentoAcontecimento,
                        tituloBlade: escrito
                    }
                }
            })
        } else if(escolhido === 'momentoAcontecimentoDescricaoBlade') {
            this.setState({
                mensagens:{
                    ...this.state.mensagens,
                    momentoAcontecimento: {
                        ...this.state.mensagens.momentoAcontecimento,
                        descricao: escrito
                    }
                }
            })
        } else if(escolhido === 'imediatoTituloBlade'){
            this.setState({
                mensagens:{
                    ...this.state.mensagens,
                    imediato: {
                        ...this.state.mensagens.imediato,
                        tituloBlade: escrito
                    }
                }
            })
        } else {
            this.setState({
                mensagens:{
                    ...this.state.mensagens,
                    imediato: {
                        ...this.state.mensagens.imediato,
                        descricao: escrito
                    }
                }
            })
        }
    }

    addUser = (val) => {
        this.setState({
            usersEscolhidos: [...this.state.usersEscolhidos, val]
        })
    }

    alteraDia = (val) => {
        this.setState({
            dias: {
                ...this.state.dias,
                [val.target.value]: !this.state.dias[val.target.value]
            }
        })
    }

    alteraDiaMes = (val) => {
        this.setState({
            diaMes: val
        })
    }

    removeUser = (val) => {
        let array = [...this.state.usersEscolhidos];
        array.splice(val, 1)
        this.setState({
            usersEscolhidos: array
        })
    }

    addCasa = (val) => {
        this.setState({
            casasEscolhidas: [...this.state.casasEscolhidas, val]
        })
    }

    removeCasa = (val) => {
        let array = [...this.state.casasEscolhidas];
        array.splice(val, 1)
        this.setState({
            casasEscolhidas: array
        })
    }

    mudaCanal = (name, idChannel) => {
        this.setState({
            canal: {
                nome: name,
                id: idChannel
            }
        })
    }

    componentDidMount = () => {
        //console.log(this.props)
        let data = new Date();
        let horaFinal = `${data.getHours() < 10 ? `0${data.getHours()}` : data.getHours()}:${data.getMinutes() < 10 ? '0' + data.getMinutes() : data.getMinutes()}`
        let DataFinal = data.getFullYear() + '-' + ((data.getMonth() > 8) ? (data.getMonth() + 1) : ('0' + (data.getMonth() + 1))) + '-' + ((data.getDate() > 9) ? data.getDate() : ('0' + data.getDate()));

        if(Object.keys(this.props.event).length !== 0){
            let array = [];

            var reg = {
                regularidade: '',
                idReg: null,
                envio: '',
                momento: ''
            }

            var diasNew = {
                domingo0: false,
                segunda1: false,
                terca2: false,
                quarta3: false,
                quinta4: false,
                sexta5: false,
                sabado6: false
            }

            this.props.event.users.map(item => {
                array.push({idCasa: item.id_casa, nomeCasa: item.nomeCasa, idUser: item.id_utilizador, nome: item.nomeUser})
            })

            if(this.props.event.regularidade === 'Pontual'){
                reg = {
                    regularidade: this.props.event.regularidade,
                    idReg: 1,
                    envio: 'Pontual',
                    momento: 'Dia e Hora'
                }
            } else if(this.props.event.regularidade === 'Diária'){
                reg = {
                    regularidade: 'Regular',
                    idReg: 2,
                    envio: this.props.event.regularidade
                }
            } else if(this.props.event.regularidade === 'Semanal'){
                reg = {
                    regularidade: 'Regular',
                    idReg: 3,
                    envio: this.props.event.regularidade
                }
                this.props.event.dias.map(item => {
                    Object.keys(diasNew).map(val => {
                        var lastChar = val.substr(val.length - 1);
                        var number = parseInt(lastChar)
                        if(number == item){
                            diasNew = {
                                ...diasNew,
                                [val]: true
                            }
                        }
                    })
                })
            } else {
                reg = {
                    regularidade: 'Regular',
                    idReg: 4,
                    envio: this.props.event.regularidade
                }
            }
    
            this.setState({
                mostraModal: false,
                mostraModalInfo: false,
                id_evento: this.props.event.id_evento,
                tipologia: this.props.event.tipologia,
                idTipologia: 1,
                categoriaInfo: "",
                nomeItem: this.props.event.nome,
                regularidade: reg.regularidade,
                envioNotif: reg.envio,
                idRegular: reg.idReg,
                diaUnico: '',
                hora: horaFinal,
                momentoUnico: reg.momento,
                usersEscolhidos: array,
                casasEscolhidas: [],
                tipoPersonalizado: 'Relembra',
                diaMes: '',
                dataFim: DataFinal,
                canal: {
                    nome: '',
                    id: ''
                },
                dias: {
                    domingo0: diasNew.domingo0,
                    segunda1: diasNew.segunda1,
                    terca2: diasNew.terca2,
                    quarta3: diasNew.quarta3,
                    quinta4: diasNew.quinta4,
                    sexta5: diasNew.sexta5,
                    sabado6: diasNew.sabado6
                },
                paramsPersonalizado: {
                    usaIcone: "Não",
                    icone: "Agenda",
                    tipoRecetor: 'Recetores Individuais'
                },
                colapsado: {
                    collapse1: false,
                    collapse2: false,
                    collapse3: false,
                    collapse4: false
                },
                mensagens: {
                    semanaAntes: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    dias3: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    diaAnterior: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    diaProprio: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    horaEspecifica: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    imediato: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    intervaloHoras: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    horaAntes: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    meiaHora: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    quartoHora: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    minutos5: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false},
                    momentoAcontecimento: {
                        active: false, 
                        message: '',
                        tituloBlade: '',
                        descricao: '',
                        persVal: false}
                }
            })
        }
    }

    render(){
        //console.log(this.state)
        if(Object.keys(this.props.event).length === 0){
            return(
                <div>
                    <div className='mainBodyForm container px-0'>
                        <Navbar/>
                        <Header nome="Editar Evento" detalhe="sim" apagaMuda="nao"/>
                        <div>
                            <MandaEmbora/>
                        </div>
                    </div>
                </div>
            )
        }
        
        return(
            <div>
                <div className='mainBodyForm container px-0'>
                    <Navbar/>
                    <Header nome="Editar Evento" detalhe="sim" apagaMuda="nao"/>
                    <PreviewNotif tipo={this.state.tipologia} tipoPers={this.state.paramsPersonalizado.tipoRecetor} users={this.state.usersEscolhidos} casas={this.state.casasEscolhidas} personalizado={this.state.paramsPersonalizado} mensagens={this.state.mensagens} titulo={this.state.nomeItem} sub={this.state.categoriaInfo}/>
                    <div>
                        <div className='btn btnSeccao ms-0' onClick={() => this.mudaCollapse(1)}>
                            <h1 className='tituloSeccaoPaginaNotifs'>Tipologia</h1>
                            <img src={DownArrow} className={this.state.colapsado.collapse1 !== true ? "ArrowDown" : "ArrowDownRotated"}/>
                        </div>
                        <Collapse in={this.state.colapsado.collapse1}>
                            <div className='row m-0' style={{padding: "0 40px"}}>
                                <span className='col-3 me-3' style={{marginTop: "5px"}}>
                                    <p className='subtituloSeccaoPagina' style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>Categoria principal <span className='ms-1 obrigatorio'>*</span><OverlayTrigger placement='right' delay={{ show: 250, hide: 400}} overlay={CategoryTooltip}><img src={InformationIcon} style={{width: 'auto', height: '20px', margin: '0', marginLeft:'10px', padding: '0'}}/></OverlayTrigger></p>
                                    <BuscaTipologiasNotificacoes tipo={this.state.tipologia} mudaForm={this.alteraFormulario} />
                                </span>

                                <span className='col-3 p-0 me-3'>
                                    <p className='subtituloSeccaoPagina p-0' style={{ marginTop: "5px"}}>Subcategoria</p>
                                    {this.state.tipologia === "Informação" ?
                                    <Dropdown>
                                        <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                                            {this.state.categoriaInfo}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className='dropdownFiltro'>
                                            <Dropdown.Item onClick={() => this.alteraFormulario(this.state.tipologia, this.state.idTipologia, "Combustíveis")}>Combustíveis</Dropdown.Item>
                                            <Dropdown.Item onClick={() => this.alteraFormulario(this.state.tipologia, this.state.idTipologia, "Farmácias de Serviço")}>Farmácias de Serviço</Dropdown.Item>
                                            <Dropdown.Item onClick={() => this.alteraFormulario(this.state.tipologia, this.state.idTipologia, "Feriados")}>Feriados</Dropdown.Item>
                                            <Dropdown.Item onClick={() => this.alteraFormulario(this.state.tipologia, this.state.idTipologia, "Greves")}>Greves</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    :
                                    <Dropdown>
                                        <Dropdown.Toggle variant="custom" disabled className='dropdownFiltro'>
                                            Não tem subcategoria
                                        </Dropdown.Toggle>
                                    </Dropdown>
                                    }
                                </span>

                                {this.state.tipologia === "Personalizada" ?
                                <span className='col-3 p-0 me-3'>
                                    <p className='subtituloSeccaoPagina p-0' style={{ marginTop: "5px"}}>Tipo de blade</p>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                                            {this.state.tipoPersonalizado === "Relembra" ? 'Relembrar em 15 minutos' : 'Jogo do Gabriel'}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className='dropdownFiltro'>
                                            <Dropdown.Item onClick={() => this.mudaTipoPersonalizado("Relembra")}>Relembrar em 15 minutos</Dropdown.Item>
                                            <Dropdown.Item onClick={() => this.mudaTipoPersonalizado("Jogo")}>Jogo do Gabriel</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </span>
                                :
                                <></>
                                }

                                {<div className='row m-0 mt-2 p-0'>
                                    {this.state.tipologia === "Personalizada" ?
                                    <span className='col-3 me-2'>
                                        <p className='subtituloSeccaoPagina'>Usar ícone?</p>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                                                {this.state.paramsPersonalizado.usaIcone}
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className='dropdownFiltro'>
                                                <Dropdown.Item onClick={() => this.alteraIcone("temIcone")}>Sim</Dropdown.Item>
                                                <Dropdown.Item onClick={() => this.alteraIcone("temIcone")}>Não</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </span>
                                    :
                                    <></>
                                    }
                                    {this.state.tipologia === "Personalizada" && this.state.paramsPersonalizado.usaIcone === "Sim" ?
                                    <span className='col-3'>
                                        <p className='subtituloSeccaoPagina'>Ícone da notificação</p>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                                                {this.state.paramsPersonalizado.icone}
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className='dropdownFiltro'>
                                                <Dropdown.Item onClick={() => this.alteraIcone("icone", "Agenda")}>Agenda</Dropdown.Item>
                                                <Dropdown.Item onClick={() => this.alteraIcone("icone", "Programas")}>Programas</Dropdown.Item>
                                                <Dropdown.Item onClick={() => this.alteraIcone("icone", "Informação")}>Informação</Dropdown.Item>
                                                <Dropdown.Item onClick={() => this.alteraIcone("icone", "Saúde")}>Saúde</Dropdown.Item>
                                                <Dropdown.Item onClick={() => this.alteraIcone("icone", "Serviços")}>Serviços</Dropdown.Item>
                                                <Dropdown.Item onClick={() => this.alteraIcone("icone", "Social")}>Social</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </span>
                                    :
                                    <></>
                                    }
                                </div>}
                            </div>
                        </Collapse>
                    </div>

                    <div className='row m-0 mt-2'>
                        <div className='btn btnSeccao' onClick={() => this.mudaCollapse(3)}>
                            <h1 className='tituloSeccaoPaginaNotifs'>Dados do evento</h1>
                            <img src={DownArrow} className={this.state.colapsado.collapse3 !== true ? "ArrowDown" : "ArrowDownRotated"}/>
                        </div>
                        <Collapse in={this.state.colapsado.collapse3}>
                            <span className='row m-0' style={{padding: "0 40px"}}>
                                <div className='row col-12'>
                                    
                                    <span className='row m-0 col-12 pe-0'>
                                        <p className='subtituloSeccaoPagina p-0' style={{marginTop: "5px"}}>Nome do evento <span className='obrigatorio'>*</span></p>
                                        <input type="text" className='inputsForms' id='nomeItem' value={this.state.nomeItem} onChange={this.alteraTexto} maxLength="50"/>
                                    </span>

                                    <span className='row m-0 col-12 mt-1'>
                                        <p className='subtituloSeccaoPagina p-0' style={{marginTop: "5px"}}>Regularidade do evento <span className='obrigatorio'>*</span></p>
                                        <Form.Check 
                                            type="radio" 
                                            inline 
                                            name="radios"
                                            id="Pontual" 
                                            key="Pontual" 
                                            checked={this.state.regularidade === 'Pontual' ? true : false}
                                            value="Pontual"
                                            label='Pontual'
                                            onChange={this.alteraRegularidade}
                                            />
                                        <Form.Check 
                                            type="radio" 
                                            inline
                                            name="radios" 
                                            id="Regular" 
                                            key="Regular"
                                            checked={this.state.regularidade === 'Regular' ? true : false} 
                                            value="Regular"
                                            label='Regular'
                                            onChange={this.alteraRegularidade}
                                            />
                                    </span>
                                    <NotificationTimeSelection collapseState={this.state.colapsado} mudaDataFim={this.alteraDataFim} parametros={this.state} mudaDiaUnico={this.alteraDiaUnico} alteraDiaMes={this.alteraDiaMes} mudaMomentoUnico={this.alteraMomentoUnico} mudaHora={this.alteraHora} mudaHorario={this.alteraHorario} alterarEnvio={this.alteraEnvio} mudaDia={this.alteraDia} mudaMomento={this.alteraMomento}/>                    
                                </div>
                                {this.state.tipologia === 'Programas' ? 
                                <div className='row col-12 mt-2'>
                                    <span className='row m-0 col-12 pe-0'>
                                        <p className='subtituloSeccaoPagina p-0' style={{marginTop: "5px"}}>Escolha do canal <span className='obrigatorio'>*</span></p>
                                        <span className='col-3 ps-0 pe-3'>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                                                    {this.state.canal.nome === '' ? 'Canal' : this.state.canal.nome}
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu className='dropdownFiltro'>
                                                    {ListaMeo.map((item, key) => {
                                                        return(
                                                            <Dropdown.Item onClick={() => this.mudaCanal(item.name, item.channel)}>{item.name}</Dropdown.Item>
                                                        )
                                                    })}
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </span>
                                    </span>
                                </div>
                                :
                                this.state.tipologia === 'Serviços' ? 
                                <div className='row col-12 mt-2'>
                                    <span className='row m-0 col-12 pe-0'>
                                        <p className='subtituloSeccaoPagina p-0' style={{marginTop: "5px"}}>Escolha da aplicação <span className='obrigatorio'>*</span></p>
                                        <span className='col-3 ps-0 pe-3'>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                                                    {this.state.canal.nome === '' ? 'Aplicação' : this.state.canal.nome}
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu className='dropdownFiltro'>
                                                    {Apps.map((item, key) => {
                                                        return(
                                                            <Dropdown.Item onClick={() => this.mudaCanal(item.name, item.link)}>{item.name}</Dropdown.Item>
                                                        )
                                                    })}
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </span>
                                    </span>
                                </div>
                                :
                                <></>
                                }
                            </span>
                        </Collapse>
                    </div>

                    <div className='row m-0 mt-2'>
                        <div className='btn btnSeccao' onClick={() => this.mudaCollapse(2)}>
                            <h1 className='tituloSeccaoPaginaNotifs'>Destinarários das notificações</h1>
                            <img src={DownArrow} className={this.state.colapsado.collapse2 !== true ? "ArrowDown" : "ArrowDownRotated"}/>
                        </div>
                        <Collapse in={this.state.colapsado.collapse2}>
                            <div className='row m-0' style={{padding: "0 40px"}}>
                                
                                {this.state.tipologia === 'Personalizada' ?
                                <span className='col-3 me-3' style={{marginTop: "5px"}}>
                                    <p className='subtituloSeccaoPagina'>Tipo de destinarário <span className='obrigatorio'>*</span></p>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                                            {this.state.paramsPersonalizado.tipoRecetor}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className='dropdownFiltro'>
                                            <Dropdown.Item onClick={() => this.alteraRecetoresIndividual("Recetores Individuais")}>Recetores Individuais</Dropdown.Item>
                                            <Dropdown.Item onClick={() => this.alteraRecetoresIndividual("Casas")}>Casas</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </span>
                                :
                                <></>
                                }

                                <span className='row m-0'>
                                    <div className='col-6 ms-0 ps-0'>
                                        <h1 className='subtituloSeccaoPagina mt-3 mb-0'>Escolha de destinarários <span className='obrigatorio'>*</span></h1>
                                        {/*<p className='bigSmall mb-2'>No caso de eventos de Agenda e Saúde, só pode enviar para um utilizador.</p>*/}
                                    </div>
                                    <div className='col-6 ms-0 ps-0'>
                                        <h1 className='subtituloSeccaoPagina mt-3 mb-2'>Destinarários escolhidos</h1>
                                    </div>
                                </span>
                                <span className='row m-0'>
                                    {this.state.tipologia === 'Agenda' || this.state.tipologia === 'Programas' || this.state.tipologia === 'Saúde' || this.state.tipologia === 'Personalizada' && this.state.paramsPersonalizado.tipoRecetor === 'Recetores Individuais' ?
                                    <>
                                        <div className='col-6 ms-0 ps-0'>
                                            <ListaUsersPesquisa tipo={this.state.recetores} idTipologia={this.state.idTipologia} adiciona={this.addUser} adicionados={this.state.usersEscolhidos}/>
                                        </div>
                                        <div className='col-6 m-0 p-0'>
                                            <ListaUsersAdicionados adicionados={this.state.usersEscolhidos} remove={this.removeUser}/>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className='col-6 ms-0 ps-0'>
                                            <CasasPesquisa adiciona={this.addCasa} casasEscolhidas={this.state.casasEscolhidas}/>
                                        </div>
                                        <div className='col-6 m-0 p-0'>
                                            <CasasEscolhidas casas={this.state.casasEscolhidas} remove={this.removeCasa}/>
                                        </div>
                                    </>
                                    }
                                    
                                </span>
                            </div>
                        </Collapse>
                    </div>

                    <div className='row m-0 mt-2'>
                        <div className='btn btnSeccao' onClick={() => this.mudaCollapse(4)}>
                            <h1 className='tituloSeccaoPaginaNotifs'>Momentos e conteúdo das notificações</h1>
                            <img src={DownArrow} className={this.state.colapsado.collapse4 !== true ? "ArrowDown" : "ArrowDownRotated"}/>
                        </div>
                        <Collapse in={this.state.colapsado.collapse4}>
                            <span className='row m-0' style={{padding: "0 40px"}}>
                                <p className='subtituloSeccaoPaginaBigger mt-2'>Criação das notificações <OverlayTrigger placement='right' delay={{ show: 250, hide: 400}} overlay={MomentsTooltip}><img src={InformationIcon} style={{width: 'auto', height: '22px', margin: '0', marginLeft:'10px', padding: '0'}}/></OverlayTrigger></p>
                                <p className='bigSmall mb-1'>Selecione os momentos em que quer mandar notifições.</p>
                                <div className='row col-9'>
                                    <DeliveryOptions subSaude={this.state.categoriaInfo} changeMomento={this.updateMomentosEnvio} persChange={this.updatePersCheck} blade={this.updateBlade} changeMensagem={this.updateMensagensEnvio} momentos={this.state.mensagens} tipo={this.state.tipologia} verificaMomento={this.state.momentoUnico} periodicidade={this.state.envioNotif}/>
                                </div>

                                <div className='col-3 pe-0'>
                                    <Button  
                                        variant='flat' 
                                        onClick={() => this.onOpenInfo()}>Ver preferências dos utilizadores</Button>
                                </div>
                            </span>
                        </Collapse>
                    </div>

                    <span className='row m-0 mt-2 justify-content-end' style={{padding: "0 40px"}}>
                        <p className='col-2 indicaObrigatorio'>*Obrigatório</p>
                    </span>
                    <div className='row m-0' style={{padding: "0 40px"}}>
                        <SubmitButton params={this.state} openModal={this.onOpen} tipoForm="NotificationEdit"/>
                    </div>
                </div>
                <UserPreferencesModal show={this.state.mostraModalInfo} users={this.state.usersEscolhidos} onHide={this.onCloseInfo}/>
                <SuccessModal show={this.state.mostraModal} onHide={this.onClose} tiponotif="Editar"/>
            </div>
        )
    } 
}

const mapStateToProps = (state) => {

    return{
        event: state.eventos.singleEvent
    }
}


const MandaEmbora = () => {
    const navigate = useNavigate();
    setTimeout(function() {
        document.getElementById("botaozinho").click();
    }, 10)
    

    return(
        <button id='botaozinho' style={{display: 'none'}} onClick={() => navigate(-1)}></button>
    )
}

export default connect(mapStateToProps)(EditNotification);