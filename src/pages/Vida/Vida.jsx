import './Vida.css'
import { Link } from 'react-router-dom'
import Menu from '../../components/Menu/Menu';
import {useContext} from 'react'
import {Context} from '../../Context/Context'
import Footer from '../../components/Footer/Footer';
// import SlideShow from '../../components/GPT/GPT'


// var slides = [
//     {
//       _id:"1",
//     img:"./image/1.png",
//     title:"CGAD"
//   },
//     {
//       _id:"2",
//     img:"./image/2.png",
//     title:"CGAD"
//   },
//     {
//       _id:"3",
//     img:"./image/3.png",
//     title:"CGAD"
//   },
//     {
//       _id:"4",
//     img:"./image/4.png",
//     title:"CGAD"
//   }
//   ];


export default function Vida() {

    const { user } = useContext(Context)
    // const [newStyle, setNewStyle] = useState("showwNew")
    
    // const [countere, setCountere] = useState(1)

    // useEffect(()=>{
    //     setCountere(1)
    // }, [])

    // setInterval(function(){
    //     document.getElementById('radio' + countere).checked = true;
    //     setCountere(countere+1)
    //     if(countere > 4){
    //         setCountere(1)
    //     }
    // }, 8000)

    const Ru =()=>{
        window.open("https://unilab.edu.br/wp-content/uploads/2022/09/RU-Ceara-Setembro-Semana-4.pdf")
    }
    // const Ru =()=>{
    //     window.open("https://unilab.edu.br/restauranteuniversitario/")
    // }
    const Inter =()=>{
        window.open("https://play.google.com/store/apps/details?id=com.edesonabizerril.newintercampi&hl=pt_BR&gl=US")
    }
    const Biblioteca =()=>{
        window.open("https://www.documentodoestudante.com.br/lp/carteirinha-de-estudante-nacional-ads/?gad_source=1&gclid=EAIaIQobChMI3ZuRqIfjhgMVu1ZIAB2hIgZWEAAYASAAEgLeRPD_BwE")
    }
    const Curso =()=>{
        // window.open("https://unilab.edu.br/cursos-de-graduacao/")
        window.location.replace("/oportunidade")
    }
    const RNE =()=>{
        window.open("https://www.tirarrne.com.br/artigos/como-renovar-rne-permanente-vencido/")
    }
    const Cplp =()=>{
        window.open("https://www.documentodoestudante.com.br/lp/carteira-de-estudante-ads/?gad_source=1&gclid=CjwKCAjwvIWzBhAlEiwAHHWgvaZqg-G2PkCsjobMbyoGQdMfnqR8cRQV2n07oHXxDHRNTHnsigyCnRoCuvgQAvD_BwE")
    }

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
        <div className='vidaContent'>
            <div className="imgContentVida">
                {/* <h3 className="headerTitleVida">UnilabTem</h3> */}
                {/* <img src="./image/fundo3.jpeg" alt="" 
                className='imgItemVida' /> */}
                <div className="slider">
                    <div className="slides">
                        <input type="radio" name="radio-btn" id="radio1" />
                        <input type="radio" name="radio-btn" id="radio2" />
                        <input type="radio" name="radio-btn" id="radio3" />
                        <input type="radio" name="radio-btn" id="radio4" />

                        <div className="slide first">
                            <img src="./image/1.png" alt="" />
                        </div>
                        <div className="slide">
                            <img src="./image/2.png" alt="" />
                        </div>
                        <div className="slide">
                            <img src="./image/3.jpg" alt="" />
                        </div>
                        <div className="slide">
                            <img src="./image/4.jpg" alt="" />
                        </div>

                        <div className="navigation-auto">
                            <div className="auto-btn1"></div>
                            <div className="auto-btn2"></div>
                            <div className="auto-btn3"></div>
                            <div className="auto-btn4"></div>
                        </div>
                    </div>

                    <div className="navigation-manual">
                        <label htmlFor="radio1" className="manual-btn"></label>
                        <label htmlFor="radio2" className="manual-btn"></label>
                        <label htmlFor="radio3" className="manual-btn"></label>
                        <label htmlFor="radio4" className="manual-btn"></label>
                    </div>
                </div>
            </div>
            <div className="services">
                <h4 className="serviceTitleVida">Serviços</h4>
                <section className='sectionService'>
                    <div className="serviceItem">
                        <h6 className="serviceTitle"><i className="fa-solid fa-book"></i> Carteirinha</h6>
                        <p className="serviceParagrafo">
                        Estudantes dos cursos de ensino presencial ou do ensino a 
                        distância(EAD), podem solicitar o Documento do Estudante para 
                        garantir meia-entrada no ingresso de shows, eventos e cinemas. 
                        Basta estar regularmente matriculado em uma destas modalidades de ensino:Infantil, 
                        Fundamental, Médio e Técnico, Cursos de graduação, 
                        Especialização, Mestrado e Doutorado.
                        </p>
                        <i className="serviceLink" onClick={Biblioteca}>Saiba mais...</i>
                    </div>
                    <div className="serviceItem">
                        <h6 className="serviceTitle"><i className="fa-solid fa-bus"></i> Intercampis </h6>
                        <p className="serviceParagrafo">
                            Intercampi é o serviço de transporte de ônibus entre os campi do Ceará 
                            para os estudantes e servidores da Unilab. 
                            Informações sobre os horários e rotas podem ser consultados abaixo.
                        </p>
                        <div className="descBottom">
                            <Link to='/intercampi'><i className="serviceLink">Horários e Rotas</i></Link>
                            <i className="serviceLink" onClick={Inter}></i>
                        </div>
                    </div>
                    <div className="serviceItem">
                        <h6 className="serviceTitle"><i className="fa-solid fa-utensils"></i> Restaurante Universitário (RU)</h6>
                        <p className="serviceParagrafo">
                        Os Restaurantes Universitários (RUs) da 
                        Unilab têm como objetivos fornecer refeições
                        nutricionalmente equilibradas, seguras do ponto
                        de vista higiênico-sanitário e adequadas às necessidades 
                        nutricionais dos usuários a baixo custo, atuando como um 
                        dos instrumentos da política de permanência dos jovens na 
                        educação superior pública federal. São usuários dos RUs 
                        estudantes dos cursos de graduação ou pós-graduação, na 
                        modalidade presencial ou à distância, servidores(as) 
                        técnico-administrativos(as) e docentes, funcionários(as) das 
                        empresas terceirizadas à serviço da universidade e 
                        visitantes em caráter acadêmico-cultural.
                        </p>
                        <i className="serviceLink" onClick={Ru}>Cardápio...</i>
                    </div>
                    <div className="serviceItem">
                        <h6 className="serviceTitle"><i className="fa-solid fa-passport"></i> Documentação Para O Visto</h6>
                        <p className="serviceParagrafo">
                            O processo de Renovação do RNE-CRNM permanente é o mesmo da primeira via do documento. No entanto, esses documentos serão destinados para cada caso. Sendo assim, os documentos básicos, são:
                            É necessário ter em mãos duas fotos recentes 3×4, coloridas com o fundo branco;
                            RNE anterior;
                            Pagamento da taxa requerida para esse documento (levar o comprovante impresso);
                            Em caso de permanência obtida no Brasil deve levar uma cópia do Diário Oficial da União (DOU);
                        </p>
                        <div className="descBottom">
                            <i className="serviceLink" onClick={RNE}>Saiba mais...</i>
                            <Link to='/visto'><i className="serviceLink">Documentos</i></Link>
                        </div>
                    </div>
                    <div className="serviceItem">
                        <h6 className="serviceTitle"><i className="fa-solid fa-briefcase"></i> Oportunidades</h6>
                        <p className="serviceParagrafo">
                            Nesta página a nossa plataforma conta com as atualizações de cursos
                             e conferências que estão a ser oferecidos no estado do Ceará e em outros entados do Brasil.
                        </p>
                        <i className="serviceLink" onClick={Curso}>Saiba mais...</i>
                    </div>
                    <div className="serviceItem">
                        <h6 className="serviceTitle"><i className="fa-solid fa-address-card"></i> Carterinha de Estudante</h6>
                        <p className="serviceParagrafo">
                        Estudantes dos cursos de ensino presencial ou do ensino a 
                        distância(EAD), podem solicitar o Documento do Estudante 
                        para garantir meia-entrada no ingresso de shows, eventos e cinemas. 
                        Basta estar regularmente matriculado em
                        uma destas modalidades de ensino:Infantil, Fundamental, Médio e Técnico,
                        Cursos de graduação, Especialização, Mestrado e Doutorado.
                        </p>
                        <i className="serviceLink" onClick={Cplp}>Saiba mais...</i>
                    </div>
                </section>
            </div>
          
          
        </div>
        <div className='FooterContainerFix'>
            <Footer />
        </div>
    </div>
  )
}
