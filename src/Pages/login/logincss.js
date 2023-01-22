import styled from 'styled-components';


export const Nav = styled.nav`
background: #1F93C1E2;
width: 85%;
margin: 50px;
height: 450px;
margin: auto;
border-radius: 20px;
display: flex;
justify-content: space-between;
text-align: center;
margin-top: 50px;


.Login{
    padding: 40px;
    padding-top: 100px;
    font-size: 30px;
    width: 40%;
    color: #313030;
    font-weight: 700;
    text-align: start;
    background: white;
   
    .Title-1{
    font-size: 10px;
    margin-top: 20px;
    margin-left: 10px;
    }
    .Title-2{
    font-size: 10px;
    margin-top: 20px;
    padding-left: 90px;
    color: black;
    }
    
}

.Dados{
    padding-top: 200px;
    color: white;
    width: 40%;
    margin: 20px;
    .Title-1{
        font-size: 40px;
    }
    .Title-2{
        font-size: 15px;
    }
   
} 

form{
    margin-top: 30px;
}

input{
    width: 100%;
    margin-top: 20px;
    padding: 10px;
    border-radius: 20px;
    background:#F6F6F6;
    border: solid 1px black;
    color: #929292;
    
}
.btnConfirm{
    background: rgb(0,137,246);
background: radial-gradient(circle, rgba(0,137,246,1) 64%, rgba(17,151,226,1) 100%);
    border: none;
    color: white;
    font-size: large;
    letter-spacing: 2px;
}
.check{
    width: 10px;
}
.link{
    text-align: center;
    padding-top: 40px;
    font-size: 15px;
    color: #606060;
    span{
        cursor: pointer;
        color: #0694D6;
    }
}


`;

