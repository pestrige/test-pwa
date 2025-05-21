import { AppRouter } from './router/AppRouter.tsx';
import { UserProvider } from '../entities/user';
import './styles/index.css';
import './styles/color.css';

function App() {
  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  );
}

export default App;
