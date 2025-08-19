'use client';
import styles from './Contact.module.css';
import ImgContact from '../../assets/img_contact.jpg';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from 'components/Layout';

interface ItemCategoria {
  title: string
  key: string
}

export default function Contact() {

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
    <Layout>
      <div className={styles.contactContainer}>
        <div className={styles.contactFormContainer}>
          <div className={styles.column}>
            <h2 className={styles.title}>Fale conosco</h2>
            <form className={styles.formContact} action={enviarMensagem} >
              <input className={styles.textInput} name="nome" placeholder='Seu nome' />
              <input className={styles.textInput} name="email" placeholder='Seu e-mail para contato' />
              <input className={styles.textInput} name="telefone" placeholder='Seu telefone com DDD' />
              <input className={styles.textInput} name="cpf" placeholder='Seu CPF' />
              <p>Categoria:</p>
              <div className={styles.checkboxContainer}>
                {listaCategoria.map((item) => (
                  <div className={styles.singleCheckboxContainer} key={item.key}>
                    <input className={styles.checkbox} type='checkbox' value={item.key} name={item.key}></input>
                    <label htmlFor={item.key}>{item.title}</label>
                  </div>
                ))}
              </div>
              <textarea className={styles.textInput} name="mensagem" rows={5} placeholder="Sua mensagem" />
              <button className={styles.buttonEnviarMensagem} type="submit">
                <p>Enviar mensagem</p>
                <span className={styles.iconEnviarMensagem}><FontAwesomeIcon icon={faArrowRight} /></span>
              </button>
            </form>
          </div>
          <div className={styles.column}>
            <img src={ImgContact.src}></img>
          </div>
        </div>
        <div className={styles.containerFAQ}>
          <h2 className={styles.title}>Ajuda - FAQ</h2>
          <div>
            <p>QUEM SOMOS
              <br />
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
          <div>
            <p>POR QUE EXISTIMOS?
              <br />
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.  </p>
          </div>
          <div>
            <p>O QUE A GENTE FAZ?
              <br />
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.. </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}