import './FormLoginInput.css';

interface FormLoginInputProps {
    nome: string;
    tipo: string;
    texto: string;
}

function FormLoginInput({ nome, tipo, texto }: FormLoginInputProps) {
    return (
        <div className='formLoginInput'>
            <p>{nome}</p>
            <input type={tipo} placeholder={texto}/>
            <div className='formLoginInput__underline'/>
        </div>
    );
}

export default FormLoginInput;