import React from "react";

import { ApplicationsCss } from "./indexcss";
import Header from "../../header";
import { Link } from "react-router-dom";


export default function Applications() {
    return (<>
        <Header />
        <ApplicationsCss>
            <section >
               
                    <div className="card">
                    <Link to="/Calculadora">
                        <div className="Calculadora">
                        </div>
                        </Link>
                        <div className="Text">Calculadora</div>

                    </div>
                
                <div className="card">
                    <div className="Bloco">
                    </div>
                    <div className="Text">Bloco de Notas  </div>
                </div>
                <div className="card">
                    <div className="Moedas">
                    </div>
                    <div className="Text">Conversos de Moedas  </div>
                </div>

            </section>
        </ApplicationsCss>
    </>);


}