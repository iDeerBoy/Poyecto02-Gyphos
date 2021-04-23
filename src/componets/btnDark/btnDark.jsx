import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import './btnDark.css'

function BtnDark({stateDark, switchDark }){

    function setStateDark(){
        switchDark(!stateDark)
    }
    return (<>
        <button 
            id="desktopBtn" 
            className={stateDark ? "desktop-dark" : "desktop-light"}
            onClick={setStateDark}
        >
                {stateDark ? "MODO LIGHT" : "MODO DARK"}
        </button>
        <div 
            id="mobileBtn"
            className={stateDark ? "mode-dark" : "mode-light"} 
            onClick={setStateDark}
        >
                <div 
                    id="icon" className={stateDark ? "icon-dark" : "icon-light"}
                >
                        {stateDark ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
                </div>
        </div>
    </>)
}

export default BtnDark;