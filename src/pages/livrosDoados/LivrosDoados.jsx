import livroOprotagonista from '../../assets/livroOprotagonista.png'
import S from './livrosDoados.module.scss'
import { useState,useEffect } from 'react';
import axios from 'axios';

export default function LivrosDoados() {

  const [livros,setLivros] = useState([])

  const puxarLivros = async() =>{
    const resposta = await axios.get("https://api-livros-vai-na-web-gzqn.onrender.com/doar")
    setLivros(resposta.data)
  }
  useEffect(()=>{
    getLivros()
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