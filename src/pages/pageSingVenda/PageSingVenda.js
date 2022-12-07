import React, { useEffect, useState } from 'react'
import './PageSingVenda.css'
import api from '../../services/api'
import { useLocation } from 'react-router-dom';
const URLImg = "https://festupload.s3.amazonaws.com/";

export default function PageSingVenda() {
    const location = useLocation();
    const path = location.pathname.split("/")[2]
    const [post, setPost] = useState({})

    useEffect(()=>{
        const getPost = async ()=>{
          const res = await api.get("/produto/"+path)
          setPost(res.data)
        }
        getPost()
      }, [path])

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
                <div className="vendaMonitor editMMonitor">Venda 75/4</div>
                <div className="doacaoMonitor editMMonitor">Doação 12/3</div>
                <div className="aluguelMonitor editMMonitor">Aluguel 95/10</div>
                <div className="compartilhamentoMonitor editMMonitor">Compartilhamento 71/1</div>
            </div>
            <div className="Painel">
                <div className='fullContentSingleVendaPost'>
            <div className='conteinerSinglePostVendaSingleVendaPost'>
        
            <div className='fullContentModerador'>
            <div className='imgContent'>
                <p id='categoria'>Categoria: Venda</p>
                <div className='imgDivSingle'>
                <img src={URLImg+post.photo} id='photoVendaId' alt='#' />
                </div>
                
            </div>
            <div className='descContentMonitor'>
                <div>
                <div className='avaliacao'>
                <i className="fa-solid fa-star" id='estrela'></i>
                <i className="fa-solid fa-star" id='estrela'></i>
                <i className="fa-solid fa-star" id='estrela'></i>
                <i className="fa-solid fa-star" id='estrela'></i>
                <i className="fa-solid fa-star-half-stroke" id='estrela'></i>
                (Avaliações)
                </div>
                <div className='codigoItem'>
                <p>Cód. Item </p>
                </div>
                <h2>R$ {post.preco}</h2>
                <p>Vendedor: {post.username}</p>
                <p>Descrição: {post.desc}</p>
                <div className='cartoes'>
                
                </div>
                </div>
            </div>
            
                <div className='butoomContent'>
                    <div className='buttonZapDiv' ><button  className='buttonEditar' id='colorAprovado'>Aprovar <i class="fa-solid fa-thumbs-up"></i></button></div>
                
                    <div></div>

                    <div className='buttonZapDiv'><button  className='buttonDeletar' >Reprovar <i class="fa-solid fa-thumbs-down"></i></button></div>
                </div>
            <footer className=''></footer>
            </div>
        </div>
        </div>
                    
            </div>
        </div>
    </div>
  )
}
