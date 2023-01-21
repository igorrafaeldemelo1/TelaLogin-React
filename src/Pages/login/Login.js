import React from "react";
import { Nav } from "./logincss";



export default function Login() {
    return (
        <Nav>
            <div className="Dados">
                <div className="Title-1">Welcome back</div>
                <div className="Title-2">You can sign in to access with your existing account.</div>

            </div>
            <div className="Login" >Sing in
                <form action="" method="get">
                    <input type="email" name="email_usuario" placeholder="E-mail" /><br />
                    <input type="password" name="nome" placeholder="Password" /><br />
                    <div className="flex"><input className="check" type="checkbox" name="check" /><div className="Title-1">Remember me</div><div className="Title-2">Forgot password ?</div></div>
                    <input className="btnConfirm" type="submit"  value="SIGN IN" />
                </form>
                <div className="link">New here? <span>Create an Account</span></div>
            </div>
            <div></div>
            



        </Nav>);


}