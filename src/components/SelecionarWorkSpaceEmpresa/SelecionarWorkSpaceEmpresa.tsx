import { Link } from 'react-router-dom';
import './SelecionarWorkSpaceEmpresa.css';

interface SelecionarWorkSpaceEmpresaProps {
    nomeEmpresa: String,
    cnpjEmpresa: String,
    municipio: string
}

function SelecionarWorkSpaceEmpresa({ nomeEmpresa, cnpjEmpresa, municipio }: SelecionarWorkSpaceEmpresaProps) {

  const nextPage = () => {
    console.log("Clicou para ir a home");
  }

  return (

    <Link to='/home'>
      <div className='selecionarWorkSpaceEmpresa' onClick={nextPage}>

        <div className='workSpaces__dado selecionarWorkSpaceEmpresa__nome'>
          <p>{nomeEmpresa}</p>
        </div>

        <div className='workSpaces__dado selecionarWorkSpaceEmpresa__cnpj'>
          <p>{cnpjEmpresa}</p>
        </div>

        <div className='workSpaces__dado selecionarWorkSpaceEmpresa__municipio'>
          <p>{municipio}</p>
        </div>

      </div>
    </Link>

  );
}

export default SelecionarWorkSpaceEmpresa;