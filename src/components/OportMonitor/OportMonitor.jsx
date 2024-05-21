import React, { useState } from 'react'
import './OportMonitor.css'

import { imageDb } from '../../services/firebase';
import { v4 } from 'uuid';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import Swal from 'sweetalert2';
import api from '../../services/api';

const handleClick = async (URL)=>{
    try {
       const imgRef = ref(imageDb, `files/${v4()}`)
       uploadBytes(imgRef, URL)
       const snapshot = await uploadBytes(imgRef, URL)
       const downloadURL = await getDownloadURL(snapshot.ref);
       return (downloadURL)
    } catch (error) {
        console.log(error)
    }
}
//upload img
async function postImage({image, description}) {
    const formData = new FormData();
    formData.append("image", image)
    formData.append("description", description)

    const result = await handleClick(image)
    console.log(result)
  return result;
}

export default function OportMonitor() {
const [data, setData] = useState("")
const [desc, setDesc] = useState("")
const [facebook, setFacebook] = useState(null)
const [hora, setHora] = useState("")
const [insta, setInsta] = useState(null)
const [link, setLink] = useState("")
const [local, setLocal] = useState("")
const [pdf, setPdf] = useState(null)
const [photo, setPhoto] = useState("")
const [title, setTitle] = useState("")
const [x, setX] = useState(null)
const [youtube, setYoutube] = useState(null)

const HandleCadastrar = async (e)=>{
  e.preventDefault()

  try {
    const newPost = {
      data,
      desc,
      facebook, 
      hora,
      insta,
      link,
      local, 
      pdf,  
      title,
      x,
      youtube,
    }

    if(photo){
      try{
        const description = Date.now() + photo.name;
        const result = await postImage({image: photo, description})
        console.log(result)
        newPost.photo = result

        const newData = await api.post("/oportunidade", newPost)
        console.log(newData)

        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Cadastrado com sucesso!'
        })
        window.location.replace("/monitor");

      }catch(err){}
    }


  } catch (error) {
    alert(error.message)
  }
}

  return (
    <div className='widthCadastrar'>
        <form className='formContent' onSubmit={HandleCadastrar}>
          <h2>Cadastrar Oportunidades</h2>
            <span>Os campos que tem <i className='IClassColor'>*</i> são Obrigatórios</span>
            <input type="file" accept="image/*" className="fullinputOportomoni" onChange={(e)=> setPhoto(e.target.files[0])}  />
            {/* <input type="file" className='fullinputOportomoni' placeholder='* Uma Imagem' onChange={(e)=> setPhoto(e.target.value)} /> */}
            <input type="text" className='fullinputOportomoni' placeholder='* Título' onChange={(e)=> setTitle(e.target.value)} />
            <input type="text" className='fullinputOportomoni' placeholder='* Descrição' onChange={(e)=> setDesc(e.target.value)} />
            <input type="text" className='fullinputOportomoni' placeholder='* Data (10 de Maio de 2024)' onChange={(e)=> setData(e.target.value)} />
            <input type="text" className='fullinputOportomoni' placeholder='Local' onChange={(e)=> setLocal(e.target.value)} />
            <input type="text" className='fullinputOportomoni' placeholder='Hora (10:15)' onChange={(e)=> setHora(e.target.value)} />
            <input type="text" className='fullinputOportomoni' placeholder='Link' onChange={(e)=> setLink(e.target.value)} />
            <input type="text" className='fullinputOportomoni' placeholder='Link PDF' onChange={(e)=> setPdf(e.target.value)} />
            <input type="text" className='fullinputOportomoni' placeholder='Link Facebook' onChange={(e)=> setFacebook(e.target.value)} />
            <input type="text" className='fullinputOportomoni' placeholder='Link Instagram' onChange={(e)=> setInsta(e.target.value)} />
            <input type="text" className='fullinputOportomoni' placeholder='Link X' onChange={(e)=> setX(e.target.value)} />
            <input type="text" className='fullinputOportomoni' placeholder='Link Youtube' onChange={(e)=> setYoutube(e.target.value)} />
            <button className='ButtonCadastrarOport' type='submit'>Cadastrar...</button>
            
        </form>
    </div>
  )
}
