import { useEffect, useState } from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import Cookies from 'js-cookie';

const AdminDashboard = () => {
    const [userInfo, setUserInfo] = useState({});
    // const [userGames, setUserGames] = useState([]);
    const [user, setUser] = useState({});

    useEffect(() => {
        // Récupérez le token depuis les cookies
        const token = Cookies.get('token');

        console.log('token', token);
        if (token) {
            const decodedToken = jwt_decode(token);
            setUser({ ...user, role: decodedToken.role });

            // Maintenant que vous avez le token, vous pouvez l'utiliser pour la requête Axios vers /dashboard
            axios.get('http://localhost:5000/dashboard', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }) // Assurez-vous que l'URL correspond à votre backend
                .then((response) => {
                    setUserInfo(response.data);
                })
                .catch((error) => {
                    console.error('Erreur lors de la récupération des informations utilisateur :', error);
                });
        }
    }, []); // Assurez-vous que la dépendance est un tableau vide pour s'exécuter une seule fois au chargement de la page


    // Récupérez les jeux proposés par l'utilisateur
    // axios.get('/dashboard/user-games') // Assurez-vous que l'URL correspond à votre backend
    //   .then((response) => {
    //     setUserGames(response.data);
    //   })
    //   .catch((error) => {
    //     console.error('Erreur lors de la récupération des jeux de l\'utilisateur :', error);
    //   });
// }, []);

return (
    <div>
        <h2>Tableau de bord de l'utilisateur</h2>
        <div>
            <h3>Informations personnelles :</h3>
            <p>Nom : {userInfo.lastName}</p>
            <p>Prénom : {userInfo.firstName}</p>
            <p>Mail : {userInfo.email}</p>
            <p>Pseudo : {userInfo.username}</p>
            <p>Rôle : {userInfo.role}</p>
        </div>
        <div>
            <h3>Fiches de jeux proposées :</h3>
            {/* <ul>
                {userGames.map((game) => (
                    <li key={game.id}>{game.title}</li>
                ))}
            </ul> */}
        </div>
    </div>
);
};

export default AdminDashboard;