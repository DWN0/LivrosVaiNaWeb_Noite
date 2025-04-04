import S from './inicio.module.scss'
import doacao01 from '../../assets/doacao01.png'
import doacao02 from '../../assets/doacao02.png'
import doacao03 from '../../assets/doacao03.png'
import doacao04 from '../../assets/doacao04.png'
export default function Inicio() {
  return (
      <main>
        <section className={S.primeiraSecaoInicio}>
          <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
        </section>
        <section className={S.porqueDoarSection}>
          <h2>Por que devo doar?</h2>
        </section>
        <section>
        <div className={S.containerCards}>
          <section>
            <img src={doacao01} alt="Ilustração de pessoas em círculo." />
            <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
          </section>
          <section>
          <img src={doacao02} alt="Ilustração de uma pessoa lendo um livro." />
          <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </section>
          <section>
          <img src={doacao03} alt="Ilustração de seis pessoas transformando vidas." />
          <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
          </section>
          <section><img src={doacao04} alt="Ilustração de uma balança representando igualdade." />
          <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
          </section>
          </div>
        </section>
      </main>
  )
}