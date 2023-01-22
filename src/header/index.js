import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from "react";
import { HeaderCss } from "./indexcss";
import GlobalStyle from '../../src/Pages/GlobalStyle/styles'
import Login from '../Pages/login/Login';
import Applications from '../Pages/Applications';


export default function Header() {
    return (<>
        
        <HeaderCss>
            <div className="Logo"></div>
            <div>
                <ul>
                    <li className="hover-underline-animation"><Link to="/">Home</Link></li>
                    <li className="hover-underline-animation"><Link to="/Applications">Applications</Link></li>
                    <li className="hover-underline-animation"><Link to="/Login">Login</Link></li>
                    
                </ul>
            </div>

        </HeaderCss>
        <GlobalStyle/>
        </>);
}

