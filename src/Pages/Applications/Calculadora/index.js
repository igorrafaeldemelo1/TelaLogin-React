import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom' 

import Header from "../../../header";
import { CalculadoraCss } from "./indexcss";


export default function Calculadora() {
    return (<>
        <Header />
        <CalculadoraCss>
            <div className="Resut"></div>
            <div className="line-btn">
                <div className="bnt">+</div>
                <div className="bnt">-</div>
                <div className="bnt">/</div>
                <div className="bnt">*</div>
            </div>
            <div className="line-btn">
                <div className="bnt">+/-</div>
                <div className="bnt">0</div>
                <div className="bnt">.</div>
                <div className="bnt"></div>
            </div>
            
            <div className="line-btn">
                <div className="bnt">1</div>
                <div className="bnt">2</div>
                <div className="bnt">3</div>
                <div className="bnt">2v</div>
            </div>
            <div className="line-btn">
                <div className="bnt">4</div>
                <div className="bnt">5</div>
                <div className="bnt">6</div>
                <div className="bnt">/2</div>
            </div>
            <div className="line-btn">
                <div className="bnt">7</div>
                <div className="bnt">8</div>
                <div className="bnt">9</div>
                <div className="bnt equal">=</div>
            </div>
            
        </CalculadoraCss>
    </>);


}