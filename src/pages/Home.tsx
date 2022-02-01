import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import gogleIconImg from '../assets/images/google-icon.svg';

export function Home () {
  return (
    <div>
      <aside>
        <img src={illustrationImg} alt="Ilustração" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire dúvida da sua audiência em tempo real</p>
      </aside>
      <main>
        <img src={logoImg} alt="Letmeask" />
        <button>
          <img src={gogleIconImg} alt="Logo do Google" />
          Crie sua sala com o Google
        </button>
        <div>Ou entre em uma sala</div>
        <form action="">
          <input 
            type="text" 
            placeholder="Digite o código da sala" 
          />
          <button type="submit">
            Entrar na sala
          </button>
        </form>

      </main>
    </div>  
  )
}