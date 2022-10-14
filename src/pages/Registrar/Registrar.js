import React from 'react'
import './Registrar.css'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import api from '../../services/api.js'
import Swal from 'sweetalert2'

export default function Registrar() {

    const [username, setUsername] = useState("")
    const [whatsapp, setWhatsapp] = useState("")
    const [email, setEmail] = useState("")
    const [forca, setForca] = useState(0)
    const [password, setPassword] = useState("")
    const [classificacao, setClassificacao] = useState("")
    const [error, seterror] = useState(false)
    const [creden, setCreden] = useState(false)
    const [err, setErr] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState("")
    const [ale, setAle] = useState(false)
    const [aleEmail, setAleEmail] = useState(false)
    const [girar, setGirar] = useState(false)
    var checkValid = false;
    var checkValidEmail = false;

    useEffect(()=>{
        setAle(false)
        setAleEmail(false)
        setGirar(false)
    }, [])

    const fastConfirmTermo = async (e)=>{
        e.preventDefault();
        const { value: accept } = await Swal.fire({
          title: 'Termos e Políticas de Uso',
          input: 'checkbox',
          inputValue: 1,
          inputPlaceholder:
            'Selecione a caixa para criar usuário!',
          confirmButtonText:
            'Continue <i class="fa fa-arrow-right"></i>',
          inputValidator: (result) => {
            return !result && 'É necessário selecionar para proceguir!'
            
          }
        })
        
        if (accept) {
          // Swal.fire('You agreed with T&C :)')
          handleSubmit()
        }
      }

    const chackUser = async (e)=>{
        setCreden(false)
        checkValid = false;
        try{
            const result = await api.post("/auth/router/checkuser", {
                username: username,
            })
            if(result.data){
                checkValid = true;
            }
            setAle(checkValid)
        }catch(err){
            checkValid = true;
            setAle(checkValid)
        }
    }
    const chackEmail = async (e)=>{
        setCreden(false)
        checkValidEmail = false;
        try{
            const resultados = await api.post("/auth/router/usersearch", {
                to: email,
            })
            if(resultados.data){
                checkValidEmail = true;
            }
            setAleEmail(checkValidEmail)
        }catch(err){
            checkValidEmail = true;
            setAleEmail(checkValidEmail)
        }
    }

    function validarSenhaForca(){
        setCreden(false)
        var senha = password;
        setErr(false)
        setForca(0);
        
        if((senha.length >= 6)){
            setForca(forca+60);
        }
        if((senha.length >= 8)){
            setForca(79);
        }
        mostrarForca(forca);
    }
    function mostrarForca(forca){
        if(forca < 30 ){
            setClassificacao("Fraca")
        }else if((forca >= 30) && (forca < 50)){
            setClassificacao("Média")
        }else if((forca >= 50) && (forca < 70)){
            setClassificacao("Forte")
        }else if((forca >= 70) && (forca < 100)){
            setClassificacao("Excelente")
        }
    }

    const handleSubmit = async ()=>{
        setCreden(false)
        setGirar(true)
        if(classificacao==="Forte" || classificacao==="Excelente"){
            if(confirmPassword===password){
                if(ale === false || aleEmail === false){
                    try{
                        await api.post("/auth/router/register", {
                            username: username,
                            email: email,
                            whatsapp: whatsapp,
                            password: password,
                            profilePic: "74d5d28e4db58837d16d30eb57d8e8e6"
                        })
                        
                          Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Usuário criado com sucesso!',
                            showConfirmButton: false,
                            timer: 5000,
                            timerProgressBar: true,
                          })
                          setGirar(false)
                          window.location.replace("/login");
                    }catch(err){
                        setCreden(true)
                    }
                }else{
                    setCreden(true)
                }
            }else{
                seterror(true)
            }
        }else{
            setErr(true)
        }
    }  
  return (
    <div className="loginRegistrar">
        <div className='content'>
            <div className='logoLoginRes'>
            </div>

            <div className='sectionREgistrar'>
                
                <div className='formregistrar'>

                    <form className='loginFormregister animation' onSubmit={fastConfirmTermo}>
                    
                        <div className='valillaTilt'>
                            
                            <h2 className='h2CriarConta'>Criar conta</h2>
                            <input className='inputLogin' type='text' placeholder='  User' onChange={e=>setUsername(e.target.value)} onBlur={chackUser} />
                            <input className='inputLogin' type='email' placeholder='  your email' onChange={e=>setEmail(e.target.value)} onBlur={chackEmail} />
                            <input className='inputLogin' type='Number' placeholder='  Celular' minLength='9' onChange={e=>setWhatsapp(e.target.value)} />
                            <input className='inputLogin' onKeyUp={validarSenhaForca} type='password' placeholder='  Password' minLength='4' onChange={e=>setPassword(e.target.value)} />
                            <input className='inputLogin' type='password' placeholder='  Confirme a Senha...' onChange={e=>setConfirmPassword(e.target.value)} />
                            {girar ? (
                                <button className='inputLogin entrarbutton'><i class="fa-solid fa-spinner girar"></i></button>
                            ):(
                                <button className='inputLogin entrarbutton' type='submit'>Registrar</button>
                            )}
                            <h5 className='h6loginregistrar'><Link to='/' className='h6loginregistrar'>Login</Link></h5>
                            
                        </div>
                    </form>
                    
                    {error && <h3 className='errRegister'>Confirme Corretamente a sua Senha!</h3>}
                    {err && <h3 className='errRegister'>Só é possível registrar com senha Forte ou Excelente</h3>}
                    {classificacao==="Fraca" && <h3 className='errRegister'>Senha: {classificacao}</h3>}
                    {classificacao==="Média" && <h3 className='errRegister2'>Senha: {classificacao}</h3>}
                    {classificacao==="Forte" && <h3 className='errRegister3'>Senha: {classificacao}</h3>}
                    {classificacao==="Excelente" && <h3 className='errRegister4'>Senha: {classificacao}</h3>}
                    {ale && <h3 className='errRegister'>Já existe usuário registrado com este nome!</h3>}
                    {aleEmail && <h3 className='errRegister'>Já existe usuário registrado com este email!</h3>}
                    {creden && <h3 className='errRegister'>Credências inválidas!</h3>}
                    <div className='criar'>
                        <div className='Termoss'><Link to='termos-politicas'>Termos e Políticas de Uso</Link></div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}