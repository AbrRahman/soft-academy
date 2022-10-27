import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { AuthContext } from './context/AuthProvider/AuthProvider';
import { router } from './router/router/Router';

function App() {
  const { lightMode } = useContext(AuthContext)
  return (
    <div className={lightMode ? '' : `bg-dark text-white`}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
