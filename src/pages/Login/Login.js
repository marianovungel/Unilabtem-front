
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
        }catch(err){
            dispatch({ type: "LOGIN_FAILURE"})
            setFalsesenha(true)
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
    <div className="loginLogin">
        <div className='content'>
            <div className='logoLoginRes'>
                <img className='logoImgRes' src='./image/branca.png' alt=''/>
            </div>

            <div className='sectionRES'>
                <div className='form'>
                    <form className='loginForm' onSubmit={handleSubmit}>
                            <div className='valillaTilt'>
                                <h2 id='h2Margin'>LOGIN</h2>
                                <input className='inputLogin' type='text' placeholder=' User' ref={userRef} minLength="2" onBlur={chackUser} required />
                                <input className='inputLogin' type='password' placeholder=' Password' minLength='4' ref={passwordRef} required/>
                                <button className='inputLogin entrarbutton' type='submit' disabled={isFetching}>Sing In</button>
                                <div className='registrarAndFogat'>
                                    <Link to='/registrar'><i className='TermosCreate' id='nawCreate'>Criar conta</i></Link>
                                    <Link to='/sendemail' className='fogatPass'>
                                        <button className='fogatPass'>Esqueceu a senha?</button>
                                    </Link>
                                </div>
                                {ale && <i className='checkuser'>Usuário sem conta. Crie cuma conta!</i>}
                                {falsesenha && <i className='checkuser'>Senha inválida...</i>}
                            </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}