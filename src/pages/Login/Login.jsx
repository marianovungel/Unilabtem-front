
import './Login.css'
import {Link} from 'react-router-dom'
import {useRef, useContext, useState, useEffect} from 'react'
import {Context} from '../../Context/Context'
import api from '../../services/api'
import segundoLogin from '../../services/segundoLogin'

export default function Login() {

    const userRef = useRef();
    const passwordRef = useRef();
    const {isFetching, dispatch } = useContext(Context)
    const [ale, setAle] = useState(false)
    const [falsesenha, setFalsesenha] = useState(false)
    const [system, setSystem] = useState("loginSystem")
    const [sig, setSig] = useState("loginNull")
    const [call, setCall] = useState(true)
    var checkValid = false;

    useEffect(()=>{
        setAle(false)
        setSystem("loginSystem")
        setSig("loginNull")
        setCall(true)
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

    const henleSig = async(e)=>{
        e.preventDefault();
        dispatch({ type: "LOGIN_START"})
        setFalsesenha(false)
        try{
            const body = await segundoLogin.post("/authenticate", {
                login: userRef.current.value,
                senha: passwordRef.current.value,
            })
            const res = await api.post("/usersig/login/", {
                sigToken: body.data.access_token
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

    const setCallSystem = ()=>{
        setSystem("loginSystem")
        setSig("loginNull")
        setCall(true)
    }
    const setCallSig = ()=>{
        setSystem("loginNullSys")
        setSig("loginSig")
        setCall(false)

        console.log(call)
    }

  return (
    <div className="fullContentLogin">
        <div className="logoAndTextLogin">
            <img src='./image/newLogo.png' alt="" className="imagemLogooiiLogin" />
            <div className="paragrafoLogoLoginNew">
                Vem juntar-se à comunidade Unilabtem
                e terá acesso a produtos e oportunidades
                 que são divulgados aqui. Tudo mais perto e Tudo mais fácil!
            </div>
            <div className="paragrafoLogoLogin1New">UnilabTem, Tem de Tudo!</div>
        </div>
        <div className="sectionLoginForm">
            <h1 className="LoginH1Login">Login</h1>
            {call ? (<form className="formLoginLogin" onSubmit={handleSubmit}>
                <div className="menuSettLogin">
                    <div className={system} onClick={setCallSystem}><span className="itemSpan">Usuário Externo</span></div>
                    <div className={sig} onClick={setCallSig}><span className="itemSpan">Sigaa Unilab</span></div>
                </div>
                <input type="text" className="fastInputLogin inLogin" placeholder="Usuário..." ref={userRef} minLength="2" onBlur={chackUser} required />
                <input type="password" className="fastInputLogin inLogin" placeholder="Senha..." minLength='4' ref={passwordRef} required />
                <button className="buttonEntr fastInputLogin" type='submit' disabled={isFetching}>Entrar</button>
                {ale && <i className='checkuserRegisterAlertLogin'>Usuário sem conta. Crie uma conta!</i>}
                {falsesenha && <i className='checkuserRegisterAlertLogin'>Senha inválida...</i>}
                <div className="criarNovaContaButtonLoginNew">
                    <small className="criarContaLoginNew"><Link to='/registrar' id='colorLinkLoginNew'>Criar conta</Link></small>
                    <small className="criarContaLoginNew"><Link to='/sendemail' id='colorLinkServerLoginNew'>Recuperar Senha</Link></small>
                </div>
            </form>)
            : (
                <form className="formLoginLogin" onSubmit={henleSig}>
                <div className="menuSettLogin">
                    <div className={system} onClick={setCallSystem}><span className="itemSpan">Sistema</span></div>
                    <div className={sig} onClick={setCallSig}><span className="itemSpan">Sig</span></div>
                </div>
                <input type="text" className="fastInputLogin inLogin" placeholder="Usuário..." ref={userRef} minLength="2" onBlur={chackUser} required />
                <input type="password" className="fastInputLogin inLogin" placeholder="Senha..." minLength='4' ref={passwordRef} required />
                <button className="buttonEntr fastInputLogin" type='submit' disabled={isFetching}>Entrar</button>
                {ale && <i className='checkuserRegisterAlertLogin'>Usuário sem conta. Crie uma conta!</i>}
                {falsesenha && <i className='checkuserRegisterAlertLogin'>Senha inválida...</i>}
                <div className="criarNovaContaButtonLoginNew">
                    <small className="criarContaLoginNew"><Link to='/registrar' id='colorLinkLoginNew'>Criar conta</Link></small>
                    <small className="criarContaLoginNew"><Link to='/sendemail' id='colorLinkServerLoginNew'>Recuperar Senha</Link></small>
                </div>
            </form>
            )}
        </div>
    </div>
  )
}