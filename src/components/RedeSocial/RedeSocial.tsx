import './RedeSocial.css';

interface RedeSocialProps {
    link: string;
    rede: string
}

function RedeSocial({ link, rede }: RedeSocialProps) {
    return (
        <a href={link} target='_blank'>
            <div className={`redeSocial rede-${rede}`} />
        </a>
    );
}

export default RedeSocial;

// Chamar esse componente e declarar:

// Link -> Endereço para a rede social
// rede -> Ícone da rede social

// Ícones das redes suportadas:

// instagram;
// facebook;
// linkedin;
// whatsapp;
// website;