import React, { useEffect, useState } from 'react'
import './Oportunidade.css'
import { Link } from 'react-router-dom'
import {useContext} from 'react'
import {Context} from '../../Context/Context'
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer'
import api from '../../services/api'

export default function Oportunidade() {

    const { user } = useContext(Context)
    const [data, setData] = useState([])

    const OpenLink = (URL)=>{
        window.open(`${URL}`)
    }

    useEffect(()=>{
        const getData = async () =>{
            try {
                const res = await api.get("/oportunidade")
                setData(res.data)
            } catch (error) {
                alert(error.message)
            }
        }
        
        getData()
    }, [])

    

  return (
    <div className='desapego'>
        <div className='OI' >
            <Menu />
        </div>
        <div className='menuBootstrap' >
        <nav className="navbar navbar-expand-lg navbar-light  menuBootstrap">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <div className='logoBootstrap'>
                    <img className='imagemLogo' src="./image/preta.png" alt="logoUnilabtem" />
                </div>
            </Link>
            <button className="bg-light braca" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon bg-light braca"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/">Vida na Unilab</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/doacao">Doação</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-light" to="/venda">Venda</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-light" to="/sobre">Sobre</Link>
                </li>
                <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-light" to="" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Habitação
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><Link className="dropdown-item" to="/habitacao-aluguel">Aluguel</Link></li>
                    <li><Link className="dropdown-item" to="/habitacao-compartilhar">Compartilhamento</Link></li>
                    <li><Link className="dropdown-item" to="/aluguel-cadastrando">Divulgar Aluguel</Link></li>
                </ul>
                </li>
                {user?.profilePic && (<li className="nav-item">
                    <Link className="nav-link text-light" to="/user">
                        {user?.profilePic ? (<img src={user?.profilePic} alt="" className='imgMenuHumburguer' />):
                        (<i>Usuário</i>)}
                    </Link>
                </li>
                )}
            </ul>
            </div>
        </div>
        </nav>
        </div>
        <div className='Oportunidade'>
            {/* <div className="imgContentOpor">
                <div className="containerOport"></div>
            </div> */}
            <div className="fullnewHeaderOpor">
                <div className="healfOpor">
                    <div className="leftTextOpor">Upcoming Events</div>
                    <div className="rightIconOpor">
                        <i className="fa-solid fa-newspaper"></i>
                        <i className="fa-solid fa-folder-open"></i>
                    </div>
                </div>
            </div>
            <div className="fullnewHeaderOpor">
                {data.map((dt)=>(
                    <div className="healfPostOpor" key={dt._id}>
                        <div className="dataOport">
                            <div className='MesOport'>{new Date(dt.createdAt).getDate().toString().padStart(2, "0")}</div>
                            <div className='MesTracoOport'></div>
                            <div className='MesOport'>{(new Date(dt.createdAt).getMonth() + 1).toString().padStart(2, "0")}</div>
                        </div>
                        <div className="imgOportPodt">
                            <img src={dt.photo} alt="" className='ImgOportPostItem' />
                        </div>
                        <div className="textOpotPost">
                            <div className="titleOportCard">{dt.title}</div>
                            <div className="subOportCard">{dt.local} {dt.data} {dt.hora}</div>
                            <div className="paragrafOportCard">{dt.desc}</div>
                            <div className="tracoOport"></div>
                            <div className="linkOport" onClick={()=>OpenLink(dt.link)}>Acessar o Link <i className="fa-solid fa-arrow-right"></i></div>
                        </div>
                    </div> 
                )) 
                }
            </div>
        </div>
        <div className='FooterContainerFix'>
            <Footer />
        </div>
    </div>
  )
}
