import SelecionarWorkSpaceEmpresa from '../../components/SelecionarWorkSpaceEmpresa/SelecionarWorkSpaceEmpresa';
import './SelecionarWorkSpace.css';

function SelecionarWorkSpace() {
  return (

    <div className='selecionarWorkSpace'>
      <div className='selecionarWorkSpace__workSpaces'>
        <div className='workSpaces__cabecalho'>
          <div className='workSpaces__titulo workSpaces__nome'>
            <p>EMPRESA</p>
          </div>
          <div className='workSpaces__titulo workSpaces__cnpj'>
            <p>CNPJ</p>
          </div>
          <div className='workSpaces__titulo workSpaces__municipio'>
            <p>MUNICÍPIO</p>
          </div>
        </div>
        <div className='workSpaces__empresas'>
          <SelecionarWorkSpaceEmpresa nomeEmpresa='Integra Automação e Controle LTDA'
            cnpjEmpresa='07.121.081/0001-27'
            municipio='Goiânia' />
          <SelecionarWorkSpaceEmpresa nomeEmpresa='Empresa TESTE 1'
            cnpjEmpresa='07.121.081/0001-28'
            municipio='Aparecida de Goiânia' />
          <SelecionarWorkSpaceEmpresa nomeEmpresa='Empresa TESTE 2'
            cnpjEmpresa='07.121.081/0001-29'
            municipio='Anápolis' />
        </div>
      </div>
    </div>

  );
}

export default SelecionarWorkSpace;
