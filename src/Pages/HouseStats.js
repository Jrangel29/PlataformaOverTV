import React, {useEffect, useState} from "react";
import "../Styles/Homepage.css";
import Navbar from '../Components/Geral/Navbar';
import Header from '../Components/Geral/Header';
import {AllNotifications, AllNotificationsDiaNoite, AllNotificationsBoaNoite, AllNotificationsBomDia} from '../Components/Stats/allNotifs'
import {TipologiaStats} from '../Components/Stats/Tipologias';
import { getHousesList, getHousePeopleList } from '../Store/Casas/Actions';
import { getStats } from '../Store/Notifications/Actions';
import { useSelector, useDispatch } from 'react-redux';
import { HouseSelectDropdown } from "../Components/Stats/HouseSelect";
import Loading from '../Pages/Loading';
//import axios from 'axios';

const HouseStats = () => {

    const dispatch = useDispatch();
    const arrayTipologias = ['Agenda', 'Programas', 'Informação', 'Saúde', 'Serviços', 'Personalizada'];
    const [casa, setCasa] = useState('');

    const notificationStats = useSelector(({ notificacoes }) => notificacoes.data)
    const isLoadingNotificationStats = useSelector(({ notificacoes }) => notificacoes.isLoadingAllStats)
    const casasList = useSelector(({ casas }) => casas.data)
    const isLoadingCasas = useSelector(({ casas }) => casas.isLoading)
    const casaInfo = useSelector(({ casas }) => casas.singleCasa)
    const isLoadingCasaInfo = useSelector(({ casas }) => casas.isLoadingPeople)

    useEffect(() => {
        dispatch(getStats());
        dispatch(getHousesList());
    }, [])

    useEffect(() => {
        if(!isLoadingCasas){
            casasList.map(item => {
                dispatch(getHousePeopleList(item.id_casa));
            })
            setCasa(casasList[0])
        }
    }, [isLoadingCasas])

    useEffect(() => {
        if(!isLoadingCasas){
            dispatch(getHousePeopleList(casa.id_casa));
        }
    }, [casa])

    if(isLoadingNotificationStats || isLoadingCasas || isLoadingCasaInfo){
        return(
            <Loading/>
        )
    }

    const atualizaCasa = (valor) => {
        setCasa(valor)
    }

    return (
      <div className='mainBodyForm container p-0'>
        <Navbar/>
        <Header nome="Estatísticas por casa" apagaMuda="nao"/>
        <HouseSelectDropdown casas={casasList} atual={casa} atualiza={atualizaCasa}/>
        <div>
            <div className='prevSeccao ms-0'>
                <h1 className='tituloSeccaoPaginaNotifs'>Estatísticas gerais</h1>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap'}}>
                <AllNotifications stats={notificationStats} geral={false} pessoas={casaInfo.utilizadores}/>
                <AllNotificationsDiaNoite stats={notificationStats} geral={false} pessoas={casaInfo.utilizadores}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px'}}>
                <AllNotificationsBomDia stats={notificationStats} geral={false} pessoas={casaInfo.utilizadores}/>
                <AllNotificationsBoaNoite stats={notificationStats} geral={false} pessoas={casaInfo.utilizadores}/>
            </div>
        </div>
        <div>
            <div className='prevSeccao ms-0'>
                <h1 className='tituloSeccaoPaginaNotifs'>Estatísticas de Tipologias</h1>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px'}}>
                {arrayTipologias.map((tipo, index) => {
                    return(
                        <>
                            <p className="w-100 textoTipologiaStats">{tipo}</p>
                            <TipologiaStats tipologia={tipo} valor={index+1} stats={notificationStats} geral={false} pessoas={casaInfo.utilizadores}/>
                        </>
                    )
                })}
            </div>
        </div>
      </div>
    );
}

export default HouseStats;
