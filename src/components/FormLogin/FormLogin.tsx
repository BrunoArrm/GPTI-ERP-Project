import EsqueciMinhaSenha from '../EsqueciMinhaSenha/EsqueciMinhaSenha';
import FormLoginButton from '../FormLoginButton/FormLoginButton';
import FormLoginInput from '../FormLoginInput/FormLoginInput';
import './FormLogin.css';

interface FormLoginProps {
    empresa: string;
}

function FormLogin({ empresa }: FormLoginProps) {
  return (
    <form className='formLogin'>
      <h2>Bem vindo ao {empresa}</h2>
      <div className='formLogin__inputsContainer'>
        <FormLoginInput nome='Usuário ou Email' tipo='email' texto='Digite seu email'/>
        <FormLoginInput nome='Senha' tipo='password' texto='Digite sua senha'/>
      </div>
      <FormLoginButton />
      <EsqueciMinhaSenha />
    </form>
  );
}

export default FormLogin;
