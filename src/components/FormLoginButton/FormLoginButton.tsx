import {Link} from 'react-router-dom';
import './FormLoginButton.css';

function FormLoginButton() {
  return (
    <Link className='formLoginButton' to="/selecionarWorkSpace">
        <button>
            Entrar
        </button>
    </Link>

  );
}

export default FormLoginButton;
