import livroOprotagonista from '../../assets/livroOprotagonista.png'
import S from './livrosDoados.module.scss'
import axios from 'axios'
import { useState,useEffect } from 'react'

export default function LivrosDoados(){

  const [livros,setLivros] = useState([])

  const puxarLivros = async() =>{
    const resposta = await axios.get("https://api-livros-vai-na-web-gzqn.onrender.com/livros")
    setLivros(resposta.data)
  }
  useEffect(()=>{
    puxarLivros()
  },[])

  return(
    <section className={S.LivrosDoadosSection}>
      <h2>Livros Doados</h2>
      <section className={S.containerCards}>
        {
          livros.map((item)=>(
            <section>
              <img src={item.image_url} alt={`Titulo do livro ${item.titulo}`} />
              <h3>{item.titulo}</h3>
              <p>{item.autor}</p>
              <p>{item.categoria}</p>
            </section>
          ))
        }
      </section>
    </section>
  )
}