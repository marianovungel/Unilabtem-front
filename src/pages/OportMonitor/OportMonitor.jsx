import React, { useState } from 'react'
import { useEffect } from 'react'
import Vendapost from '../../components/VedaPost/Vendapost'
import api from '../../services/api'
import './OportMonitor.css'

export default function OportMonitor() {
    const [menumonitor, setMenumonitor] = useState(true)
    const [vendapn, setVendapn] = useState(0)


    

    
    useEffect(()=>{
        const calcularVenda = async ()=>{
            try{
                const product = await api.get('/produtomonitor')
                // console.log(product) 
                setVendapn(product.data.length)
            }catch(err){}
        }
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
                
                    <div className="cardMonitor" >
                        <h4 className="titleCardMonitor">Postar Venda</h4>
                        <p className="textMonitor">
                            Neste Carde tem os produtos que 
                            os usuários da plataforma UNILABTEM
                            desejam <b className='verdeDivulgar'>DIVULGAR</b> (a espera de aprovação).
                        </p>
                    </div>
                    
                </>)}
                
                <Vendapost />
                
            </div>
        </div>
    </div>
  )
}

