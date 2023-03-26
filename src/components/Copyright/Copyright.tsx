import './Copyright.css';

interface CopyrightProps {
    empresa: string;
    ano: number;
}

function Copyright({ empresa, ano }: CopyrightProps) {
    return (

        <div className='copyright'>
            <div className='copyright__container'>
                <p className='container__ano'>© {ano} |</p>
                <p className='container__empresa'>{empresa}</p>
            </div>

            <p className='copyright__direitos'>Todos os direitos reservados.</p>
        
        </div>

    );
}

export default Copyright;

// Ao chamar este componente deve-se declarar:

// Ano
// Empresa