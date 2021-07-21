import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { userAction } from '../redux/actions';
import { useDispatch } from 'react-redux';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const renderLogin = () => {
        return (
            <div>
                <form>
                    <label>
                        Email
                        <input     
                        value={ email }
                        type="text"
                        onChange={ ({ target }) => setEmail( target.value ) }
                        placeholder="Digite seu email"
                        />
                    </label>
                    <label>
                        Senha
                        <input         
                        type="password"
                        value={ password }
                        onChange={ ({ target }) => setPassword( target.value ) }
                        placeholder="Digite sua senha"
                        />
                    </label>
                   
                </form>
                <div>
                    <Link to='/wallet'>
                        <button       
                            type="button"       
                            disabled={ !password || !email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) }
                            onClick={ () => dispatch(userAction(email)) }
                        >
                            Entrar
                        </button> 
                    </Link>                        
                </div>        
            </div>
        )        
    }

    return (
        <div>
            { renderLogin() }
        </div>
    );    
}

export default Login;