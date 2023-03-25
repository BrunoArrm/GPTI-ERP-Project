import RedeSocial from '../RedeSocial/RedeSocial';
import './FaleConosco.css';

function FaleConosco() {
    return (
        <div className='faleConosco'>

            <RedeSocial link='https://instagram.com/integrasist?igshid=YmMyMTA2M2Y='
                        rede='instagram' />
            <RedeSocial link='https://www.facebook.com/integra.engenharia.de.sistemas?mibextid=LQQJ4d'
                        rede='facebook' />
            <RedeSocial link='https://www.linkedin.com/company/integra-engenharia-de-sistemas/mycompany/'
                        rede='linkedin' />
            <RedeSocial link='https://api.whatsapp.com/send?phone=556232333136&text=Ol%C3%A1!%20Estou%20usando%20o%20sistema%20ERP%20GPTI%20Project.'
                        rede='whatsapp' />
            <RedeSocial link='https://www.integrasist.com.br/home/'
                        rede='website' />

        </div>
    );
}

export default FaleConosco;