import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import api from '../../services/api'
import './VendaEditMonitor.css'

export default function VendaEditMonitor() {

  const [produtoVenda, setProdutoVenda] = useState([])

  const getProdutoVenda = async ()=>{
    try{
      const response = await api.get('/produto');
      const tamanho = response.data.length;
      for(let x = 0; x<tamanho; x++){
        if(response.data[x].updateToken != null){
          setProdutoVenda([...produtoVenda, response.data[x]])
        }
      }
    }catch(err){}
  }

  useEffect(() => {
    getProdutoVenda();
  }, )

  return (
    <div className='fullVendaPost'>
      <div className="cardVendaPost">
        <h6 className='titleVendaPost'>Titulo Venda Post</h6>
        <div className='verPost'>
          <i className='verText'>Ver o Post</i>
          <i className="fa-regular fa-eye eyesClass"></i>
        </div>
      </div>
    </div>
  )
}
