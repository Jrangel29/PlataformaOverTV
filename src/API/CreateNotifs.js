const objectImagens = {
    "Agenda": "https://firebasestorage.googleapis.com/v0/b/tdi-rangel.appspot.com/o/iconeAgenda.png?alt=media&token=38fb87cc-f8fa-4015-a775-b4da0e6b9a77",
    "Saúde": "https://firebasestorage.googleapis.com/v0/b/tdi-rangel.appspot.com/o/iconeSaude.png?alt=media&token=fd1ae805-eea2-4dce-b4f8-4d904c4e65b4",
    "Programas": "https://firebasestorage.googleapis.com/v0/b/tdi-rangel.appspot.com/o/iconeProgramas.png?alt=media&token=3e89e385-5379-403a-93b5-d05f9efda5a6",
    "Informação": "https://firebasestorage.googleapis.com/v0/b/tdi-rangel.appspot.com/o/iconeInformacao.png?alt=media&token=e706c143-43d2-4625-af36-22a1a658ee30",
    "Serviços": "https://firebasestorage.googleapis.com/v0/b/tdi-rangel.appspot.com/o/iconeServicos.png?alt=media&token=2d858888-6925-482c-b2e5-2c89722e5626",
    'Social': 'https://firebasestorage.googleapis.com/v0/b/tdi-rangel.appspot.com/o/Social.png?alt=media&token=71468c63-2340-4eef-85a5-007f6f83b9f9'
}

