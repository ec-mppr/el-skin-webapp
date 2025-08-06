import styled from 'styled-components';
import ImgContact from '../../assets/img_contact.jpg';
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
      <ContainerContact>
        <ContainerForm>
          <Column>
            <Title>Fale conosco</Title>
            <FormContact action={enviarMensagem} >
              <TextInput name="nome" placeholder='Seu nome' />
              <TextInput name="email" placeholder='Seu e-mail para contato' />
              <TextInput name="telefone" placeholder='Seu telefone com DDD' />
              <TextInput name="cpf" placeholder='Seu CPF' />
              <p>Categoria:</p>
              <CheckboxContainer>
                {listaCategoria.map((item) => (
                  <SingleCheckboxContainer key={item.key}>
                    <Checkbox type='checkbox' value={item.key} name={item.key}></Checkbox>
                    <label htmlFor={item.key}>{item.title}</label>
                  </SingleCheckboxContainer>
                ))}
              </CheckboxContainer>
              <TextArea as="textarea" name="mensagem" rows={5} placeholder="Sua mensagem" />
              <ButtonEnviarMensagem type="submit">
                <p>Enviar mensagem</p>
                <IconEnviarMensagem icon={faArrowRight} />
              </ButtonEnviarMensagem>
            </FormContact>
          </Column>
          <Column>
            <img src={ImgContact}></img>
          </Column>
        </ContainerForm>
        <ContainerFAQ>
          <Title>Ajuda - FAQ</Title>
          <div>
            <p>QUEM SOMOS
              <br>
              </br>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
          <div>
            <p>POR QUE EXISTIMOS?
              <br>
              </br>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.  </p>
          </div>
          <div>
            <p>O QUE A GENTE FAZ?
              <br>
              </br>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.. </p>
          </div>
        </ContainerFAQ>
      </ContainerContact>
    </>
  );
}

const ContainerContact = styled.div`
  margin-left: 144px;
  margin-right: 144px;
`;

const ContainerForm = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;
  justify-content: center;
`;

const ContainerFAQ = styled.div`
  margin-left: 144px;
  margin-right: 144px;
  padding: 2rem;
`;

const Column = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 20px;
`;

const FormContact = styled.form`
  display: flex;
  flex-direction: column;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SingleCheckboxContainer = styled.div`
  padding-right: 2rem;
  padding-bottom: 1rem;
  display: flex;   
`;

const ButtonEnviarMensagem = styled.button`
  background-color: #94426E;
  color: white;
  border: none;
  border-radius: 8px;
  text-align: center;
  display: flex;
  padding: 15px 61px;
  cursor: pointer;
  width: 100%;
  justify-content: center;
  margin: auto;


  &:hover {
      cursor: pointer;
      opacity: 70%;
      transition: opacity 0.5s ease;
  }
`;

const IconEnviarMensagem = styled(FontAwesomeIcon)`
  padding: 1rem 0 1rem 0.5rem;
`;

const TextInput = styled.input`
  width: 100%;
  padding: 0.75rem 0rem 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;
  background-color: #F5F5F5;
  font-family: 'Poppins';
  border: none;
  margin-bottom: 1rem;
`;

const TextArea = styled(TextInput)`

`;

const Checkbox = styled.input`
  accent-color: #94426E;
  margin-right: 5px;
`;


export default Contact;