import livroicone from '../../assets/livroicone.png'
import S from './queroDoar.module.scss'
import { useState } from 'react'
import axios from 'axios'

export default function QueroDoar() {

  const [titulo,setTitulo] = useState("")
  const [categoria,setCategoria] = useState("")
  const [autor,setAutor] = useState("")
  const [image_url,setImage_url] = useState("")

  const capturaTitulo = (e) =>{
    setTitulo(e.target.value)
  }

  const capturaCategoria = (e) =>{
    setCategoria(e.target.value)
  }

  const capturaAutor = (e) =>{
    setAutor(e.target.value)
  }

  const capturaImage = (e) =>{
    setImage_url(e.target.value)
  }

  const enviarDados = async() =>{
    console.log(titulo)
    console.log(categoria)
    console.log(autor)
    console.log(image_url)

    const dadosPEnviar = {
      titulo,
      categoria,
      autor,
      image_url
    }

    await axios.post("https://api-livros-vai-na-web-gzqn.onrender.com/doar",dadosPEnviar)

  }

  return (
    <section className={S.queroDoarSection}>
      <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
      <form onSubmit={(e)=> e.preventDefault()}>
        <div>
          <img src={livroicone}alt="Ícone ilustrando um livro" />
          <h2>Informações do Livro</h2>
        </div>
        <input type="text" placeholder='Título' onChange={capturaTitulo} required/>
        <input type="text" placeholder='Categoria' onChange={capturaCategoria} required/>
        <input type="text" placeholder='Autor' onChange={capturaAutor} required/>
        <input type="text" placeholder='Link da Imagem' onChange={capturaImage} required/>
        <input type="submit" value="Doar" className={S.buttonDoar} onClick={enviarDados}/>
      </form>
    </section>
  );
}