import { useDarkMode } from "../commons/DarkModeContext";

const ContactForm = () => {

    const { darkMode } = useDarkMode();

    return (
        <div className={`flex flex-col justify-center rounded`}>
            <div className={`p-3 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                <h1 className="text-3xl font-semibold text-center">
                    Nous contacter
                </h1>
                <form className="flex flex-col mt-6">
                    <div className="flex flex-row mb-2 mx-auto w-full md:w-9/12 justify-start gap-5">
                        <div className="flex flex-col mb-2 mx-auto w-9/12 justify-start">
                            <label>
                                <span className="">Votre nom</span>
                                <input id="lastname" type="text" name="lastname" className={`w-full px-3 py-2 mt-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-primary-green ${darkMode ? 'bg-neutral-700 shadow-neutral-600 border-neutral-800 text-neutral-300' : 'bg-neutral-50 border-neutral-300'}`} placeholder="Doe" required />
                            </label>
                        </div>
                        <div className="flex flex-col mb-2 mx-auto w-full md:w-9/12 justify-start">
                            <label>
                                <span className="">Votre prénom</span>
                                <input id="firstname" type="text" name="firstname" className={`w-full px-3 py-2 mt-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-primary-green ${darkMode ? 'bg-neutral-700 shadow-neutral-600 border-neutral-800 text-neutral-300' : 'bg-neutral-50 border-neutral-300'}`} placeholder="John" required />
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col mb-2 mx-auto w-full md:w-9/12 justify-start">
                        <label>
                            <span className="">Adresse email</span>
                            <input id="email" name="email" type="email" className={`w-full px-3 py-2 mt-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-primary-green ${darkMode ? 'bg-neutral-700 shadow-neutral-600 border-neutral-800 text-neutral-300' : 'bg-neutral-50 border-neutral-300'}`} placeholder="john.doe@example.com" required />
                        </label>
                    </div>
                    <div className="flex flex-col mb-2 mx-auto w-full md:w-9/12 justify-start">
                        <label>
                            <span className="">Message</span>
                            <textarea id="message" name="message" className={`w-full px-3 py-2 mt-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-primary-green ${darkMode ? 'bg-neutral-700 shadow-neutral-600 border-neutral-800 text-neutral-300' : 'bg-neutral-50 border-neutral-300'}`} rows="5" required></textarea>
                        </label>
                    </div>

                    <div className="mb-6 mx-auto w-full md:w-9/12 justify-start">
                        <button type="submit" className="h-10 px-5 w-full text-neutral-100 font-semibold bg-primary-green rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-neutral-100 hover:text-primary-green">
                            Envoyer
                        </button>
                    </div>
                    <div></div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;