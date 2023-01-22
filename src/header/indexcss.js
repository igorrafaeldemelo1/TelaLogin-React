import styled from 'styled-components';


export const HeaderCss = styled.nav`
    
    width: auto;
    display: flex;
    justify-content: space-between;
    padding: 20px 100px 20px 100px;
    .Logo{
        background-image: url("https://i.pinimg.com/originals/23/49/2d/23492d49eefc1794c50377c2613baa00.jpg");
        height: 50px;
        width: 100px;
        background-size: cover;
        background-position: center;
    }
    div{
        width: 50%;
    }
    ul{
        padding-top: 20px;
        position: absolute;
        right: 200PX;
        width: 20%;
        display:flex ;
        justify-content: space-between;
        li{
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            letter-spacing: 3px;
            color: #131313;
            font-weight: 500;   
            font-size: 18px;
        }
    }
    .hover-underline-animation {
        display: inline-block;
        position: relative;
        color: #131313;
    }
    .hover-underline-animation::after {
        content: '';
        position: absolute;
        top: 30px;
        width: 100%;
        height: 2px;
        transform: scaleX(0);
        bottom: 0;
        left: 0;
        background-color:  #131313;;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
         
    }
    .hover-underline-animation:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;   
    }
    .Link{
        color: black;
    }
`;

