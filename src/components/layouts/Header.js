import React, { useCallback } from 'react';
import logo from "../images/logo.png";
import '../../style.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ScriptTag from 'react-script-tag';

const Header = props => {
    
    const handleClick = useCallback(props => {
        let pages = document.getElementsByClassName('pages')[0].childNodes;
        pages.forEach(element => {
            if (element !== null) {
                if (element.id !== null) {
                    element.id = "";
                }
            }
        });

        console.log(props.target)
        props.target.id = 'current-page'


        // let currentPage = '';
        // for (let letter of window.location.href.split('').reverse()) {
        //     if (letter === '/') {
        //         break
        //     }
        //     currentPage += letter
        //     console.log(letter)
        // }
    
        // currentPage = currentPage.split('').reverse().join('')
        //     if (currentPage === 'most-epul') {
        //         document.getElementsByClassName('most-epul')[0].id = "current-page";
        //         }

        // console.log(currentPage)

    }, [])

    return (
        <header className="flex">
                <div className="logo">
                    <Link to="/"><img src={logo} alt="logo"/></Link>
                </div>
                <div className="pages mr-2">
                    <HashLink to="/#house" onClick={handleClick}>Főoldal</HashLink>
                    <HashLink to="/#work" onClick={handleClick}>Kivitelezés</HashLink>
                    <HashLink to="/#prices" onClick={handleClick}>Árak</HashLink>
                    <HashLink to="/#planning" onClick={handleClick}>Tervezés</HashLink>
                    <HashLink to="/most-epul" onClick={handleClick}>Most épül</HashLink>
                    <Link to="/referenciak" onClick={handleClick}>Referenciák</Link>
                    <Link to="/elado" onClick={handleClick}>Eladó</Link>
                    <HashLink to="/#contact" onClick={handleClick}>Kapcsolat</HashLink>
                </div>
                <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ScriptTag type="text/javascript" src="../scripts.js" />
                
            </header>
            
    )
}

export default Header;