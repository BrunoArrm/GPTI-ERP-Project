import './SelecionarWorkSpaceEmpresa.css';

interface SelecionarWorkSpaceEmpresaProps {
    nomeEmpresa: String,
    cnpjEmpresa: String,
    municipio: string
}

function SelecionarWorkSpaceEmpresa({ nomeEmpresa, cnpjEmpresa, municipio }: SelecionarWorkSpaceEmpresaProps) {
  return (

    <div className='selecionarWorkSpaceEmpresa'>

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

  );
}

export default SelecionarWorkSpaceEmpresa;
