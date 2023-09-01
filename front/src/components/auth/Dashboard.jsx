// import { useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useUser } from '../../context/UserContext';

// const Dashboard = () => {
//   const { user, setUser } = useUser();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/user', {
//           withCredentials: true,
//         });
//         setUser(response.data);
//       } catch (error) {
//         if (error.response) {
//           navigate('/');
//         }
//       }
//     };

//     fetchUser();
//   }, [navigate, setUser]);

//   if (!user) {
//     return <div>Chargement en cours...</div>;
//   }

//   return (
//     <div className="container mt-5">
//       <h1>Welcome Back: {user.name}</h1>
//       {/* Affichez d'autres informations de l'utilisateur ici */}
//     </div>
//   );
// };

// export default Dashboard;