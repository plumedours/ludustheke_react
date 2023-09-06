import { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [pseudo, setPseudo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Register = async (e) => {
        e.preventDefault();
        try {
            if (password !== confPassword) {
                setMsg("Les mots de passe ne correspondent pas.");
                return;
            }

            const response = await axios.post('http://localhost:5000/register', {
                pseudo: pseudo,
                email: email,
                password: password,
                confPassword: confPassword // Include the confirmation password
            });

            if (response.status === 201) {
                navigate("/");
            }
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
                        Inscription
                    </h1>
                    <form onSubmit={Register} className="flex flex-col mt-6 gap-3">
                        <p className="text-center">{msg}</p>
                        <div className="flex flex-col mb-2 w-full justify-start gap-1">
                            <label className="text-sm text-neutral-700 font-semibold">Pseudo</label>
                            <div className="controls">
                                <input type="text" className="bg-neutral-50 w-full p-2 rounded shadow-md" placeholder="Name"
                                    value={pseudo} onChange={(e) => setPseudo(e.target.value)} />
                            </div>
                        </div>
                        <div className="flex flex-col mb-2 w-full justify-start gap-1">
                            <label className="text-sm text-neutral-700 font-semibold">Email</label>
                            <div className="controls">
                                <input type="text" className="bg-neutral-50 w-full p-2 rounded shadow-md" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className="flex flex-col mb-2 w-full justify-start gap-1">
                            <label className="text-sm text-neutral-700 font-semibold">Mot de passe</label>
                            <div className="controls">
                                <input type="password" className="bg-neutral-50 w-full p-2 rounded shadow-md" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="flex flex-col mb-2 w-full justify-start gap-1">
                            <label className="text-sm text-neutral-700 font-semibold">Confirmer mot de passe</label>
                            <div className="controls">
                                <input type="password" className="bg-neutral-50 w-full p-2 rounded shadow-md" placeholder="******" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="flex flex-col mb-2 w-full justify-start gap-1">
                            <button className="h-10 px-5 w-full text-neutral-100 font-semibold bg-primary-green rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-neutral-100 hover:text-primary-green">Inscription</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Register;