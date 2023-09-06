import { useEffect, useState } from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import Cookies from 'js-cookie';

const UserDashboard = () => {
  const [userInfo, setUserInfo] = useState({});
  const [userGames, setUserGames] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const decodedToken = jwt_decode(token);
      setUser({ ...user, role: decodedToken.role });
    }
  }, []);

  useEffect(() => {
    // Récupérez les informations de l'utilisateur
    axios.get('/user-info') // Assurez-vous que l'URL correspond à votre backend
      .then((response) => {
        setUserInfo(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des informations utilisateur :', error);
      });

    // Récupérez les jeux proposés par l'utilisateur
    axios.get('/user-games') // Assurez-vous que l'URL correspond à votre backend
      .then((response) => {
        setUserGames(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des jeux de l\'utilisateur :', error);
      });
  }, []);

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
        <ul>
          {userGames.map((game) => (
            <li key={game.id}>{game.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserDashboard;