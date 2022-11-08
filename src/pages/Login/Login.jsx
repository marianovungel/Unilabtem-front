
import './Login.css'
import {Link} from 'react-router-dom'
import {useRef, useContext, useState, useEffect} from 'react'
import {Context} from '../../Context/Context'
import api from '../../services/api'

export default function Login() {

    const userRef = useRef();
    const passwordRef = useRef();
    const {isFetching, dispatch } = useContext(Context)
    const [ale, setAle] = useState(false)
    const [falsesenha, setFalsesenha] = useState(false)
    var checkValid = false;

    useEffect(()=>{
        setAle(false)
    }, [])

    const handleSubmit = async (e)=>{
        e.preventDefault();
        dispatch({ type: "LOGIN_START"})
        setFalsesenha(false)
        try{
            const res = await api.post("/auth/router/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            })
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data})
            window.location.replace("/");
        }catch(err){
            dispatch({ type: "LOGIN_FAILURE"})
            CheckSenhaAgain()
        }
    }

    const CheckSenhaAgain = ()=>{
        if(ale===false){
            setFalsesenha(true)
        }else{
            setFalsesenha(false)
        }
    }
    const chackUser = async (e)=>{
        checkValid = false;
        try{
            const result = await api.post("/auth/router/checkuser", {
                username: userRef.current.value,
            })
            if(!result.data){
                checkValid = true;
            }
            setAle(checkValid)
        }catch(err){
            checkValid = true;
            setAle(checkValid)
        }
    }

  return (
    <div className="fullContentLogin">
        <div className="logoAndText">
            <img src='./image/new1.png' alt="" className="imagemLogooi" />
            <p className="paragrafoLogo">
                Vem juntar-se à comunidade Unilabtem
                e terá acesso a produtos, e oportunidades
                 que são divulgados aqui.
            </p>
            <p className="paragrafoLogo1">Tudo mais perto e Tudo mais fácil!</p>
            <p className="paragrafoLogo1">UNILABTEM, Tem de Tudo!</p>
        </div>
        <div className="sectionLogin">
            <h1 className="LoginH1">Login</h1>
            <form className="formLogin" onSubmit={handleSubmit}>
                <input type="text" className="fastInput in" placeholder="Usuário..." ref={userRef} minLength="2" onBlur={chackUser} required />
                <input type="password" className="fastInput in" placeholder="Senha..." minLength='4' ref={passwordRef} required />
                <button className="buttonEntrarLogin fastInput" type='submit' disabled={isFetching}>Entrar</button>
                {ale && <i className='checkuserLogin'>Usuário sem conta. Crie uma conta!</i>}
                {falsesenha && <i className='checkuserLogin'>Senha inválida...</i>}
                <div className="criarNovaContaButton">
                    <small className="criarConta"><Link to='/registrar' id='colorLink'>Criar conta</Link></small>
                    <small className="criarConta"><Link to='/sendemail' id='colorLinkSenha'>Recuperar Senha</Link></small>
                </div>
            </form>
        </div>
    </div>
  )
}