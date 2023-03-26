import Copyright from '../Copyright/Copyright';
import FaleConosco from '../FaleConosco/FaleConosco';
import Versao from '../Versao/Versao';
import './Header.css';

function Header() {
    return (
        <header className='header'>

            <div className='apresentacao'>
                {/* //Melhorar a qualidade do arquivo de logomarca */}
                <div className='header__logo' />
                <FaleConosco />
            </div>
            <Versao versaoApp='0.0.1'/>
            <Copyright  ano={parseInt('2023')} 
                        empresa='GPTI' />
        </header>
    );
}

export default Header;