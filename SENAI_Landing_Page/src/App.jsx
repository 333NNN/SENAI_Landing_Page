import "./App.css";
import Container from "react-bootstrap/Container";
import React from "react";
import BarraNav from "./components/BarraNav";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "./contexts/UserContext";

function App() {
  return (
    <React.StrictMode>
      <AuthProvider>
        <div className="App">
          <BarraNav />
          <Container>
            <Outlet />
          </Container>
        </div>
      </AuthProvider>
    </React.StrictMode>
  );
}

export default App;
