import './header.css'
import gifoLogo from '../../img/GIFOS.svg';
import gifoLogoDark from '../../img/Logo-modo-noc 1.svg'
import BtnDark from '../btnDark/btnDark';

function Header({stateDark, switchDark}){
    return (
    <header id="header">
        <img src={stateDark ? gifoLogoDark : gifoLogo} alt="Logo Gifos"/>
        <BtnDark 
            stateDark={stateDark}
            switchDark={switchDark}/>
    </header>)
}

export default Header;