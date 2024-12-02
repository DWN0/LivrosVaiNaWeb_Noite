import livroOprotagonista from '../../assets/livroOprotagonista.png'
import s from './livrosDoados.module.scss'
export default function LivrosDoados() {
  return (
    <section className={s.LivrosDoadosSection}>
      <h2>Livros Doados</h2>
      <section className={s.containerCards}>
        <section>
            <img src={livroOprotagonista} alt="Imagem do livro O Protagonista, o mesmo possui capa vermelha e o título escrito em caixa alta na cor branca."/>
        <div>
            <h3>O protagonista</h3>
            <p>Susanne Andrade</p>
            <p>Ficção</p>
        </div>
        </section>
      </section>
    </section>
  );
}