export const GeraNotificacoes = (mensagens, dias, tipologia, horaEvento, tipo, regular, dia, iconePersonalizado, usaIcone, canal, tipoPersonalizado) => {
    
    let notificacoesFinal = [];
    
    if(mensagens.semanaAntes.active === true){
        if(regular === 'Unico') {
            dias.diasEvento.map(item => {
                if(item.name === 'semanaAntes'){
                    if(tipologia === 'Agenda'){
                        notificacoesFinal.push({
                            mensagem: mensagens.semanaAntes.message,
                            titulo: null,
                            descricao: null,
                            botao_titulo: null,
                            botao_navigate: null,
                            url_icone: objectImagens[tipologia],
                            data: item.data,
                            hora: horaEvento,
                            rotina: null,
                            zapping: 1
                        })
                    } else {
                        notificacoesFinal.push({
                            mensagem: mensagens.semanaAntes.message,
                            titulo: null,
                            descricao: null,
                            botao_titulo: null,
                            botao_navigate: null,
                            url_icone: objectImagens[tipologia],
                            data: item.data,
                            hora: horaEvento,
                            rotina: null,
                            zapping: 0
                        })
                    }
                }
            })
        } else if (regular === 'Mensal'){
            dias.diasMensagens.semanaAntes.map(item => {
                if(tipologia === 'Agenda'){
                    notificacoesFinal.push({
                        mensagem: mensagens.semanaAntes.message,
                        titulo: null,
                        descricao: null,
                        botao_titulo: null,
                        botao_navigate: null,
                        url_icone: objectImagens[tipologia],
                        data: item,
                        hora: horaEvento,
                        rotina: null,
                        zapping: 1
                    })
                } else if(tipologia === 'Personalizada' && usaIcone === 'Sim') {
                    if(mensagens.semanaAntes.persVal === false){
                        notificacoesFinal.push({
                            mensagem: mensagens.semanaAntes.message,
                            titulo: null,
                            descricao: null,
                            botao_titulo: null,
                            botao_navigate: null,
                            url_icone: objectImagens[iconePersonalizado],
                            data: item,
                            hora: horaEvento,
                            rotina: null,
                            zapping: 0
                        })
                    } else {
                        if(tipoPersonalizado === 'Jogo') {
                            notificacoesFinal.push({
                                mensagem: mensagens.semanaAntes.message,
                                titulo: mensagens.semanaAntes.tituloBlade,
                                descricao: mensagens.semanaAntes.descricao,
                                botao_titulo: 'Abrir o jogo',
                                botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                                url_icone: objectImagens[iconePersonalizado],
                                data: item,
                                hora: horaEvento,
                                rotina: null,
                                zapping: 0
                            })
                        } else {
                            notificacoesFinal.push({
                                mensagem: mensagens.semanaAntes.message,
                                titulo: mensagens.semanaAntes.tituloBlade,
                                descricao: mensagens.semanaAntes.descricao,
                                botao_titulo: null,
                                botao_navigate: null,
                                url_icone: objectImagens[iconePersonalizado],
                                data: item,
                                hora: horaEvento,
                                rotina: null,
                                zapping: 0
                            })
                        }
                    }
                } else if(tipologia === 'Personalizada' && usaIcone === 'Não') {
                    if(mensagens.semanaAntes.persVal === false){
                        notificacoesFinal.push({
                            mensagem: mensagens.semanaAntes.message,
                            titulo: null,
                            descricao: null,
                            botao_titulo: null,
                            botao_navigate: null,
                            url_icone: null,
                            data: item,
                            hora: horaEvento,
                            rotina: null,
                            zapping: 0
                        })
                    } else {
                        if(tipoPersonalizado === 'Jogo') {
                            notificacoesFinal.push({
                                mensagem: mensagens.semanaAntes.message,
                                titulo: mensagens.semanaAntes.tituloBlade,
                                descricao: mensagens.semanaAntes.descricao,
                                botao_titulo: 'Abrir o jogo',
                                botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                                url_icone: null,
                                data: item,
                                hora: horaEvento,
                                rotina: null,
                                zapping: 0
                            })
                        } else {
                            notificacoesFinal.push({
                                mensagem: mensagens.semanaAntes.message,
                                titulo: mensagens.semanaAntes.tituloBlade,
                                descricao: mensagens.semanaAntes.descricao,
                                botao_titulo: null,
                                botao_navigate: null,
                                url_icone: null,
                                data: item,
                                hora: horaEvento,
                                rotina: null,
                                zapping: 0
                            })
                        }
                    }
                } else {
                    notificacoesFinal.push({
                        mensagem: mensagens.semanaAntes.message,
                        titulo: null,
                        descricao: null,
                        botao_titulo: null,
                        botao_navigate: null,
                        url_icone: objectImagens[tipologia],
                        data: item,
                        hora: horaEvento,
                        rotina: null,
                        zapping: 0
                    })
                }
            })
        }
    }

    if(mensagens.dias3.active === true){
        if(regular === 'Unico') {
            dias.diasEvento.map(item => {
                if(item.name === 'dias3'){
                    if(tipologia === 'Agenda'){
                        notificacoesFinal.push({
                            mensagem: mensagens.dias3.message,
                            titulo: null,
                            descricao: null,
                            botao_titulo: null,
                            botao_navigate: null,
                            url_icone: objectImagens[tipologia],
                            data: item.data,
                            hora: horaEvento,
                            rotina: null,
                            zapping: 1
                        })
                    } else if(tipologia === 'Personalizada' && usaIcone === 'Sim') {
                        if(mensagens.dias3.persVal === false){
                            notificacoesFinal.push({
                                mensagem: mensagens.dias3.message,
                                titulo: null,
                                descricao: null,
                                botao_titulo: null,
                                botao_navigate: null,
                                url_icone: objectImagens[iconePersonalizado],
                                data: item.data,
                                hora: horaEvento,
                                rotina: null,
                                zapping: 0
                            })
                        } else {
                            if(tipoPersonalizado === 'Jogo') {
                                notificacoesFinal.push({
                                    mensagem: mensagens.dias3.message,
                                    titulo: mensagens.dias3.tituloBlade,
                                    descricao: mensagens.dias3.descricao,
                                    botao_titulo: 'Abrir o jogo',
                                    botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                                    url_icone: objectImagens[iconePersonalizado],
                                    data: item.data,
                                    hora: horaEvento,
                                    rotina: null,
                                    zapping: 0
                                })
                            } else {
                                notificacoesFinal.push({
                                    mensagem: mensagens.dias3.message,
                                    titulo: mensagens.dias3.tituloBlade,
                                    descricao: mensagens.dias3.descricao,
                                    botao_titulo: null,
                                    botao_navigate: null,
                                    url_icone: objectImagens[iconePersonalizado],
                                    data: item.data,
                                    hora: horaEvento,
                                    rotina: null,
                                    zapping: 0
                                })
                            }
                        }
                    } else if(tipologia === 'Personalizada' && usaIcone === 'Não') {
                        if(mensagens.dias3.persVal === false){
                            notificacoesFinal.push({
                                mensagem: mensagens.dias3.message,
                                titulo: null,
                                descricao: null,
                                botao_titulo: null,
                                botao_navigate: null,
                                url_icone: null,
                                data: item.data,
                                hora: horaEvento,
                                rotina: null,
                                zapping: 0
                            })
                        } else {
                            if(tipoPersonalizado === 'Jogo') {
                                notificacoesFinal.push({
                                    mensagem: mensagens.dias3.message,
                                    titulo: mensagens.dias3.tituloBlade,
                                    descricao: mensagens.dias3.descricao,
                                    botao_titulo: 'Abrir o jogo',
                                    botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                                    url_icone: null,
                                    data: item.data,
                                    hora: horaEvento,
                                    rotina: null,
                                    zapping: 0
                                })
                            } else {
                                notificacoesFinal.push({
                                    mensagem: mensagens.dias3.message,
                                    titulo: mensagens.dias3.tituloBlade,
                                    descricao: mensagens.dias3.descricao,
                                    botao_titulo: null,
                                    botao_navigate: null,
                                    url_icone: null,
                                    data: item.data,
                                    hora: horaEvento,
                                    rotina: null,
                                    zapping: 0
                                })
                            }
                        }
                    } else {
                        notificacoesFinal.push({
                            mensagem: mensagens.dias3.message,
                            titulo: null,
                            descricao: null,
                            botao_titulo: null,
                            botao_navigate: null,
                            url_icone: objectImagens[tipologia],
                            data: item.data,
                            hora: horaEvento,
                            rotina: null,
                            zapping: 0
                        })
                    }
                }
            })
        } else if(regular === 'Mensal' || regular === 'Semanal') {
            dias.diasMensagens.dias3.map(item => {
                if(tipologia === 'Agenda'){
                    notificacoesFinal.push({
                        mensagem: mensagens.dias3.message,
                        titulo: null,
                        descricao: null,
                        botao_titulo: null,
                        botao_navigate: null,
                        url_icone: objectImagens[tipologia],
                        data: item,
                        hora: horaEvento,
                        rotina: null,
                        zapping: 1
                    })
                } else if(tipologia === 'Personalizada' && usaIcone === 'Sim') {
                    if(mensagens.dias3.persVal === false){
                        notificacoesFinal.push({
                            mensagem: mensagens.dias3.message,
                            titulo: null,
                            descricao: null,
                            botao_titulo: null,
                            botao_navigate: null,
                            url_icone: objectImagens[iconePersonalizado],
                            data: item,
                            hora: horaEvento,
                            rotina: null,
                            zapping: 0
                        })
                    } else {
                        if(tipoPersonalizado === 'Jogo') {
                            notificacoesFinal.push({
                                mensagem: mensagens.dias3.message,
                                titulo: mensagens.dias3.tituloBlade,
                                descricao: mensagens.dias3.descricao,
                                botao_titulo: 'Abrir o jogo',
                                botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                                url_icone: objectImagens[iconePersonalizado],
                                data: item,
                                hora: horaEvento,
                                rotina: null,
                                zapping: 0
                            })
                        } else {
                            notificacoesFinal.push({
                                mensagem: mensagens.dias3.message,
                                titulo: mensagens.dias3.tituloBlade,
                                descricao: mensagens.dias3.descricao,
                                botao_titulo: null,
                                botao_navigate: null,
                                url_icone: objectImagens[iconePersonalizado],
                                data: item,
                                hora: horaEvento,
                                rotina: null,
                                zapping: 0
                            })
                        }
                    }
                } else if(tipologia === 'Personalizada' && usaIcone === 'Não') {
                    if(mensagens.dias3.persVal === false){
                        notificacoesFinal.push({
                            mensagem: mensagens.dias3.message,
                            titulo: null,
                            descricao: null,
                            botao_titulo: null,
                            botao_navigate: null,
                            url_icone: null,
                            data: item,
                            hora: horaEvento,
                            rotina: null,
                            zapping: 0
                        })
                    } else {
                        if(tipoPersonalizado === 'Jogo') {
                            notificacoesFinal.push({
                                mensagem: mensagens.dias3.message,
                                titulo: mensagens.dias3.tituloBlade,
                                descricao: mensagens.dias3.descricao,
                                botao_titulo: 'Abrir o jogo',
                                botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                                url_icone: null,
                                data: item,
                                hora: horaEvento,
                                rotina: null,
                                zapping: 0
                            })
                        } else {
                            notificacoesFinal.push({
                                mensagem: mensagens.dias3.message,
                                titulo: mensagens.dias3.tituloBlade,
                                descricao: mensagens.dias3.descricao,
                                botao_titulo: null,
                                botao_navigate: null,
                                url_icone: null,
                                data: item,
                                hora: horaEvento,
                                rotina: null,
                                zapping: 0
                            })
                        }
                    }
                } else {
                    notificacoesFinal.push({
                        mensagem: mensagens.dias3.message,
                        titulo: null,
                        descricao: null,
                        botao_titulo: null,
                        botao_navigate: null,
                        url_icone: objectImagens[tipologia],
                        data: item,
                        hora: horaEvento,
                        rotina: null,
                        zapping: 0
                    })
                }
            })
        }
    }

    if(mensagens.diaAnterior.active === true){
        if(regular === 'Unico') {
            dias.diasEvento.map(item => {
                if(item.name === 'diaAnterior'){
                    if(tipologia === 'Agenda'){
                        notificacoesFinal.push({
                            mensagem: mensagens.diaAnterior.message,
                            titulo: null,
                            descricao: null,
                            botao_titulo: null,
                            botao_navigate: null,
                            url_icone: objectImagens[tipologia],
                            data: item.data,
                            hora: null,
                            botao_titulo: null,
                            botao_navigate: null,
                            rotina: 2,
                            zapping: 1
                        })
                    } else if(tipologia === 'Personalizada' && usaIcone === 'Sim') {
                        if(mensagens.diaAnterior.persVal === false){
                            notificacoesFinal.push({
                                mensagem: mensagens.diaAnterior.message,
                                titulo: null,
                                descricao: null,
                                botao_titulo: null,
                                botao_navigate: null,
                                url_icone: objectImagens[iconePersonalizado],
                                data: item.data,
                                hora: null,
                                rotina: 2,
                                zapping: 0
                            })
                        } else {
                            if(tipoPersonalizado === 'Jogo') {
                                notificacoesFinal.push({
                                    mensagem: mensagens.diaAnterior.message,
                                    titulo: mensagens.diaAnterior.tituloBlade,
                                    descricao: mensagens.diaAnterior.descricao,
                                    botao_titulo: 'Abrir o jogo',
                                    botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                                    url_icone: objectImagens[iconePersonalizado],
                                    data: item.data,
                                    hora: null,
                                    rotina: 2,
                                    zapping: 0
                                })
                            } else {
                                notificacoesFinal.push({
                                    mensagem: mensagens.diaAnterior.message,
                                    titulo: mensagens.diaAnterior.tituloBlade,
                                    descricao: mensagens.diaAnterior.descricao,
                                    botao_titulo: null,
                                    botao_navigate: null,
                                    url_icone: objectImagens[iconePersonalizado],
                                    data: item.data,
                                    hora: null,
                                    rotina: 2,
                                    zapping: 0
                                })
                            }
                        }
                    } else if(tipologia === 'Personalizada' && usaIcone === 'Não') {
                        if(mensagens.diaAnterior.persVal === false){
                            notificacoesFinal.push({
                                mensagem: mensagens.diaAnterior.message,
                                titulo: null,
                                descricao: null,
                                botao_titulo: null,
                                botao_navigate: null,
                                url_icone: null,
                                data: item.data,
                                hora: null,
                                rotina: 2,
                                zapping: 0
                            })
                        } else {
                            if(tipoPersonalizado === 'Jogo') {
                                notificacoesFinal.push({
                                    mensagem: mensagens.diaAnterior.message,
                                    titulo: mensagens.diaAnterior.tituloBlade,
                                    descricao: mensagens.diaAnterior.descricao,
                                    botao_titulo: 'Abrir o jogo',
                                    botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                                    url_icone: null,
                                    data: item.data,
                                    hora: null,
                                    rotina: 2,
                                    zapping: 0
                                })
                            } else {
                                notificacoesFinal.push({
                                    mensagem: mensagens.diaAnterior.message,
                                    titulo: mensagens.diaAnterior.tituloBlade,
                                    descricao: mensagens.diaAnterior.descricao,
                                    botao_titulo: null,
                                    botao_navigate: null,
                                    url_icone: null,
                                    data: item.data,
                                    hora: null,
                                    rotina: 2,
                                    zapping: 0
                                })
                            }
                        }
                    } else if(tipologia === 'Informação'){
                        notificacoesFinal.push({
                            mensagem: mensagens.diaAnterior.message,
                            titulo: null,
                            descricao: null,
                            botao_titulo: null,
                            botao_navigate: null,
                            url_icone: objectImagens[tipologia],
                            data: item.data,
                            hora: null,
                            rotina: 2,
                            zapping: 1
                        })
                    } else {
                        notificacoesFinal.push({
                            mensagem: mensagens.diaAnterior.message,
                            titulo: null,
                            descricao: null,
                            botao_titulo: null,
                            botao_navigate: null,
                            url_icone: objectImagens[tipologia],
                            data: item.data,
                            hora: null,
                            rotina: 2,
                            zapping: 0
                        })
                    }
                }
            })
        } else if(regular === 'Diária'){
            dias.diasEvento.map(item => {
                if(tipologia === 'Agenda'){
                    notificacoesFinal.push({
                        mensagem: mensagens.diaAnterior.message,
                        titulo: null,
                        descricao: null,
                        botao_titulo: null,
                        botao_navigate: null,
                        url_icone: objectImagens[tipologia],
                        data: item,
                        hora: null,
                        rotina: 2,
                        zapping: 1
                    })
                } else if(tipologia === 'Personalizada' && usaIcone === 'Sim') {
                    if(mensagens.diaAnterior.persVal === false){
                        notificacoesFinal.push({
                            mensagem: mensagens.diaAnterior.message,
                            titulo: null,
                            descricao: null,
                            botao_titulo: null,
                            botao_navigate: null,
                            url_icone: objectImagens[iconePersonalizado],
                            data: item,
                            hora: null,
                            rotina: 2,
                            zapping: 0
                        })
                    } else {
                        if(tipoPersonalizado === 'Jogo') {
                            notificacoesFinal.push({
                                mensagem: mensagens.diaAnterior.message,
                                titulo: mensagens.diaAnterior.tituloBlade,
                                descricao: mensagens.diaAnterior.descricao,
                                botao_titulo: 'Abrir o jogo',
                                botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                                url_icone: objectImagens[iconePersonalizado],
                                data: item,
                                hora: null,
                                rotina: 2,
                                zapping: 0
                            })
                        } else {
                            notificacoesFinal.push({
                                mensagem: mensagens.diaAnterior.message,
                                titulo: mensagens.diaAnterior.tituloBlade,
                                descricao: mensagens.diaAnterior.descricao,
                                botao_titulo: null,
                                botao_navigate: null,
                                url_icone: objectImagens[iconePersonalizado],
                                data: item,
                                hora: null,
                                rotina: 2,
                                zapping: 0
                            })
                        }
                    }
                } else if(tipologia === 'Personalizada' && usaIcone === 'Não') {
                    if(mensagens.diaAnterior.persVal === false){
                        notificacoesFinal.push({
                            mensagem: mensagens.diaAnterior.message,
                            titulo: null,
                            descricao: null,
                            botao_titulo: null,
                            botao_navigate: null,
                            url_icone: null,
                            data: item,
                            hora: null,
                            rotina: 2,
                            zapping: 0
                        })
                    } else {
                        if(tipoPersonalizado === 'Jogo') {
                            notificacoesFinal.push({
                                mensagem: mensagens.diaAnterior.message,
                                titulo: mensagens.diaAnterior.tituloBlade,
                                descricao: mensagens.diaAnterior.descricao,
                                botao_titulo: 'Abrir o jogo',
                                botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                                url_icone: null,
                                data: item,
                                hora: null,
                                rotina: 2,
                                zapping: 0
                            })
                        } else {
                            notificacoesFinal.push({
                                mensagem: mensagens.diaAnterior.message,
                                titulo: mensagens.diaAnterior.tituloBlade,
                                descricao: mensagens.diaAnterior.descricao,
                                botao_titulo: null,
                                botao_navigate: null,
                                url_icone: null,
                                data: item,
                                hora: null,
                                rotina: 2,
                                zapping: 0
                            })
                        }
                    }
                } else if(tipologia === 'Informação'){
                    notificacoesFinal.push({
                        mensagem: mensagens.diaAnterior.message,
                        titulo: null,
                        descricao: null,
                        botao_titulo: null,
                        botao_navigate: null,
                        url_icone: objectImagens[tipologia],
                        data: item,
                        hora: null,
                        rotina: 2,
                        zapping: 1
                    })
                } else {
                    notificacoesFinal.push({
                        mensagem: mensagens.diaAnterior.message,
                        titulo: null,
                        descricao: null,
                        botao_titulo: null,
                        botao_navigate: null,
                        url_icone: objectImagens[tipologia],
                        data: item,
                        hora: null,
                        rotina: 2,
                        zapping: 0
                    })
                }
            })
        } else if(regular === 'Mensal' || regular === 'Semanal') {
            dias.diasMensagens.diaAnterior.map(item => {
                if(tipologia === 'Agenda'){
                    notificacoesFinal.push({
                        mensagem: mensagens.diaAnterior.message,
                        titulo: null,
                        descricao: null,
                        botao_titulo: null,
                        botao_navigate: null,
                        url_icone: objectImagens[tipologia],
                        data: item,
                        hora: null,
                        rotina: 2,
                        zapping: 1
                    })
                } else if(tipologia === 'Personalizada' && usaIcone === 'Sim') {
                    if(mensagens.diaAnterior.persVal === false){
                        notificacoesFinal.push({
                            mensagem: mensagens.diaAnterior.message,
                            titulo: null,
                            descricao: null,
                            botao_titulo: null,
                            botao_navigate: null,
                            url_icone: objectImagens[iconePersonalizado],
                            data: item,
                            hora: null,
                            rotina: 2,
                            zapping: 0
                        })
                    } else {
                        if(tipoPersonalizado === 'Jogo') {
                            notificacoesFinal.push({
                                mensagem: mensagens.diaAnterior.message,
                                titulo: mensagens.diaAnterior.tituloBlade,
                                descricao: mensagens.diaAnterior.descricao,
                                botao_titulo: 'Abrir o jogo',
                                botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                                url_icone: objectImagens[iconePersonalizado],
                                data: item,
                                hora: null,
                                rotina: 2,
                                zapping: 0
                            })
                        } else {
                            notificacoesFinal.push({
                                mensagem: mensagens.diaAnterior.message,
                                titulo: mensagens.diaAnterior.tituloBlade,
                                descricao: mensagens.diaAnterior.descricao,
                                botao_titulo: null,
                                botao_navigate: null,
                                url_icone: objectImagens[iconePersonalizado],
                                data: item,
                                hora: null,
                                rotina: 2,
                                zapping: 0
                            })
                        }
                    }
                } else if(tipologia === 'Personalizada' && usaIcone === 'Não') {
                    if(mensagens.diaAnterior.persVal === false){
                        notificacoesFinal.push({
                            mensagem: mensagens.diaAnterior.message,
                            titulo: null,
                            descricao: null,
                            botao_titulo: null,
                            botao_navigate: null,
                            url_icone: null,
                            data: item,
                            hora: null,
                            rotina: 2,
                            zapping: 0
                        })
                    } else {
                        if(tipoPersonalizado === 'Jogo') {
                            notificacoesFinal.push({
                                mensagem: mensagens.diaAnterior.message,
                                titulo: mensagens.diaAnterior.tituloBlade,
                                descricao: mensagens.diaAnterior.descricao,
                                botao_titulo: 'Abrir o jogo',
                                botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                                url_icone: null,
                                data: item,
                                hora: null,
                                rotina: 2,
                                zapping: 0
                            })
                        } else {
                            notificacoesFinal.push({
                                mensagem: mensagens.diaAnterior.message,
                                titulo: mensagens.diaAnterior.tituloBlade,
                                descricao: mensagens.diaAnterior.descricao,
                                botao_titulo: null,
                                botao_navigate: null,
                                url_icone: null,
                                data: item,
                                hora: null,
                                rotina: 2,
                                zapping: 0
                            })
                        }
                    }
                } else if(tipologia === 'Informação'){
                    notificacoesFinal.push({
                        mensagem: mensagens.diaAnterior.message,
                        titulo: null,
                        descricao: null,
                        botao_titulo: null,
                        botao_navigate: null,
                        url_icone: objectImagens[tipologia],
                        data: item,
                        hora: null,
                        rotina: 2,
                        zapping: 1
                    })
                } else {
                    notificacoesFinal.push({
                        mensagem: mensagens.diaAnterior.message,
                        titulo: null,
                        descricao: null,
                        botao_titulo: null,
                        botao_navigate: null,
                        url_icone: objectImagens[tipologia],
                        data: item,
                        hora: null,
                        rotina: 2,
                        zapping: 0
                    })
                }
            })
        }
    }

    if(mensagens.diaProprio.active === true){
        if(regular === 'Unico') {
            let diaFormated = dia.getFullYear() + '-' + ((dia.getMonth() > 8) ? (dia.getMonth() + 1) : ('0' + (dia.getMonth() + 1))) + '-' + ((dia.getDate() > 9) ? dia.getDate() : ('0' + dia.getDate()));
            if(tipologia === 'Agenda'){
                notificacoesFinal.push({
                    mensagem: mensagens.diaProprio.message,
                    titulo: null,
                    descricao: null,
                    botao_titulo: null,
                    botao_navigate: null,
                    url_icone: objectImagens[tipologia],
                    data: diaFormated,
                    hora: null,
                    rotina: 1,
                    zapping: 1
                })
            } else if(tipologia === 'Personalizada' && usaIcone === 'Sim') {
                if(mensagens.diaProprio.persVal === false){
                    notificacoesFinal.push({
                        mensagem: mensagens.diaProprio.message,
                        titulo: null,
                        descricao: null,
                        botao_titulo: null,
                        botao_navigate: null,
                        url_icone: objectImagens[iconePersonalizado],
                        data: diaFormated,
                        hora: null,
                        rotina: 1,
                        zapping: 0
                    })
                } else {
                    if(tipoPersonalizado === 'Jogo') {
                        notificacoesFinal.push({
                            mensagem: mensagens.diaProprio.message,
                            titulo: mensagens.diaProprio.tituloBlade,
                            descricao: mensagens.diaProprio.descricao,
                            botao_titulo: 'Abrir o jogo',
                            botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                            url_icone: objectImagens[iconePersonalizado],
                            data: diaFormated,
                            hora: null,
                            rotina: 1,
                            zapping: 0
                        })
                    } else {
                        notificacoesFinal.push({
                            mensagem: mensagens.diaProprio.message,
                            titulo: mensagens.diaProprio.tituloBlade,
                            descricao: mensagens.diaProprio.descricao,
                            botao_titulo: null,
                            botao_navigate: null,
                            url_icone: objectImagens[iconePersonalizado],
                            data: diaFormated,
                            hora: null,
                            rotina: 1,
                            zapping: 0
                        })
                    }
                }
            } else if(tipologia === 'Personalizada' && usaIcone === 'Não') {
                if(mensagens.diaProprio.persVal === false){
                    notificacoesFinal.push({
                        mensagem: mensagens.diaProprio.message,
                        titulo: null,
                        descricao: null,
                        botao_titulo: null,
                        botao_navigate: null,
                        url_icone: null,
                        data: diaFormated,
                        hora: null,
                        rotina: 1,
                        zapping: 0
                    })
                } else {
                    if(tipoPersonalizado === 'Jogo') {
                        notificacoesFinal.push({
                            mensagem: mensagens.diaProprio.message,
                            titulo: mensagens.diaProprio.tituloBlade,
                            descricao: mensagens.diaProprio.descricao,
                            botao_titulo: 'Abrir o jogo',
                            botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                            url_icone: null,
                            data: diaFormated,
                            hora: null,
                            rotina: 1,
                            zapping: 0
                        })
                    } else {
                        notificacoesFinal.push({
                            mensagem: mensagens.diaProprio.message,
                            titulo: mensagens.diaProprio.tituloBlade,
                            descricao: mensagens.diaProprio.descricao,
                            botao_titulo: null,
                            botao_navigate: null,
                            url_icone: null,
                            data: diaFormated,
                            hora: null,
                            rotina: 1,
                            zapping: 0
                        })
                    }
                }
            } else if(tipologia === 'Informação'){
                notificacoesFinal.push({
                    mensagem: mensagens.diaProprio.message,
                    titulo: null,
                    descricao: null,
                    botao_titulo: null,
                    botao_navigate: null,
                    url_icone: objectImagens[tipologia],
                    data: diaFormated,
                    hora: null,
                    rotina: 1,
                    zapping: 1
                })
            } else {
                notificacoesFinal.push({
                    mensagem: mensagens.diaProprio.message,
                    titulo: null,
                    descricao: null,
                    botao_titulo: null,
                    botao_navigate: null,
                    url_icone: objectImagens[tipologia],
                    data: diaFormated,
                    hora: null,
                    rotina: 1,
                    zapping: 0
                })
            }
        } else if(regular === 'Diária' || regular === 'Mensal' || regular === 'Semanal') {
            dias.diasEvento.map(item => {
                if(tipologia === 'Agenda'){
                    notificacoesFinal.push({
                        mensagem: mensagens.diaProprio.message,
                        titulo: null,
                        descricao: null,
                        botao_titulo: null,
                        botao_navigate: null,
                        url_icone: objectImagens[tipologia],
                        data: item,
                        hora: null,
                        rotina: 1,
                        zapping: 1
                    })
                } else if(tipologia === 'Personalizada' && usaIcone === 'Sim') {
                    if(mensagens.diaProprio.persVal === false){
                        notificacoesFinal.push({
                            mensagem: mensagens.diaProprio.message,
                            titulo: null,
                            descricao: null,
                            botao_titulo: null,
                            botao_navigate: null,
                            url_icone: objectImagens[iconePersonalizado],
                            data: item,
                            hora: null,
                            rotina: 1,
                            zapping: 0
                        })
                    } else {
                        if(tipoPersonalizado === 'Jogo') {
                            notificacoesFinal.push({
                                mensagem: mensagens.diaProprio.message,
                                titulo: mensagens.diaProprio.tituloBlade,
                                descricao: mensagens.diaProprio.descricao,
                                botao_titulo: 'Abrir o jogo',
                                botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                                url_icone: objectImagens[iconePersonalizado],
                                data: item,
                                hora: null,
                                rotina: 1,
                                zapping: 0
                            })
                        } else {
                            notificacoesFinal.push({
                                mensagem: mensagens.diaProprio.message,
                                titulo: mensagens.diaProprio.tituloBlade,
                                descricao: mensagens.diaProprio.descricao,
                                botao_titulo: null,
                                botao_navigate: null,
                                url_icone: objectImagens[iconePersonalizado],
                                data: item,
                                hora: null,
                                rotina: 1,
                                zapping: 0
                            })
                        }
                    }
                } else if(tipologia === 'Personalizada' && usaIcone === 'Não') {
                    if(mensagens.diaProprio.persVal === false){
                        notificacoesFinal.push({
                            mensagem: mensagens.diaProprio.message,
                            titulo: null,
                            descricao: null,
                            botao_titulo: null,
                            botao_navigate: null,
                            url_icone: null,
                            data: item,
                            hora: null,
                            rotina: 1,
                            zapping: 0
                        })
                    } else {
                        if(tipoPersonalizado === 'Jogo') {
                            notificacoesFinal.push({
                                mensagem: mensagens.diaProprio.message,
                                titulo: mensagens.diaProprio.tituloBlade,
                                descricao: mensagens.diaProprio.descricao,
                                botao_titulo: 'Abrir o jogo',
                                botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                                url_icone: null,
                                data: item,
                                hora: null,
                                rotina: 1,
                                zapping: 0
                            })
                        } else {
                            notificacoesFinal.push({
                                mensagem: mensagens.diaProprio.message,
                                titulo: mensagens.diaProprio.tituloBlade,
                                descricao: mensagens.diaProprio.descricao,
                                botao_titulo: null,
                                botao_navigate: null,
                                url_icone: null,
                                data: item,
                                hora: null,
                                rotina: 1,
                                zapping: 0
                            })
                        }
                    }
                } else if(tipologia === 'Informação'){
                    notificacoesFinal.push({
                        mensagem: mensagens.diaProprio.message,
                        titulo: null,
                        descricao: null,
                        botao_titulo: null,
                        botao_navigate: null,
                        url_icone: objectImagens[tipologia],
                        data: item,
                        hora: null,
                        rotina: 1,
                        zapping: 1
                    })
                } else {
                    notificacoesFinal.push({
                        mensagem: mensagens.diaProprio.message,
                        titulo: null,
                        descricao: null,
                        botao_titulo: null,
                        botao_navigate: null,
                        url_icone: objectImagens[tipologia],
                        data: item,
                        hora: null,
                        rotina: 1,
                        zapping: 0
                    })
                }
            })
        }
    }

    if(mensagens.horaAntes.active === true){
        let novaData = new Date();
        let hora = horaEvento.substring(2, 0)
        let minutos = horaEvento.substring(3, 5)
        novaData.setHours(hora, minutos);
        novaData.setHours(novaData.getHours() - 1);
        
        let horaFinal = `${novaData.getHours() < 10 ? '0' + novaData.getHours() : novaData.getHours()}:${novaData.getMinutes() < 10 ? '0' + novaData.getMinutes() : novaData.getMinutes()}`
        

        if(regular === 'Unico') {
            let diaFormated = dia.getFullYear() + '-' + ((dia.getMonth() > 8) ? (dia.getMonth() + 1) : ('0' + (dia.getMonth() + 1))) + '-' + ((dia.getDate() > 9) ? dia.getDate() : ('0' + dia.getDate()));
            if(tipologia === 'Agenda'){
                notificacoesFinal.push({
                    mensagem: mensagens.horaAntes.message,
                    titulo: null,
                    descricao: null,
                    botao_titulo: null,
                    botao_navigate: null,
                    url_icone: objectImagens[tipologia],
                    data: diaFormated,
                    hora: horaFinal,
                    rotina: null,
                    zapping: 1
                })
            } else if(tipologia === 'Personalizada' && usaIcone === 'Sim') {
                if(mensagens.horaAntes.persVal === false){
                    notificacoesFinal.push({
                        mensagem: mensagens.horaAntes.message,
                        titulo: null,
                        descricao: null,
                        botao_titulo: null,
                        botao_navigate: null,
                        url_icone: objectImagens[iconePersonalizado],
                        data: diaFormated,
                        hora: horaFinal,
                        rotina: null,
                        zapping: 0
                    })
                } else {
                    if(tipoPersonalizado === 'Jogo') {
                        notificacoesFinal.push({
                            mensagem: mensagens.horaAntes.message,
                            titulo: mensagens.horaAntes.tituloBlade,
                            descricao: mensagens.horaAntes.descricao,
                            botao_titulo: 'Abrir o jogo',
                            botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                            url_icone: objectImagens[iconePersonalizado],
                            data: diaFormated,
                            hora: horaFinal,
                            rotina: null,
                            zapping: 0
                        })
                    } else {
                        notificacoesFinal.push({
                            mensagem: mensagens.horaAntes.message,
                            titulo: mensagens.horaAntes.tituloBlade,
                            descricao: mensagens.horaAntes.descricao,
                            botao_titulo: null,
                            botao_navigate: null,
                            url_icone: objectImagens[iconePersonalizado],
                            data: diaFormated,
                            hora: horaFinal,
                            rotina: null,
                            zapping: 0
                        })
                    }
                }
            } else if(tipologia === 'Personalizada' && usaIcone === 'Não') {
                if(mensagens.horaAntes.persVal === false){
                    notificacoesFinal.push({
                        mensagem: mensagens.horaAntes.message,
                        titulo: null,
                        descricao: null,
                        botao_titulo: null,
                        botao_navigate: null,
                        url_icone: null,
                        data: diaFormated,
                        hora: horaFinal,
                        rotina: null,
                        zapping: 0
                    })
                } else {
                    if(tipoPersonalizado === 'Jogo') {
                        notificacoesFinal.push({
                            mensagem: mensagens.horaAntes.message,
                            titulo: mensagens.horaAntes.tituloBlade,
                            descricao: mensagens.horaAntes.descricao,
                            botao_titulo: 'Abrir o jogo',
                            botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                            url_icone: null,
                            data: diaFormated,
                            hora: horaFinal,
                            rotina: null,
                            zapping: 0
                        })
                    } else {
                        notificacoesFinal.push({
                            mensagem: mensagens.horaAntes.message,
                            titulo: mensagens.horaAntes.tituloBlade,
                            descricao: mensagens.horaAntes.descricao,
                            botao_titulo: null,
                            botao_navigate: null,
                            url_icone: null,
                            data: diaFormated,
                            hora: horaFinal,
                            rotina: null,
                            zapping: 0
                        })
                    }
                }
            } else {
                notificacoesFinal.push({
                    mensagem: mensagens.horaAntes.message,
                    titulo: null,
                    descricao: null,
                    botao_titulo: null,
                    botao_navigate: null,
                    url_icone: objectImagens[tipologia],
                    data: diaFormated,
                    hora: horaFinal,
                    rotina: null,
                    zapping: 0
                })
            }
        } else if(regular === 'Diária' || regular === 'Mensal' || regular === 'Semanal') {
            let atual = new Date();
            let primeiroDia = new Date(dias.diasEvento[0]);
            primeiroDia.setHours(atual.getHours(), atual.getMinutes());
            let primeiraCria = new Date(dias.diasEvento[0])
            primeiraCria.setHours(novaData.getHours(), novaData.getMinutes())
            
            dias.diasEvento.map((item, key) => {
                if(key === 0){
                    if(primeiraCria >= primeiroDia){
                        if(tipologia === 'Agenda'){
                            notificacoesFinal.push({
                                mensagem: mensagens.horaAntes.message,
                                titulo: null,
                                descricao: null,
                                botao_titulo: null,
                                botao_navigate: null,
                                url_icone: objectImagens[tipologia],
                                data: item,
                                hora: horaFinal,
                                rotina: null,
                                zapping: 1
                            })
                        } else if(tipologia === 'Personalizada' && usaIcone === 'Sim') {
                            if(mensagens.horaAntes.persVal === false){
                                notificacoesFinal.push({
                                    mensagem: mensagens.horaAntes.message,
                                    titulo: null,
                                    descricao: null,
                                    botao_titulo: null,
                                    botao_navigate: null,
                                    url_icone: objectImagens[iconePersonalizado],
                                    data: item,
                                    hora: horaFinal,
                                    rotina: null,
                                    zapping: 0
                                })
                            } else {
                                if(tipoPersonalizado === 'Jogo') {
                                    notificacoesFinal.push({
                                        mensagem: mensagens.horaAntes.message,
                                        titulo: mensagens.horaAntes.tituloBlade,
                                        descricao: mensagens.horaAntes.descricao,
                                        botao_titulo: 'Abrir o jogo',
                                        botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                                        url_icone: objectImagens[iconePersonalizado],
                                        data: item,
                                        hora: horaFinal,
                                        rotina: null,
                                        zapping: 0
                                    })
                                } else {
                                    notificacoesFinal.push({
                                        mensagem: mensagens.horaAntes.message,
                                        titulo: mensagens.horaAntes.tituloBlade,
                                        descricao: mensagens.horaAntes.descricao,
                                        botao_titulo: null,
                                        botao_navigate: null,
                                        url_icone: objectImagens[iconePersonalizado],
                                        data: item,
                                        hora: horaFinal,
                                        rotina: null,
                                        zapping: 0
                                    })
                                }
                            }
                        } else if(tipologia === 'Personalizada' && usaIcone === 'Não') {
                            if(mensagens.horaAntes.persVal === false){
                                notificacoesFinal.push({
                                    mensagem: mensagens.horaAntes.message,
                                    titulo: null,
                                    descricao: null,
                                    botao_titulo: null,
                                    botao_navigate: null,
                                    url_icone: null,
                                    data: item,
                                    hora: horaFinal,
                                    rotina: null,
                                    zapping: 0
                                })
                            } else {
                                if(tipoPersonalizado === 'Jogo') {
                                    notificacoesFinal.push({
                                        mensagem: mensagens.horaAntes.message,
                                        titulo: mensagens.horaAntes.tituloBlade,
                                        descricao: mensagens.horaAntes.descricao,
                                        botao_titulo: 'Abrir o jogo',
                                        botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                                        url_icone: null,
                                        data: item,
                                        hora: horaFinal,
                                        rotina: null,
                                        zapping: 0
                                    })
                                } else {
                                    notificacoesFinal.push({
                                        mensagem: mensagens.horaAntes.message,
                                        titulo: mensagens.horaAntes.tituloBlade,
                                        descricao: mensagens.horaAntes.descricao,
                                        botao_titulo: null,
                                        botao_navigate: null,
                                        url_icone: null,
                                        data: item,
                                        hora: horaFinal,
                                        rotina: null,
                                        zapping: 0
                                    })
                                }
                            }
                        } else {
                            notificacoesFinal.push({
                                mensagem: mensagens.horaAntes.message,
                                titulo: null,
                                descricao: null,
                                botao_titulo: null,
                                botao_navigate: null,
                                url_icone: objectImagens[tipologia],
                                data: item,
                                hora: horaFinal,
                                rotina: null,
                                zapping: 0
                            })
                        }
                    }
                } else {
                    if(tipologia === 'Agenda'){
                        notificacoesFinal.push({
                            mensagem: mensagens.horaAntes.message,
                            titulo: null,
                            descricao: null,
                            botao_titulo: null,
                            botao_navigate: null,
                            url_icone: objectImagens[tipologia],
                            data: item,
                            hora: horaFinal,
                            rotina: null,
                            zapping: 1
                        })
                    } else if(tipologia === 'Personalizada' && usaIcone === 'Sim') {
                        if(mensagens.horaAntes.persVal === false){
                            notificacoesFinal.push({
                                mensagem: mensagens.horaAntes.message,
                                titulo: null,
                                descricao: null,
                                botao_titulo: null,
                                botao_navigate: null,
                                url_icone: objectImagens[iconePersonalizado],
                                data: item,
                                hora: horaFinal,
                                rotina: null,
                                zapping: 0
                            })
                        } else {
                            if(tipoPersonalizado === 'Jogo') {
                                notificacoesFinal.push({
                                    mensagem: mensagens.horaAntes.message,
                                    titulo: mensagens.horaAntes.tituloBlade,
                                    descricao: mensagens.horaAntes.descricao,
                                    botao_titulo: 'Abrir o jogo',
                                    botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                                    url_icone: objectImagens[iconePersonalizado],
                                    data: item,
                                    hora: horaFinal,
                                    rotina: null,
                                    zapping: 0
                                })
                            } else {
                                notificacoesFinal.push({
                                    mensagem: mensagens.horaAntes.message,
                                    titulo: mensagens.horaAntes.tituloBlade,
                                    descricao: mensagens.horaAntes.descricao,
                                    botao_titulo: null,
                                    botao_navigate: null,
                                    url_icone: objectImagens[iconePersonalizado],
                                    data: item,
                                    hora: horaFinal,
                                    rotina: null,
                                    zapping: 0
                                })
                            }
                        }
                    } else if(tipologia === 'Personalizada' && usaIcone === 'Não') {
                        if(mensagens.horaAntes.persVal === false){
                            notificacoesFinal.push({
                                mensagem: mensagens.horaAntes.message,
                                titulo: null,
                                descricao: null,
                                botao_titulo: null,
                                botao_navigate: null,
                                url_icone: null,
                                data: item,
                                hora: horaFinal,
                                rotina: null,
                                zapping: 0
                            })
                        } else {
                            if(tipoPersonalizado === 'Jogo') {
                                notificacoesFinal.push({
                                    mensagem: mensagens.horaAntes.message,
                                    titulo: mensagens.horaAntes.tituloBlade,
                                    descricao: mensagens.horaAntes.descricao,
                                    botao_titulo: 'Abrir o jogo',
                                    botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                                    url_icone: null,
                                    data: item,
                                    hora: horaFinal,
                                    rotina: null,
                                    zapping: 0
                                })
                            } else {
                                notificacoesFinal.push({
                                    mensagem: mensagens.horaAntes.message,
                                    titulo: mensagens.horaAntes.tituloBlade,
                                    descricao: mensagens.horaAntes.descricao,
                                    botao_titulo: null,
                                    botao_navigate: null,
                                    url_icone: null,
                                    data: item,
                                    hora: horaFinal,
                                    rotina: null,
                                    zapping: 0
                                })
                            }
                        }
                    } else {
                        notificacoesFinal.push({
                            mensagem: mensagens.horaAntes.message,
                            titulo: null,
                            descricao: null,
                            botao_titulo: null,
                            botao_navigate: null,
                            url_icone: objectImagens[tipologia],
                            data: item,
                            hora: horaFinal,
                            rotina: null,
                            zapping: 0
                        })
                    }
                }
            })
        }
    }

    if(mensagens.meiaHora.active === true){
        let novaData = new Date();
        let hora = horaEvento.substring(2, 0)
        let minutos = horaEvento.substring(3, 5)
        novaData.setHours(hora, minutos);
        let dataFlex = new Date(novaData - 30 * 60000);

        let horaFinal = `${dataFlex.getHours() < 10 ? `0${dataFlex.getHours()}` : dataFlex.getHours()}:${(dataFlex.getMinutes() < 10) ? `0${dataFlex.getMinutes()}` : dataFlex.getMinutes()}`;

        if(regular === 'Unico') {
            let diaFormated = dia.getFullYear() + '-' + ((dia.getMonth() > 8) ? (dia.getMonth() + 1) : ('0' + (dia.getMonth() + 1))) + '-' + ((dia.getDate() > 9) ? dia.getDate() : ('0' + dia.getDate()));
            if(tipologia === 'Agenda'){
                notificacoesFinal.push({
                    mensagem: mensagens.meiaHora.message,
                    titulo: mensagens.meiaHora.tituloBlade,
                    descricao: mensagens.meiaHora.descricao,
                    botao_titulo: 'Avisar em 15 minutos',
                    botao_navigate: 'callback:https://geo-navsafety.ua.pt:443/overtv/resposta?type=reminder',
                    url_icone: objectImagens[tipologia],
                    data: diaFormated,
                    hora: horaFinal,
                    rotina: null,
                    zapping: 1
                })
            } else if(tipologia === 'Personalizada' && usaIcone === 'Sim') {
                if(tipoPersonalizado === 'Jogo') {
                    notificacoesFinal.push({
                        mensagem: mensagens.meiaHora.message,
                        titulo: mensagens.meiaHora.tituloBlade,
                        descricao: mensagens.meiaHora.descricao,
                        botao_titulo: 'Abrir o jogo',
                        botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                        url_icone: objectImagens[iconePersonalizado],
                        data: diaFormated,
                        hora: horaFinal,
                        rotina: null,
                        zapping: 0
                    })
                } else {
                    notificacoesFinal.push({
                        mensagem: mensagens.meiaHora.message,
                        titulo: mensagens.meiaHora.tituloBlade,
                        descricao: mensagens.meiaHora.descricao,
                        botao_titulo: 'Avisar em 15 minutos',
                        botao_navigate: 'callback:https://geo-navsafety.ua.pt:443/overtv/resposta?type=reminder',
                        url_icone: objectImagens[iconePersonalizado],
                        data: diaFormated,
                        hora: horaFinal,
                        rotina: null,
                        zapping: 0
                    })
                }
            } else if(tipologia === 'Personalizada' && usaIcone === 'Não') {
                if(tipoPersonalizado === 'Jogo') {
                    notificacoesFinal.push({
                        mensagem: mensagens.meiaHora.message,
                        titulo: mensagens.meiaHora.tituloBlade,
                        descricao: mensagens.meiaHora.descricao,
                        botao_titulo: 'Abrir o jogo',
                        botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                        url_icone: null,
                        data: diaFormated,
                        hora: horaFinal,
                        rotina: null,
                        zapping: 0
                    })
                } else {
                    notificacoesFinal.push({
                        mensagem: mensagens.meiaHora.message,
                        titulo: mensagens.meiaHora.tituloBlade,
                        descricao: mensagens.meiaHora.descricao,
                        botao_titulo: 'Avisar em 15 minutos',
                        botao_navigate: 'callback:https://geo-navsafety.ua.pt:443/overtv/resposta?type=reminder',
                        url_icone: null,
                        data: diaFormated,
                        hora: horaFinal,
                        rotina: null,
                        zapping: 0
                    })
                }
            } else if(tipologia === 'Serviços') {
                notificacoesFinal.push({
                    mensagem: mensagens.meiaHora.message,
                    titulo: null,
                    descricao: null,
                    botao_titulo: null,
                    botao_navigate: null,
                    url_icone: objectImagens[tipologia],
                    data: diaFormated,
                    hora: horaFinal,
                    rotina: null,
                    zapping: 0
                })
            } else {
                notificacoesFinal.push({
                    mensagem: mensagens.meiaHora.message,
                    titulo: mensagens.meiaHora.tituloBlade,
                    descricao: mensagens.meiaHora.descricao,
                    botao_titulo: 'Avisar em 15 minutos',
                    botao_navigate: 'callback:https://geo-navsafety.ua.pt:443/overtv/resposta?type=reminder',
                    url_icone: objectImagens[tipologia],
                    data: diaFormated,
                    hora: horaFinal,
                    rotina: null,
                    zapping: 0
                })
            }
        } else if(regular === 'Diária' || regular === 'Mensal' || regular === 'Semanal') {
            let atual = new Date();
            let primeiroDia = new Date(dias.diasEvento[0]);
            primeiroDia.setHours(atual.getHours(), atual.getMinutes());
            let primeiraCria = new Date(dias.diasEvento[0])
            primeiraCria.setHours(dataFlex.getHours(), dataFlex.getMinutes())

            dias.diasEvento.map((item, key) => {
                if(key === 0){
                    if(primeiraCria >= primeiroDia){
                        if(tipologia === 'Agenda'){
                            notificacoesFinal.push({
                                mensagem: mensagens.meiaHora.message,
                                titulo: mensagens.meiaHora.tituloBlade,
                                descricao: mensagens.meiaHora.descricao,
                                botao_titulo: 'Avisar em 15 minutos',
                                botao_navigate: 'callback:https://geo-navsafety.ua.pt:443/overtv/resposta?type=reminder',
                                url_icone: objectImagens[tipologia],
                                data: item,
                                hora: horaFinal,
                                rotina: null,
                                zapping: 1
                            })
                        } else if(tipologia === 'Personalizada' && usaIcone === 'Sim') {
                            if(tipoPersonalizado === 'Jogo') {
                                notificacoesFinal.push({
                                    mensagem: mensagens.meiaHora.message,
                                    titulo: mensagens.meiaHora.tituloBlade,
                                    descricao: mensagens.meiaHora.descricao,
                                    botao_titulo: 'Abrir o jogo',
                                    botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                                    url_icone: objectImagens[iconePersonalizado],
                                    data: item,
                                    hora: horaFinal,
                                    rotina: null,
                                    zapping: 0
                                })
                            } else {
                                notificacoesFinal.push({
                                    mensagem: mensagens.meiaHora.message,
                                    titulo: mensagens.meiaHora.tituloBlade,
                                    descricao: mensagens.meiaHora.descricao,
                                    botao_titulo: 'Avisar em 15 minutos',
                                    botao_navigate: 'callback:https://geo-navsafety.ua.pt:443/overtv/resposta?type=reminder',
                                    url_icone: objectImagens[iconePersonalizado],
                                    data: item,
                                    hora: horaFinal,
                                    rotina: null,
                                    zapping: 0
                                })
                            }
                        } else if(tipologia === 'Personalizada' && usaIcone === 'Não') {
                            if(tipoPersonalizado === 'Jogo') {
                                notificacoesFinal.push({
                                    mensagem: mensagens.meiaHora.message,
                                    titulo: mensagens.meiaHora.tituloBlade,
                                    descricao: mensagens.meiaHora.descricao,
                                    botao_titulo: 'Abrir o jogo',
                                    botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                                    url_icone: null,
                                    data: item,
                                    hora: horaFinal,
                                    rotina: null,
                                    zapping: 0
                                })
                            } else {
                                notificacoesFinal.push({
                                    mensagem: mensagens.meiaHora.message,
                                    titulo: mensagens.meiaHora.tituloBlade,
                                    descricao: mensagens.meiaHora.descricao,
                                    botao_titulo: 'Avisar em 15 minutos',
                                    botao_navigate: 'callback:https://geo-navsafety.ua.pt:443/overtv/resposta?type=reminder',
                                    url_icone: null,
                                    data: item,
                                    hora: horaFinal,
                                    rotina: null,
                                    zapping: 0
                                })
                            }
                        } else if(tipologia === 'Serviços') {
                            notificacoesFinal.push({
                                mensagem: mensagens.meiaHora.message,
                                titulo: null,
                                descricao: null,
                                botao_titulo: null,
                                botao_navigate: null,
                                url_icone: objectImagens[tipologia],
                                data: item,
                                hora: horaFinal,
                                rotina: null,
                                zapping: 0
                            })
                        } else {
                            notificacoesFinal.push({
                                mensagem: mensagens.meiaHora.message,
                                titulo: mensagens.meiaHora.tituloBlade,
                                descricao: mensagens.meiaHora.descricao,
                                botao_titulo: 'Avisar em 15 minutos',
                                botao_navigate: 'callback:https://geo-navsafety.ua.pt:443/overtv/resposta?type=reminder',
                                url_icone: objectImagens[tipologia],
                                data: item,
                                hora: horaFinal,
                                rotina: null,
                                zapping: 0
                            })
                        }
                    }
                } else {
                    if(tipologia === 'Agenda'){
                        notificacoesFinal.push({
                            mensagem: mensagens.meiaHora.message,
                            titulo: mensagens.meiaHora.tituloBlade,
                            descricao: mensagens.meiaHora.descricao,
                            botao_titulo: 'Avisar em 15 minutos',
                            botao_navigate: 'callback:https://geo-navsafety.ua.pt:443/overtv/resposta?type=reminder',
                            url_icone: objectImagens[tipologia],
                            data: item,
                            hora: horaFinal,
                            rotina: null,
                            zapping: 1
                        })
                    } else if(tipologia === 'Personalizada' && usaIcone === 'Sim') {
                        if(tipoPersonalizado === 'Jogo') {
                            notificacoesFinal.push({
                                mensagem: mensagens.meiaHora.message,
                                titulo: mensagens.meiaHora.tituloBlade,
                                descricao: mensagens.meiaHora.descricao,
                                botao_titulo: 'Abrir o jogo',
                                botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                                url_icone: objectImagens[iconePersonalizado],
                                data: item,
                                hora: horaFinal,
                                rotina: null,
                                zapping: 0
                            })
                        } else {
                            notificacoesFinal.push({
                                mensagem: mensagens.meiaHora.message,
                                titulo: mensagens.meiaHora.tituloBlade,
                                descricao: mensagens.meiaHora.descricao,
                                botao_titulo: 'Avisar em 15 minutos',
                                botao_navigate: 'callback:https://geo-navsafety.ua.pt:443/overtv/resposta?type=reminder',
                                url_icone: objectImagens[iconePersonalizado],
                                data: item,
                                hora: horaFinal,
                                rotina: null,
                                zapping: 0
                            })
                        }
                    } else if(tipologia === 'Personalizada' && usaIcone === 'Não') {
                        if(tipoPersonalizado === 'Jogo') {
                            notificacoesFinal.push({
                                mensagem: mensagens.meiaHora.message,
                                titulo: mensagens.meiaHora.tituloBlade,
                                descricao: mensagens.meiaHora.descricao,
                                botao_titulo: 'Abrir o jogo',
                                botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                                url_icone: null,
                                data: item,
                                hora: horaFinal,
                                rotina: null,
                                zapping: 0
                            })
                        } else {
                            notificacoesFinal.push({
                                mensagem: mensagens.meiaHora.message,
                                titulo: mensagens.meiaHora.tituloBlade,
                                descricao: mensagens.meiaHora.descricao,
                                botao_titulo: 'Avisar em 15 minutos',
                                botao_navigate: 'callback:https://geo-navsafety.ua.pt:443/overtv/resposta?type=reminder',
                                url_icone: null,
                                data: item,
                                hora: horaFinal,
                                rotina: null,
                                zapping: 0
                            })
                        }
                    } else if(tipologia === 'Serviços') {
                        notificacoesFinal.push({
                            mensagem: mensagens.meiaHora.message,
                            titulo: null,
                            descricao: null,
                            botao_titulo: null,
                            botao_navigate: null,
                            url_icone: objectImagens[tipologia],
                            data: item,
                            hora: horaFinal,
                            rotina: null,
                            zapping: 0
                        })
                    } else {
                        notificacoesFinal.push({
                            mensagem: mensagens.meiaHora.message,
                            titulo: mensagens.meiaHora.tituloBlade,
                            descricao: mensagens.meiaHora.descricao,
                            botao_titulo: 'Avisar em 15 minutos',
                            botao_navigate: 'callback:https://geo-navsafety.ua.pt:443/overtv/resposta?type=reminder',
                            url_icone: objectImagens[tipologia],
                            data: item,
                            hora: horaFinal,
                            rotina: null,
                            zapping: 0
                        })
                    }
                }
            })
        }
    }

    if(mensagens.quartoHora.active === true){
        let novaData = new Date();
        let hora = horaEvento.substring(2, 0)
        let minutos = horaEvento.substring(3, 5)
        novaData.setHours(hora, minutos);
        let dataFlex = new Date(novaData - 15 * 60000);

        let horaFinal = `${dataFlex.getHours() < 10 ? `0${dataFlex.getHours()}` : dataFlex.getHours()}:${(dataFlex.getMinutes() < 10) ? `0${dataFlex.getMinutes()}` : dataFlex.getMinutes()}`;
         
        
        if(regular === 'Unico') {
            let diaFormated = dia.getFullYear() + '-' + ((dia.getMonth() > 8) ? (dia.getMonth() + 1) : ('0' + (dia.getMonth() + 1))) + '-' + ((dia.getDate() > 9) ? dia.getDate() : ('0' + dia.getDate()));
            if(tipologia === 'Agenda'){
                notificacoesFinal.push({
                    mensagem: mensagens.quartoHora.message,
                    titulo: null,
                    descricao: null,
                    botao_titulo: null,
                    botao_navigate: null,
                    url_icone: objectImagens[tipologia],
                    data: diaFormated,
                    hora: horaFinal,
                    rotina: null,
                    zapping: 1
                })
            } else if(tipologia === 'Personalizada' && usaIcone === 'Sim') {
                if(mensagens.quartoHora.persVal === false){
                    notificacoesFinal.push({
                        mensagem: mensagens.quartoHora.message,
                        titulo: null,
                        descricao: null,
                        botao_titulo: null,
                        botao_navigate: null,
                        url_icone: objectImagens[iconePersonalizado],
                        data: diaFormated,
                        hora: horaFinal,
                        rotina: null,
                        zapping: 0
                    })
                } else {
                    if(tipoPersonalizado === 'Jogo') {
                        notificacoesFinal.push({
                            mensagem: mensagens.quartoHora.message,
                            titulo: mensagens.quartoHora.tituloBlade,
                            descricao: mensagens.quartoHora.descricao,
                            botao_titulo: 'Abrir o jogo',
                            botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                            url_icone: objectImagens[iconePersonalizado],
                            data: diaFormated,
                            hora: horaFinal,
                            rotina: null,
                            zapping: 0
                        })
                    } else {
                        notificacoesFinal.push({
                            mensagem: mensagens.quartoHora.message,
                            titulo: mensagens.quartoHora.tituloBlade,
                            descricao: mensagens.quartoHora.descricao,
                            botao_titulo: null,
                            botao_navigate: null,
                            url_icone: objectImagens[iconePersonalizado],
                            data: diaFormated,
                            hora: horaFinal,
                            rotina: null,
                            zapping: 0
                        })
                    }
                }
            } else if(tipologia === 'Personalizada' && usaIcone === 'Não') {
                if(mensagens.quartoHora.persVal === false){
                    notificacoesFinal.push({
                        mensagem: mensagens.quartoHora.message,
                        titulo: null,
                        descricao: null,
                        botao_titulo: null,
                        botao_navigate: null,
                        url_icone: null,
                        data: diaFormated,
                        hora: horaFinal,
                        rotina: null,
                        zapping: 0
                    }) 
                } else {
                    if(tipoPersonalizado === 'Jogo') {
                        notificacoesFinal.push({
                            mensagem: mensagens.quartoHora.message,
                            titulo: mensagens.quartoHora.tituloBlade,
                            descricao: mensagens.quartoHora.descricao,
                            botao_titulo: 'Abrir o jogo',
                            botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                            url_icone: null,
                            data: diaFormated,
                            hora: horaFinal,
                            rotina: null,
                            zapping: 0
                        })
                    } else {
                        notificacoesFinal.push({
                            mensagem: mensagens.quartoHora.message,
                            titulo: mensagens.quartoHora.tituloBlade,
                            descricao: mensagens.quartoHora.descricao,
                            botao_titulo: null,
                            botao_navigate: null,
                            url_icone: null,
                            data: diaFormated,
                            hora: horaFinal,
                            rotina: null,
                            zapping: 0
                        })
                    }
                }
            } else if(tipologia === 'Saúde') {
                notificacoesFinal.push({
                    mensagem: mensagens.quartoHora.message,
                    titulo: mensagens.quartoHora.tituloBlade,
                    descricao: mensagens.quartoHora.descricao,
                    botao_titulo: 'Avisar em 15 minutos',
                    botao_navigate: 'callback:https://geo-navsafety.ua.pt:443/overtv/resposta?type=reminder',
                    url_icone: objectImagens[tipologia],
                    data: diaFormated,
                    hora: horaFinal,
                    rotina: null,
                    zapping: 0
                })
            } else {
                notificacoesFinal.push({
                    mensagem: mensagens.quartoHora.message,
                    titulo: null,
                    descricao: null,
                    botao_titulo: null,
                    botao_navigate: null,
                    url_icone: objectImagens[tipologia],
                    data: diaFormated,
                    hora: horaFinal,
                    rotina: null,
                    zapping: 0
                })
            }
        } else if(regular === 'Diária' || regular === 'Mensal' || regular === 'Semanal') {
            let atual = new Date();
            let primeiroDia = new Date(dias.diasEvento[0]);
            primeiroDia.setHours(atual.getHours(), atual.getMinutes());
            let primeiraCria = new Date(dias.diasEvento[0])
            primeiraCria.setHours(dataFlex.getHours(), dataFlex.getMinutes())
            //console.log(dias.diasEvento)
            dias.diasEvento.map((item, key) => {
                if(key === 0){
                    if(primeiraCria >= primeiroDia){
                        if(tipologia === 'Agenda'){
                            notificacoesFinal.push({
                                mensagem: mensagens.quartoHora.message,
                                titulo: null,
                                descricao: null,
                                botao_titulo: null,
                                botao_navigate: null,
                                url_icone: objectImagens[tipologia],
                                data: item,
                                hora: horaFinal,
                                rotina: null,
                                zapping: 1
                            })
                        } else if(tipologia === 'Personalizada' && usaIcone === 'Sim') {
                            if(mensagens.quartoHora.persVal === false){
                                notificacoesFinal.push({
                                    mensagem: mensagens.quartoHora.message,
                                    titulo: null,
                                    descricao: null,
                                    botao_titulo: null,
                                    botao_navigate: null,
                                    url_icone: objectImagens[iconePersonalizado],
                                    data: item,
                                    hora: horaFinal,
                                    rotina: null,
                                    zapping: 0
                                })
                            } else {
                                if(tipoPersonalizado === 'Jogo') {
                                    notificacoesFinal.push({
                                        mensagem: mensagens.quartoHora.message,
                                        titulo: mensagens.quartoHora.tituloBlade,
                                        descricao: mensagens.quartoHora.descricao,
                                        botao_titulo: 'Abrir o jogo',
                                        botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                                        url_icone: objectImagens[iconePersonalizado],
                                        data: item,
                                        hora: horaFinal,
                                        rotina: null,
                                        zapping: 0
                                    })
                                } else {
                                    notificacoesFinal.push({
                                        mensagem: mensagens.quartoHora.message,
                                        titulo: mensagens.quartoHora.tituloBlade,
                                        descricao: mensagens.quartoHora.descricao,
                                        botao_titulo: null,
                                        botao_navigate: null,
                                        url_icone: objectImagens[iconePersonalizado],
                                        data: item,
                                        hora: horaFinal,
                                        rotina: null,
                                        zapping: 0
                                    })
                                }
                            }
                        } else if(tipologia === 'Personalizada' && usaIcone === 'Não') {
                            if(mensagens.quartoHora.persVal === false){
                                notificacoesFinal.push({
                                    mensagem: mensagens.quartoHora.message,
                                    titulo: null,
                                    descricao: null,
                                    botao_titulo: null,
                                    botao_navigate: null,
                                    url_icone: null,
                                    data: item,
                                    hora: horaFinal,
                                    rotina: null,
                                    zapping: 0
                                })
                            } else {
                                if(tipoPersonalizado === 'Jogo') {
                                    notificacoesFinal.push({
                                        mensagem: mensagens.quartoHora.message,
                                        titulo: mensagens.quartoHora.tituloBlade,
                                        descricao: mensagens.quartoHora.descricao,
                                        botao_titulo: 'Abrir o jogo',
                                        botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                                        url_icone: null,
                                        data: item,
                                        hora: horaFinal,
                                        rotina: null,
                                        zapping: 0
                                    })
                                } else {
                                    notificacoesFinal.push({
                                        mensagem: mensagens.quartoHora.message,
                                        titulo: mensagens.quartoHora.tituloBlade,
                                        descricao: mensagens.quartoHora.descricao,
                                        botao_titulo: null,
                                        botao_navigate: null,
                                        url_icone: null,
                                        data: item,
                                        hora: horaFinal,
                                        rotina: null,
                                        zapping: 0
                                    })
                                }
                            }
                        } else if(tipologia === 'Saúde') {
                            notificacoesFinal.push({
                                mensagem: mensagens.quartoHora.message,
                                titulo: mensagens.quartoHora.tituloBlade,
                                descricao: mensagens.quartoHora.descricao,
                                botao_titulo: 'Avisar em 15 minutos',
                                botao_navigate: 'callback:https://geo-navsafety.ua.pt:443/overtv/resposta?type=reminder',
                                url_icone: objectImagens[tipologia],
                                data: item,
                                hora: horaFinal,
                                rotina: null,
                                zapping: 0
                            })
                        } else {
                            notificacoesFinal.push({
                                mensagem: mensagens.quartoHora.message,
                                titulo: null,
                                descricao: null,
                                botao_titulo: null,
                                botao_navigate: null,
                                url_icone: objectImagens[tipologia],
                                data: item,
                                hora: horaFinal,
                                rotina: null,
                                zapping: 0
                            })
                        }
                    }
                } else {
                    if(tipologia === 'Agenda'){
                        notificacoesFinal.push({
                            mensagem: mensagens.quartoHora.message,
                            titulo: null,
                            descricao: null,
                            botao_titulo: null,
                            botao_navigate: null,
                            url_icone: objectImagens[tipologia],
                            data: item,
                            hora: horaFinal,
                            rotina: null,
                            zapping: 1
                        })
                    } else if(tipologia === 'Personalizada' && usaIcone === 'Sim') {
                        if(mensagens.quartoHora.persVal === false){
                            notificacoesFinal.push({
                                mensagem: mensagens.quartoHora.message,
                                titulo: null,
                                descricao: null,
                                botao_titulo: null,
                                botao_navigate: null,
                                url_icone: objectImagens[iconePersonalizado],
                                data: item,
                                hora: horaFinal,
                                rotina: null,
                                zapping: 0
                            })
                        } else {
                            if(tipoPersonalizado === 'Jogo') {
                                notificacoesFinal.push({
                                    mensagem: mensagens.quartoHora.message,
                                    titulo: mensagens.quartoHora.tituloBlade,
                                    descricao: mensagens.quartoHora.descricao,
                                    botao_titulo: 'Abrir o jogo',
                                    botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                                    url_icone: objectImagens[iconePersonalizado],
                                    data: item,
                                    hora: horaFinal,
                                    rotina: null,
                                    zapping: 0
                                })
                            } else {
                                notificacoesFinal.push({
                                    mensagem: mensagens.quartoHora.message,
                                    titulo: mensagens.quartoHora.tituloBlade,
                                    descricao: mensagens.quartoHora.descricao,
                                    botao_titulo: null,
                                    botao_navigate: null,
                                    url_icone: objectImagens[iconePersonalizado],
                                    data: item,
                                    hora: horaFinal,
                                    rotina: null,
                                    zapping: 0
                                })
                            }
                        }
                    } else if(tipologia === 'Personalizada' && usaIcone === 'Não') {
                        if(mensagens.quartoHora.persVal === false){
                            notificacoesFinal.push({
                                mensagem: mensagens.quartoHora.message,
                                titulo: null,
                                descricao: null,
                                botao_titulo: null,
                                botao_navigate: null,
                                url_icone: null,
                                data: item,
                                hora: horaFinal,
                                rotina: null,
                                zapping: 0
                            })
                        } else {
                            if(tipoPersonalizado === 'Jogo') {
                                notificacoesFinal.push({
                                    mensagem: mensagens.quartoHora.message,
                                    titulo: mensagens.quartoHora.tituloBlade,
                                    descricao: mensagens.quartoHora.descricao,
                                    botao_titulo: 'Abrir o jogo',
                                    botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                                    url_icone: null,
                                    data: item,
                                    hora: horaFinal,
                                    rotina: null,
                                    zapping: 0
                                })
                            } else {
                                notificacoesFinal.push({
                                    mensagem: mensagens.quartoHora.message,
                                    titulo: mensagens.quartoHora.tituloBlade,
                                    descricao: mensagens.quartoHora.descricao,
                                    botao_titulo: null,
                                    botao_navigate: null,
                                    url_icone: null,
                                    data: item,
                                    hora: horaFinal,
                                    rotina: null,
                                    zapping: 0
                                })
                            }
                        }
                    } else if(tipologia === 'Saúde') {
                        notificacoesFinal.push({
                            mensagem: mensagens.quartoHora.message,
                            titulo: mensagens.quartoHora.tituloBlade,
                            descricao: mensagens.quartoHora.descricao,
                            botao_titulo: 'Avisar em 15 minutos',
                            botao_navigate: 'callback:https://geo-navsafety.ua.pt:443/overtv/resposta?type=reminder',
                            url_icone: objectImagens[tipologia],
                            data: item,
                            hora: horaFinal,
                            rotina: null,
                            zapping: 0
                        })
                    } else {
                        notificacoesFinal.push({
                            mensagem: mensagens.quartoHora.message,
                            titulo: null,
                            descricao: null,
                            botao_titulo: null,
                            botao_navigate: null,
                            url_icone: objectImagens[tipologia],
                            data: item,
                            hora: horaFinal,
                            rotina: null,
                            zapping: 0
                        })
                    }
                }
            })
        }
    }

    if(mensagens.minutos5.active === true){
        let novaData = new Date();
        let hora = horaEvento.substring(2, 0)
        let minutos = horaEvento.substring(3, 5)
        novaData.setHours(hora, minutos);
        let dataFlex = new Date(novaData - 5 * 60000);

        let horaFinal = `${dataFlex.getHours() < 10 ? `0${dataFlex.getHours()}` : dataFlex.getHours()}:${(dataFlex.getMinutes() < 10) ? `0${dataFlex.getMinutes()}` : dataFlex.getMinutes()}`;

        if(regular === 'Unico') {
            let diaFormated = dia.getFullYear() + '-' + ((dia.getMonth() > 8) ? (dia.getMonth() + 1) : ('0' + (dia.getMonth() + 1))) + '-' + ((dia.getDate() > 9) ? dia.getDate() : ('0' + dia.getDate()));
            if(tipologia === 'Agenda'){
                notificacoesFinal.push({
                    mensagem: mensagens.minutos5.message,
                    titulo: null,
                    descricao: null,
                    botao_titulo: null,
                    botao_navigate: null,
                    url_icone: objectImagens[tipologia],
                    data: diaFormated,
                    hora: horaFinal,
                    zapping: 1
                })
            } else if(tipologia === 'Personalizada' && usaIcone === 'Sim') {
                if(mensagens.minutos5.persVal === false){
                    notificacoesFinal.push({
                        mensagem: mensagens.minutos5.message,
                        titulo: null,
                        descricao: null,
                        botao_titulo: null,
                        botao_navigate: null,
                        url_icone: objectImagens[iconePersonalizado],
                        data: diaFormated,
                        hora: horaFinal,
                        rotina: null,
                        zapping: 0
                    })
                } else {
                    if(tipoPersonalizado === 'Jogo') {
                        notificacoesFinal.push({
                            mensagem: mensagens.minutos5.message,
                            titulo: mensagens.minutos5.tituloBlade,
                            descricao: mensagens.minutos5.descricao,
                            botao_titulo: 'Abrir o jogo',
                            botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                            url_icone: objectImagens[iconePersonalizado],
                            data: diaFormated,
                            hora: horaFinal,
                            rotina: null,
                            zapping: 0
                        })
                    } else {
                        notificacoesFinal.push({
                            mensagem: mensagens.minutos5.message,
                            titulo: mensagens.minutos5.tituloBlade,
                            descricao: mensagens.minutos5.descricao,
                            botao_titulo: null,
                            botao_navigate: null,
                            url_icone: objectImagens[iconePersonalizado],
                            data: diaFormated,
                            hora: horaFinal,
                            rotina: null,
                            zapping: 0
                        })
                    }
                }
            } else if(tipologia === 'Personalizada' && usaIcone === 'Não') {
                if(mensagens.minutos5.persVal === false){
                    notificacoesFinal.push({
                        mensagem: mensagens.minutos5.message,
                        titulo: null,
                        descricao: null,
                        botao_titulo: null,
                        botao_navigate: null,
                        url_icone: null,
                        data: diaFormated,
                        hora: horaFinal,
                        rotina: null,
                        zapping: 0
                    })
                } else {
                    if(tipoPersonalizado === 'Jogo') {
                        notificacoesFinal.push({
                            mensagem: mensagens.minutos5.message,
                            titulo: mensagens.minutos5.tituloBlade,
                            descricao: mensagens.minutos5.descricao,
                            botao_titulo: 'Abrir o jogo',
                            botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                            url_icone: null,
                            data: diaFormated,
                            hora: horaFinal,
                            rotina: null,
                            zapping: 0
                        })
                    } else {
                        notificacoesFinal.push({
                            mensagem: mensagens.minutos5.message,
                            titulo: mensagens.minutos5.tituloBlade,
                            descricao: mensagens.minutos5.descricao,
                            botao_titulo: null,
                            botao_navigate: null,
                            url_icone: null,
                            data: diaFormated,
                            hora: horaFinal,
                            rotina: null,
                            zapping: 0
                        })
                    }
                }
            } else if(tipologia === 'Programas') {
                notificacoesFinal.push({
                    mensagem: mensagens.minutos5.message,
                    titulo: mensagens.minutos5.tituloBlade,
                    descricao: mensagens.minutos5.descricao,
                    botao_titulo: `Ver programa`,
                    botao_navigate: `tune:${canal.id}`,
                    url_icone: objectImagens[tipologia],
                    data: diaFormated,
                    hora: horaFinal,
                    rotina: null,
                    zapping: 0
                })
            } else {
                notificacoesFinal.push({
                    mensagem: mensagens.minutos5.message,
                    titulo: null,
                    descricao: null,
                    botao_titulo: null,
                    botao_navigate: null,
                    url_icone: objectImagens[tipologia],
                    data: diaFormated,
                    hora: horaFinal,
                    zapping: 0
                })
            }
        } else if(regular === 'Diária' || regular === 'Mensal' || regular === 'Semanal') {
            let atual = new Date();
            let primeiroDia = new Date(dias.diasEvento[0]);
            primeiroDia.setHours(atual.getHours(), atual.getMinutes());
            let primeiraCria = new Date(dias.diasEvento[0])
            primeiraCria.setHours(dataFlex.getHours(), dataFlex.getMinutes())

            dias.diasEvento.map((item, key) => {
                if(key === 0){
                    if(primeiraCria >= primeiroDia){
                        if(tipologia === 'Agenda'){
                            notificacoesFinal.push({
                                mensagem: mensagens.minutos5.message,
                                titulo: null,
                                descricao: null,
                                botao_titulo: null,
                                botao_navigate: null,
                                url_icone: objectImagens[tipologia],
                                data: item,
                                hora: horaFinal,
                                rotina: null,
                                zapping: 1
                            })
                        } else if(tipologia === 'Personalizada' && usaIcone === 'Sim') {
                            if(mensagens.minutos5.persVal === false){
                                notificacoesFinal.push({
                                    mensagem: mensagens.minutos5.message,
                                    titulo: null,
                                    descricao: null,
                                    botao_titulo: null,
                                    botao_navigate: null,
                                    url_icone: objectImagens[iconePersonalizado],
                                    data: item,
                                    hora: horaFinal,
                                    rotina: null,
                                    zapping: 0
                                })
                            } else {
                                if(tipoPersonalizado === 'Jogo') {
                                    notificacoesFinal.push({
                                        mensagem: mensagens.minutos5.message,
                                        titulo: mensagens.minutos5.tituloBlade,
                                        descricao: mensagens.minutos5.descricao,
                                        botao_titulo: 'Abrir o jogo',
                                        botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                                        url_icone: objectImagens[iconePersonalizado],
                                        data: item,
                                        hora: horaFinal,
                                        rotina: null,
                                        zapping: 0
                                    })
                                } else {
                                    notificacoesFinal.push({
                                        mensagem: mensagens.minutos5.message,
                                        titulo: mensagens.minutos5.tituloBlade,
                                        descricao: mensagens.minutos5.descricao,
                                        botao_titulo: null,
                                        botao_navigate: null,
                                        url_icone: objectImagens[iconePersonalizado],
                                        data: item,
                                        hora: horaFinal,
                                        rotina: null,
                                        zapping: 0
                                    })
                                }
                            }
                        } else if(tipologia === 'Personalizada' && usaIcone === 'Não') {
                            if(mensagens.minutos5.persVal === false){
                                notificacoesFinal.push({
                                    mensagem: mensagens.minutos5.message,
                                    titulo: null,
                                    descricao: null,
                                    botao_titulo: null,
                                    botao_navigate: null,
                                    url_icone: null,
                                    data: item,
                                    hora: horaFinal,
                                    rotina: null,
                                    zapping: 0
                                })
                            } else {
                                if(tipoPersonalizado === 'Jogo') {
                                    notificacoesFinal.push({
                                        mensagem: mensagens.minutos5.message,
                                        titulo: mensagens.minutos5.tituloBlade,
                                        descricao: mensagens.minutos5.descricao,
                                        botao_titulo: 'Abrir o jogo',
                                        botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                                        url_icone: null,
                                        data: item,
                                        hora: horaFinal,
                                        rotina: null,
                                        zapping: 0
                                    })
                                } else {
                                    notificacoesFinal.push({
                                        mensagem: mensagens.minutos5.message,
                                        titulo: mensagens.minutos5.tituloBlade,
                                        descricao: mensagens.minutos5.descricao,
                                        botao_titulo: null,
                                        botao_navigate: null,
                                        url_icone: null,
                                        data: item,
                                        hora: horaFinal,
                                        rotina: null,
                                        zapping: 0
                                    })
                                }
                            }
                        } else if(tipologia === 'Programas') {
                            notificacoesFinal.push({
                                mensagem: mensagens.minutos5.message,
                                titulo: mensagens.minutos5.tituloBlade,
                                descricao: mensagens.minutos5.descricao,
                                botao_titulo: `Ver programa`,
                                botao_navigate: `tune:${canal.id}`,
                                url_icone: objectImagens[tipologia],
                                data: item,
                                hora: horaFinal,
                                rotina: null,
                                zapping: 0
                            })
                        } else {
                            notificacoesFinal.push({
                                mensagem: mensagens.minutos5.message,
                                titulo: null,
                                descricao: null,
                                botao_titulo: null,
                                botao_navigate: null,
                                url_icone: objectImagens[tipologia],
                                data: item,
                                hora: horaFinal,
                                rotina: null,
                                zapping: 0
                            })
                        }
                    }
                } else {
                    if(tipologia === 'Agenda'){
                        notificacoesFinal.push({
                            mensagem: mensagens.minutos5.message,
                            titulo: null,
                            descricao: null,
                            botao_titulo: null,
                            botao_navigate: null,
                            url_icone: objectImagens[tipologia],
                            data: item,
                            hora: horaFinal,
                            rotina: null,
                            zapping: 1
                        })
                    } else if(tipologia === 'Personalizada' && usaIcone === 'Sim') {
                        if(mensagens.minutos5.persVal === false){
                            notificacoesFinal.push({
                                mensagem: mensagens.minutos5.message,
                                titulo: null,
                                descricao: null,
                                botao_titulo: null,
                                botao_navigate: null,
                                url_icone: objectImagens[iconePersonalizado],
                                data: item,
                                hora: horaFinal,
                                rotina: null,
                                zapping: 0
                            })
                        } else {
                            if(tipoPersonalizado === 'Jogo') {
                                notificacoesFinal.push({
                                    mensagem: mensagens.minutos5.message,
                                    titulo: mensagens.minutos5.tituloBlade,
                                    descricao: mensagens.minutos5.descricao,
                                    botao_titulo: 'Abrir o jogo',
                                    botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                                    url_icone: objectImagens[iconePersonalizado],
                                    data: item,
                                    hora: horaFinal,
                                    rotina: null,
                                    zapping: 0
                                })
                            } else {
                                notificacoesFinal.push({
                                    mensagem: mensagens.minutos5.message,
                                    titulo: mensagens.minutos5.tituloBlade,
                                    descricao: mensagens.minutos5.descricao,
                                    botao_titulo: null,
                                    botao_navigate: null,
                                    url_icone: objectImagens[iconePersonalizado],
                                    data: item,
                                    hora: horaFinal,
                                    rotina: null,
                                    zapping: 0
                                })
                            }
                        }
                    } else if(tipologia === 'Personalizada' && usaIcone === 'Não') {
                        if(mensagens.minutos5.persVal === false){
                            notificacoesFinal.push({
                                mensagem: mensagens.minutos5.message,
                                titulo: null,
                                descricao: null,
                                botao_titulo: null,
                                botao_navigate: null,
                                url_icone: null,
                                data: item,
                                hora: horaFinal,
                                rotina: null,
                                zapping: 0
                            })
                        } else {
                            if(tipoPersonalizado === 'Jogo') {
                                notificacoesFinal.push({
                                    mensagem: mensagens.minutos5.message,
                                    titulo: mensagens.minutos5.tituloBlade,
                                    descricao: mensagens.minutos5.descricao,
                                    botao_titulo: 'Abrir o jogo',
                                    botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                                    url_icone: null,
                                    data: item,
                                    hora: horaFinal,
                                    rotina: null,
                                    zapping: 0
                                })
                            } else {
                                notificacoesFinal.push({
                                    mensagem: mensagens.minutos5.message,
                                    titulo: mensagens.minutos5.tituloBlade,
                                    descricao: mensagens.minutos5.descricao,
                                    botao_titulo: null,
                                    botao_navigate: null,
                                    url_icone: null,
                                    data: item,
                                    hora: horaFinal,
                                    rotina: null,
                                    zapping: 0
                                })
                            }
                        }
                    } else if(tipologia === 'Programas') {
                        notificacoesFinal.push({
                            mensagem: mensagens.minutos5.message,
                            titulo: mensagens.minutos5.tituloBlade,
                            descricao: mensagens.minutos5.descricao,
                            botao_titulo: `Ver programa`,
                            botao_navigate: `tune:${canal.id}`,
                            url_icone: objectImagens[tipologia],
                            data: item,
                            hora: horaFinal,
                            rotina: null,
                            zapping: 0
                        })
                    } else {
                        notificacoesFinal.push({
                            mensagem: mensagens.minutos5.message,
                            titulo: null,
                            descricao: null,
                            botao_titulo: null,
                            botao_navigate: null,
                            url_icone: objectImagens[tipologia],
                            data: item,
                            hora: horaFinal,
                            rotina: null,
                            zapping: 0
                        })
                    }
                }
            })
        }
    }

    if(mensagens.momentoAcontecimento.active === true){
        if(regular === 'Unico') {
            let diaFormated = dia.getFullYear() + '-' + ((dia.getMonth() > 8) ? (dia.getMonth() + 1) : ('0' + (dia.getMonth() + 1))) + '-' + ((dia.getDate() > 9) ? dia.getDate() : ('0' + dia.getDate()));
            if(tipologia === 'Agenda'){
                notificacoesFinal.push({
                    mensagem: mensagens.momentoAcontecimento.message,
                    titulo: null,
                    descricao: null,
                    botao_titulo: null,
                    botao_navigate: null,
                    url_icone: objectImagens[tipologia],
                    data: diaFormated,
                    hora: horaEvento,
                    zapping: 1
                })
            } else if(tipologia === 'Personalizada' && usaIcone === 'Sim') {
                if(mensagens.momentoAcontecimento.persVal === false){
                    notificacoesFinal.push({
                        mensagem: mensagens.momentoAcontecimento.message,
                        titulo: null,
                        descricao: null,
                        botao_titulo: null,
                        botao_navigate: null,
                        url_icone: objectImagens[iconePersonalizado],
                        data: diaFormated,
                        hora: horaEvento,
                        rotina: null,
                        zapping: 0
                    })
                } else {
                    if(tipoPersonalizado === 'Jogo') {
                        notificacoesFinal.push({
                            mensagem: mensagens.momentoAcontecimento.message,
                            titulo: mensagens.momentoAcontecimento.tituloBlade,
                            descricao: mensagens.momentoAcontecimento.descricao,
                            botao_titulo: 'Abrir o jogo',
                            botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                            url_icone: objectImagens[iconePersonalizado],
                            data: diaFormated,
                            hora: horaEvento,
                            rotina: null,
                            zapping: 0
                        })
                    } else {
                        notificacoesFinal.push({
                            mensagem: mensagens.momentoAcontecimento.message,
                            titulo: mensagens.momentoAcontecimento.tituloBlade,
                            descricao: mensagens.momentoAcontecimento.descricao,
                            botao_titulo: null,
                            botao_navigate: null,
                            url_icone: objectImagens[iconePersonalizado],
                            data: diaFormated,
                            hora: horaEvento,
                            rotina: null,
                            zapping: 0
                        })
                    }
                }
            } else if(tipologia === 'Personalizada' && usaIcone === 'Não') {
                if(mensagens.momentoAcontecimento.persVal === false){
                    notificacoesFinal.push({
                        mensagem: mensagens.momentoAcontecimento.message,
                        titulo: null,
                        descricao: null,
                        botao_titulo: null,
                        botao_navigate: null,
                        url_icone: null,
                        data: diaFormated,
                        hora: horaEvento,
                        rotina: null,
                        zapping: 0
                    })
                } else {
                    if(tipoPersonalizado === 'Jogo') {
                        notificacoesFinal.push({
                            mensagem: mensagens.momentoAcontecimento.message,
                            titulo: mensagens.momentoAcontecimento.tituloBlade,
                            descricao: mensagens.momentoAcontecimento.descricao,
                            botao_titulo: 'Abrir o jogo',
                            botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                            url_icone: null,
                            data: diaFormated,
                            hora: horaEvento,
                            rotina: null,
                            zapping: 0
                        })
                    } else {
                        notificacoesFinal.push({
                            mensagem: mensagens.momentoAcontecimento.message,
                            titulo: mensagens.momentoAcontecimento.tituloBlade,
                            descricao: mensagens.momentoAcontecimento.descricao,
                            botao_titulo: null,
                            botao_navigate: null,
                            url_icone: null,
                            data: diaFormated,
                            hora: horaEvento,
                            rotina: null,
                            zapping: 0
                        })
                    }
                }
            } else if(tipologia === 'Programas') {
                notificacoesFinal.push({
                    mensagem: mensagens.momentoAcontecimento.message,
                    titulo: mensagens.momentoAcontecimento.tituloBlade,
                    descricao: mensagens.momentoAcontecimento.descricao,
                    botao_titulo: `Ver programa`,
                    botao_navigate: `tune:${canal.id}`,
                    url_icone: objectImagens[tipologia],
                    data: diaFormated,
                    hora: horaEvento,
                    rotina: null,
                    zapping: 0
                })
            } else {
                notificacoesFinal.push({
                    mensagem: mensagens.momentoAcontecimento.message,
                    titulo: null,
                    descricao: null,
                    botao_titulo: null,
                    botao_navigate: null,
                    url_icone: objectImagens[tipologia],
                    data: diaFormated,
                    hora: horaEvento,
                    zapping: 0
                })
            }
        } else if(regular === 'Diária' || regular === 'Mensal' || regular === 'Semanal') {
            dias.diasEvento.map(item => {
                if(tipologia === 'Agenda'){
                    notificacoesFinal.push({
                        mensagem: mensagens.momentoAcontecimento.message,
                        titulo: null,
                        descricao: null,
                        botao_titulo: null,
                        botao_navigate: null,
                        url_icone: objectImagens[tipologia],
                        data: item,
                        hora: horaEvento,
                        rotina: null,
                        zapping: 1
                    })
                } else if(tipologia === 'Personalizada' && usaIcone === 'Sim') {
                    if(mensagens.momentoAcontecimento.persVal === false){
                        notificacoesFinal.push({
                            mensagem: mensagens.momentoAcontecimento.message,
                            titulo: null,
                            descricao: null,
                            botao_titulo: null,
                            botao_navigate: null,
                            url_icone: objectImagens[iconePersonalizado],
                            data: item,
                            hora: horaEvento,
                            rotina: null,
                            zapping: 0
                        })
                    } else {
                        if(tipoPersonalizado === 'Jogo') {
                            notificacoesFinal.push({
                                mensagem: mensagens.momentoAcontecimento.message,
                                titulo: mensagens.momentoAcontecimento.tituloBlade,
                                descricao: mensagens.momentoAcontecimento.descricao,
                                botao_titulo: 'Abrir o jogo',
                                botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                                url_icone: objectImagens[iconePersonalizado],
                                data: item,
                                hora: horaEvento,
                                rotina: null,
                                zapping: 0
                            })
                        } else {
                            notificacoesFinal.push({
                                mensagem: mensagens.momentoAcontecimento.message,
                                titulo: mensagens.momentoAcontecimento.tituloBlade,
                                descricao: mensagens.momentoAcontecimento.descricao,
                                botao_titulo: null,
                                botao_navigate: null,
                                url_icone: objectImagens[iconePersonalizado],
                                data: item,
                                hora: horaEvento,
                                rotina: null,
                                zapping: 0
                            })
                        }
                    }
                } else if(tipologia === 'Personalizada' && usaIcone === 'Não') {
                    if(mensagens.momentoAcontecimento.persVal === false){
                        notificacoesFinal.push({
                            mensagem: mensagens.momentoAcontecimento.message,
                            titulo: null,
                            descricao: null,
                            botao_titulo: null,
                            botao_navigate: null,
                            url_icone: null,
                            data: item,
                            hora: horaEvento,
                            rotina: null,
                            zapping: 0
                        })
                    } else {
                        if(tipoPersonalizado === 'Jogo') {
                            notificacoesFinal.push({
                                mensagem: mensagens.momentoAcontecimento.message,
                                titulo: mensagens.momentoAcontecimento.tituloBlade,
                                descricao: mensagens.momentoAcontecimento.descricao,
                                botao_titulo: 'Abrir o jogo',
                                botao_navigate: 'callback:http://prosenior.ddns.net/meo',
                                url_icone: null,
                                data: item,
                                hora: horaEvento,
                                rotina: null,
                                zapping: 0
                            })
                        } else {
                            notificacoesFinal.push({
                                mensagem: mensagens.momentoAcontecimento.message,
                                titulo: mensagens.momentoAcontecimento.tituloBlade,
                                descricao: mensagens.momentoAcontecimento.descricao,
                                botao_titulo: null,
                                botao_navigate: null,
                                url_icone: null,
                                data: item,
                                hora: horaEvento,
                                rotina: null,
                                zapping: 0
                            })
                        }
                    }
                } else if(tipologia === 'Programas') {
                    notificacoesFinal.push({
                        mensagem: mensagens.momentoAcontecimento.message,
                        titulo: mensagens.momentoAcontecimento.tituloBlade,
                        descricao: mensagens.momentoAcontecimento.descricao,
                        botao_titulo: `Ver programa`,
                        botao_navigate: `tune:${canal.id}`,
                        url_icone: objectImagens[tipologia],
                        data: item,
                        hora: horaEvento,
                        rotina: null,
                        zapping: 0
                    })
                } else {
                    notificacoesFinal.push({
                        mensagem: mensagens.momentoAcontecimento.message,
                        titulo: null,
                        descricao: null,
                        botao_titulo: null,
                        botao_navigate: null,
                        url_icone: objectImagens[tipologia],
                        data: item,
                        hora: horaEvento,
                        rotina: null,
                        zapping: 0
                    })
                }
            })
        }
    }

    return notificacoesFinal;
}