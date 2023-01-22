import styled from 'styled-components';


export const ApplicationsCss = styled.main`
    width: 70%;
    margin: auto;
    margin-top: 50px;
    border-radius: 10px;
    background: #F0F0F0B1;
    height: 400px;
    padding: 50px;
    padding-left: 110px;
    padding-right: 110px;
    
    section{
        display: flex;
        justify-content: space-between;
        
        .card{
            background: #FFFFFF;
            height: 150px;
            width: 150px;
            
            border-radius: 20px;
            
        }
        .Calculadora{
            background-image: url(https://img.icons8.com/nolan/512/calculator.png);
            background-position: center;
            background-size: cover;
            margin: auto;
            margin-top: 25px;
            height: 100px;
            width: 100px;
        }
        .Bloco{
            background-image: url(https://img.icons8.com/nolan/512/windows-notepad.png);
            background-position: center;
            background-size: cover;
            margin: auto;
            margin-top: 25px;
            height: 100px;
            width: 100px;

        }
        .Moedas{
            background-image: url(https://img.icons8.com/nolan/512/expensive-2.png);
            background-position: center;
            background-size: cover;
            margin: auto;
            margin-top: 25px;
            height: 100px;
            width: 100px;

        }
        .Text{
            text-align: center;
            margin-top: 30px;
            font-family: 'Courier New', Courier, monospace;
            color: Black;
        }
        
    }

`;

