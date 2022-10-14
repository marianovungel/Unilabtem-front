import './UserPerfil.css'
import {useContext} from 'react'
import {Context} from '../../Context/Context'
const URLImg = "https://festupload.s3.amazonaws.com/";

export default function UserPerfil() {

    const { user } = useContext(Context)

  return (
    <section className='fullContenUser'>
            <h4 className="userInfo">Meus dados de Usuário...</h4>
            <div className="dados">
                <div className=" use imgUser">
                    <i className="Iselect photoUser">Foto de Perfil</i>
                    <img 
                        src={URLImg +user.profilePic} 
                        alt="" className="photoUserI" 
                    />
                </div>
                <div className="expretionData">
                    <div className=" use userNameUser">
                        <i className="Iselect userNameOfUser">Nome de Usuário</i>
                        <b className="Bselect userNameB">{user.username}</b>
                    </div>
                    <div className=" use zapUser">
                        <i className="Iselect zapUserI">Whatsapp...</i>
                        <b className="Bselect zapUserB">{user.whatsapp}</b>
                    </div>
                    <div className=" use e-mailUser">
                        <i className="Iselect EmailUserI">E-mail...</i>
                        <b className="Bselect EmailUserB">{user.email}</b>
                    </div>
                    <div className="use datacriacao">
                        <i className="Iselect dataUserI">Dsta de Criação da conta</i>
                        <b className="Bselect dataB">{new  Date(user.createdAt).toDateString()}</b>
                    </div>
                </div>
            </div>
        </section>
  )
}
