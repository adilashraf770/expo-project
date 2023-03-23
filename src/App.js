import "./App.scss";

// Bootstrap js
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import { Routes } from 'react-router-dom';
import Routes from "./pages/Routes";
import UserCotextProvider from "./context/UserCotext";
import CountContextProvider from "./context/CountContext";
import AuthContextProvider from "./context/AuthContext";

// Componants
// import Header from './componants/Header';
// import Footer from './componants/Footer';

// // Pages
// import Home from './pages/Home';
// import Login from './pages/Login';

function App() {
  return (
    <AuthContextProvider>
      <UserCotextProvider>
        <CountContextProvider>
          <Routes />
        </CountContextProvider>
      </UserCotextProvider>
    </AuthContextProvider>

  );
}

export default App;
