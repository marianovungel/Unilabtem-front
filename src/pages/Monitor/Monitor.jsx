import React, { useState } from 'react'
import { useEffect } from 'react'
//import SingleVendaPost from '../../components/SingleVendaPost/SingleVendaPost'
import VendaEditMonitor from '../../components/VendaEditMonitor/VendaEditMonitor'
import Vendapost from '../../components/VedaPost/Vendapost'
import api from '../../services/api'
import './Monitor.css'
import DoacaoMonitor from '../../components/DoacaoMonitor/DoacaoMonitor'
import DoacaoEditMonitor from '../../components/DoacaoEditMonitor/DoacaoEditMonitor'
import AluguelPost from '../../components/AluguelPost/AluguelPost'

export default function Monitor() {
    const [menumonitor, setMenumonitor] = useState(true)
    const [postvendam, setPostvendam] = useState(false)
    const [edvenda, setEdvenda] = useState(false)
    const [postaluguel, setPostaluguel] = useState(false)
    const [postdoacao, setPostdoacao] = useState(false)
    const [editpostdoacao, setEditpostdoacao] = useState(false)
    const [vendapn, setVendapn] = useState(0)


    const setAlluguel = ()=>{
        setMenumonitor(false)
        setPostdoacao(false)
        setEditpostdoacao(false)
        setPostvendam(false)
        setPostaluguel(true)
    }
    const setVenda = ()=>{
        setMenumonitor(false)
        setPostdoacao(false)
        setEditpostdoacao(false)
        setPostvendam(true)
        setPostaluguel(false)
    }
    const setEdVenda = ()=>{
        setMenumonitor(false)
        setEditpostdoacao(false)
        setPostdoacao(false)
        setPostvendam(false)
        setEdvenda(true)
        setPostaluguel(false)
    }
    const setDoacao = ()=>{
        setMenumonitor(false)
        setEditpostdoacao(false)
        setPostdoacao(true)
        setPostvendam(false)
        setEdvenda(false)
        setPostaluguel(false)
    }
    const setEditDoacao = ()=>{
        setMenumonitor(false)
        setEditpostdoacao(true)
        setPostdoacao(false)
        setPostvendam(false)
        setEdvenda(false)
        setPostaluguel(false)
    }

    const calcularVenda = async ()=>{
        try{
            const product = await api.get('/produtomonitor')
            setVendapn(product.data.length)
        }catch(err){}
    }

    useEffect(()=>{
        calcularVenda()
    }, [])

  return (
    <div className='MonitorContent'>
        <div className="menuMonitor">
            <img src="./image/newLogo.png" alt=" " className="imgLOgoMonitor" />
        </div>
        <div className="menuMonitorInferior">
            <i className="painelMenu">Painel de Monitoramento - UNILABTEM</i>
        </div>
        <div className="MenuLateralAndPainel">
            <div className="MenuLateral">
                <div className="menuMM">Número de Pedidos</div>
                <div className="vendaMonitor editMMonitor">Venda {vendapn}/4</div>
                <div className="doacaoMonitor editMMonitor">Doação 12/3</div>
                <div className="aluguelMonitor editMMonitor">Aluguel 95/10</div>
                <div className="compartilhamentoMonitor editMMonitor">Compartilhamento 71/1</div>
            </div>
            <div className="Painel">
                {menumonitor && (
                <>
                
                    <div className="cardMonitor" onClick={setVenda}>
                        <h4 className="titleCardMonitor">Postar Venda</h4>
                        <p className="textMonitor">
                            Neste Carde tem os produtos que 
                            os usuários da plataforma UNILABTEM
                            desejam <b className='verdeDivulgar'>DIVULGAR</b> (a espera de aprovação).
                        </p>
                    </div>
                    
                    <div className="cardMonitor" onClick={setEdVenda}>
                        <h4 className="titleCardMonitor">Editar Venda</h4>
                        <p className="textMonitor">
                            Neste Carde tem os produtos que 
                            os usuários da plataforma UNILABTEM
                            desejam <b className='editarAmarelo'>EDITAR</b> (a espera de aprovação).
                        </p>
                    </div>
                    <div className="cardMonitor" onClick={setDoacao}>
                        <h4 className="titleCardMonitor">Postar Doação</h4>
                        <p className="textMonitor">
                            Neste Carde tem as doações que 
                            os usuários da plataforma UNILABTEM
                            desejam <b className='verdeDivulgar'>DIVULGAR</b> (a espera de aprovação).
                        </p>
                    </div>
                    <div className="cardMonitor" onClick={setEditDoacao}>
                        <h4 className="titleCardMonitor">Editar Doação</h4>
                        <p className="textMonitor">
                            Neste Carde tem os produtos que 
                            os usuários da plataforma UNILABTEM
                            desejam <b className='editarAmarelo'>EDITAR</b> (a espera de aprovação).
                        </p>
                    </div>
                    <div className="cardMonitor" onClick={setAlluguel}>
                        <h4 className="titleCardMonitor">Postar Aluguel</h4>
                        <p className="textMonitor">
                            Neste Carde tem as casas que 
                            os usuários da plataforma UNILABTEM
                            desejam <b className='verdeDivulgar'>DIVULGAR</b> (a espera de aprovação).
                        </p>
                    </div>
                    <div className="cardMonitor">
                        <h4 className="titleCardMonitor">Editar Aluguel</h4>
                        <p className="textMonitor">
                            Neste Carde tem as casas que 
                            os usuários da plataforma UNILABTEM
                            desejam <b className='editarAmarelo'>EDITAR</b> (a espera de aprovação).
                        </p>
                    </div>
                    <div className="cardMonitor">
                        <h4 className="titleCardMonitor">Postar Compartilhamento</h4>
                        <p className="textMonitor">
                            Neste Carde tem as casas que 
                            os usuários da plataforma UNILABTEM
                            desejam <b className='verdeDivulgar'>DIVULGAR</b> (a espera de aprovação).
                        </p>
                    </div>
                    <div className="cardMonitor">
                        <h4 className="titleCardMonitor">Editar Compartilhamento</h4>
                        <p className="textMonitor">
                            Neste Carde tem as casas que 
                            os usuários da plataforma UNILABTEM
                            desejam <b className='editarAmarelo'>EDITAR</b> (a espera de aprovação).
                        </p>
                    </div>
                </>)}
                
                {postvendam && (<Vendapost /> )}
                {edvenda && (<VendaEditMonitor /> )}
                {postdoacao && (<DoacaoMonitor />)}
                {editpostdoacao && (<DoacaoEditMonitor />)}
                {postaluguel && (<AluguelPost />)}
                
            </div>
        </div>
    </div>
  )
}
