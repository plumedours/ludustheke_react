import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login', {
                email: email,
                password: password
            });
            navigate("/dashboard");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <section className="flex-grow pb-5">
            <div className="flex flex-col items-center p-3 border shadow-lg mx-auto w-1/4 mt-5">
                <div className="p-3 w-full">
                    <h1 className="text-3xl font-semibold text-center text-neutral-700">
                        Connexion
                    </h1>
                    <form onSubmit={Auth} className="flex flex-col mt-6 gap-3">
                        <p className="text-center">{msg}</p>
                        <div className="flex flex-col mb-2 w-full justify-start gap-1">
                            <label className="text-sm text-neutral-700 font-semibold">Email ou pseudo</label>
                            <div className="controls">
                                <input type="text" className="bg-neutral-50 w-full p-2 rounded shadow-md" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className="flex flex-col mb-2 w-full justify-start gap-1">
                            <label className="text-sm text-neutral-700 font-semibold">Mot de passe</label>
                            <div className="controls">
                                <input type="password" className="bg-neutral-50 w-full p-2 rounded shadow-md" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="flex flex-col mb-2 w-full justify-start gap-1">
                            <button className="h-10 px-5 w-full text-neutral-100 font-semibold bg-primary-green rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-neutral-100 hover:text-primary-green">Connexion</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login