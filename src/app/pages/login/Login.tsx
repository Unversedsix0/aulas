import { useState } from "react"


export const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleClick = () =>{
        console.log(email);
        console.log(password);
    }

    return (
        <div>
            <form>
                <label>
                    <span>E-mail</span>
                    <input value={email} onChange={e =>setEmail(e.target.value)}/>
                </label>

                <label>
                    <span>Senha</span>
                    <input type='password' onChange={e =>setPassword(e.target.value)}/>
                </label>

                <button type='button' onClick={handleClick}> Entrar </button>


            </form>
        </div>
    )
}