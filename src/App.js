import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import "./style.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import ForgotPass from "./pages/ForgotPass";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/landing" />;
    }

    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="reset" element={<ForgotPass />} />
          <Route path="register" element={<Register />} />
          <Route path="landing" element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
