import FaleConosco from '../FaleConosco/FaleConosco';
import './Header.css';

function Header() {
    return (
        <header className='header'>

            <div className='apresentacao'>
                {/* //Melhorar a qualidade do arquivo de logomarca */}
                <div className='header__logo' />
                <FaleConosco />
            </div>
            
        </header>
    );
}

export default Header;
