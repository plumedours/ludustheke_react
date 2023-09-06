import { useUser } from '../../context/UserContext';
import AdminDashboard from './AdminDashboard';
import EditorDashboard from './EditorDashboard';
import UserDashboard from './UserDashboard';

const DashboardPage = () => {
  const { user } = useUser();

  let dashboardContent;

  switch (user.role) {
    case 'admin':
      dashboardContent = <AdminDashboard />;
      break;
    case 'editor':
      dashboardContent = <EditorDashboard />;
      break;
    case 'user':
      dashboardContent = <UserDashboard />;
      break;
    default:
      dashboardContent = <div>Tableau de bord par défaut pour les utilisateurs non reconnus</div>;
  }

  return (
    <div>
      <h1>Tableau de bord</h1>
      {dashboardContent}
    </div>
  );
};

export default DashboardPage;
