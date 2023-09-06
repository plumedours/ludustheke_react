// import { useContext } from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { UserContext } from '../context/UserContext';

// const AdminRoute = ({ element, path, requiredRole }) => {
//   const { user } = useContext(UserContext);

//   // Vérification si l'utilisateur est authentifié et a le rôle requis
//   if (!user || (requiredRole && user.role !== requiredRole)) {
//     return <Navigate to="/contact" />;
//   }

//   return <Route path={path} element={element} />;
// };

// export default AdminRoute;