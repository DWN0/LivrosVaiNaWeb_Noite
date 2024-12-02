import s from './footer.module.scss'
import logoFacebook from '../../assets/logoFacebook.png'
import logoTwitter from '../../assets/logoTwitter.png'
import logoYoutube from '../../assets/logoYoutube.png'
import logoLinkedin from '../../assets/logoLinkedin.png'
import logoInstagram from '../../assets/logoInstagram.png'

export default function Footer() {
  return (
    <footer className={s.footer}>
      <section className={s.contatosFooter}>
        <p>0000-8888</p>
        <nav>
          <a href=""><img src={logoFacebook} alt="Logo da rede social Facebook" /></a>
          <a href=""><img src={logoTwitter} alt="Logo da rede social Twitter" /></a>
          <a href=""><img src={logoYoutube} alt="Logo da plataforma de vídeos Youtube" /></a>
          <a href=""><img src={logoLinkedin} alt="Logo da rede social Linkedin" /></a>
          <a href=""><img src={logoInstagram} alt="Logo da rede social Instagram" /></a>
        </nav>
      </section>
      <section className={s.copyright}>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
      </section>
    </footer>
  );
}
