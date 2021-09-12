import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { userAction } from '../redux/actions';
import { useDispatch } from 'react-redux';

import '../styles/Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const renderLogin = () => {
        return (
            <div className="box-login">
                <form>
                    <label>
                        <h2>Email</h2>
                        <input
                            value={email}
                            type="text"
                            onChange={({ target }) => setEmail(target.value)}
                            placeholder="Digite seu email"
                        />
                    </label>
                    <label>
                        <h2>Senha</h2>
                        <input
                            type="password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                            placeholder="Digite sua senha"
                        />
                    </label>
                </form>
                <div className="box-button-login">
                    <Link to='/wallet'>
                        <button
                            type="button"
                            disabled={!password || !email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)}
                            onClick={() => dispatch(userAction(email))}
                        >
                        <h2>Entrar</h2>
                        </button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="container-login">
            {renderLogin()}
        </div>
    );
}

export default Login;