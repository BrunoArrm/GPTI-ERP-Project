import './Versao.css';

interface VersaoProps {
    versaoApp: string;
}

function Versao({ versaoApp }: VersaoProps) {
  return (
    <div className='versao'>
      <p>Versão: {versaoApp}</p>
    </div>
  );
}

export default Versao;
