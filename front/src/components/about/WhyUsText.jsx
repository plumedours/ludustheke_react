import Icons from "../commons/Icons";

function WhyUsText() {
    return (
        <div className="flex flex-col gap-2 pt-2">
            <div className="flex flex-row">
                <div className="flex justify-center">
                    <Icons src="#icon-game" alt="Icon Placeholder" className="w-12 h-12 justify-center text-primary-green" />
                </div>
                <p className="ml-3">Large sélection de jeux : Une variété de jeux de société et de jeux vidéo pour tous les goûts.</p>
            </div>
            <div className="flex flex-row">
                <div className="flex justify-center">
                    <Icons src="#icon-community" alt="Icon Placeholder" className="w-12 h-12 justify-center text-primary-green" />
                </div>
                <p className="ml-3">Communauté engagée : Connectez-vous avec des joueurs passionnés et partagez votre amour du jeu.</p>
            </div>
            <div className="flex flex-row">
                <div className="flex justify-center">
                    <Icons src="#icon-friendly" alt="Icon Placeholder" className="w-12 h-12 justify-center text-primary-green" />
                </div>
                <p className="ml-3">Interface conviviale : Une expérience utilisateur fluide et intuitive pour ajouter, noter et commenter les jeux facilement.</p>
            </div>
            <div className="flex flex-row">
                <div className="flex justify-center">
                    <Icons src="#icon-text" alt="Icon Placeholder" className="w-12 h-12 justify-center text-primary-green" />
                </div>
                <p className="ml-3">Contenu informatif : Des descriptions détaillées, des critiques objectives et des classements pour des choix éclairés.</p>
            </div>
            <p>Rejoignez notre ludothèque en ligne dès maintenant pour profiter d’une sélection variée, d’une communauté engagée, d’une interface conviviale et d’un contenu informatif de qualité.</p>
        </div>

    );
}

export default WhyUsText;