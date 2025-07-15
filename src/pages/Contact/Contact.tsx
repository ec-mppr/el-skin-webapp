import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ImgContact from '../../assets/img_contact.jpg';
import './Contact.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ItemCategoria {
  title: string
  key: string
}

function Contact() {

  const listaCategoria: ItemCategoria[] = [{
    title: 'Dúvidas',
    key: 'duvidas'
  }, {
    title: 'Problema com pedido',
    key: 'problemaPedido'
  }, {
    title: 'Reclamação',
    key: 'reclamacao'
  }, {
    title: 'Sugestão',
    key: 'sugestao'
  }, {
    title: 'Elogios',
    key: 'elogios'
  }, {
    title: 'Outro',
    key: 'outro'
  }];

  function enviarMensagem(formData: FormData) {
    const nome = formData.get('nome');
    const email = formData.get('email');
    const telefone = formData.get('telefone');
    const cpf = formData.get('cpf');
    const mensagem = formData.get('mensagem');

    console.log(nome, email, telefone, cpf, mensagem);
  }

  return (
    <>
      <Header />
      <div className='container-contact'>
        <div className='column-1'>
          <h2 className='title-contact'>
            Fale conosco
          </h2>
          <form action={enviarMensagem} className='form-contact'>
            <input className='text-input' name="nome" placeholder='Seu nome' />
            <input className='text-input' name="email" placeholder='Seu e-mail para contato' />
            <input className='text-input' name="telefone" placeholder='Seu telefone com DDD' />
            <input className='text-input' name="cpf" placeholder='Seu CPF' />
            <p>Categoria:</p>
            <div className='checkbox-container'>
              {listaCategoria.map((item) => (
                <div key={item.key} className='single-checkbox-container'>
                  <input type='checkbox' className='checkbox' value={item.key} name={item.key} />
                  <label htmlFor={item.key}>{item.title}</label>
                </div>
              ))}
            </div>
            <textarea className='text-input' name="mensagem" rows={5} placeholder="Sua mensagem" />
            <button type="submit" className='button-enviar-mensagem'>
              <p>Enviar mensagem</p>
              <FontAwesomeIcon className='icon-enviar-mensagem' icon={faArrowRight} />
            </button>
          </form>
        </div>
        <div className='column-2'>
          <img src={ImgContact}></img>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;