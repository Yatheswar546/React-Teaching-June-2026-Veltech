import './App.css'
import { Routes, Route } from 'react-router-dom';

// import Navbar from './classes/03. React-Routing/Navbar'
// import Home from './classes/03. React-Routing/pages/Home'
// import About from './classes/03. React-Routing/pages/About'
// import Services from './classes/03. React-Routing/pages/Services'
// import Gallery from './classes/03. React-Routing/pages/Gallery'

// import GoToCart from './classes/03. React-Routing/CartExample/GoToCart';
// import Cart from './classes/03. React-Routing/CartExample/Cart';

// import Login from './classes/03. React-Routing/FormSubmission/Login';
// import Dashboard from './classes/03. React-Routing/FormSubmission/Dashboard';

import Login from './classes/03. React-Routing/ProtectedRoute/pages/Login';
import Dashboard from './classes/03. React-Routing/ProtectedRoute/pages/Dashboard';
import ProtectedRoute from './classes/03. React-Routing/ProtectedRoute/ProtectedRoute';


function App() {

  return (
    <>
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Login />} />
        
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 

        />
      
      </Routes>

    </>
  )

}

export default App
