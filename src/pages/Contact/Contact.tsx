import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ImgContact from '../../assets/img_contact.jpg';
import './Contact.css';

function Contact() {
  function enviarMensagem(formData: any) {
    console.log(formData.get('nome'));
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
            <input name="nome" placeholder='Nome' />
            <input name="email" />
            <input name="telefone" />
            <input name="cpf" />
            <input name="categoria" />
            <input name="mensagem" />
            <button type="submit">Enviar mensagem</button>
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