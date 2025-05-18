import "./App.css";
import Container from "react-bootstrap/Container";
import React from "react";
import BarraNav from "./components/BarraNav";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "./contexts/UserContext";
import Footer from "./components/Footer";

function App() {
  return (
    <React.StrictMode>
      <AuthProvider>
        <div className="App">
          <BarraNav />
          <Container>
            <Outlet />
          </Container>
          <Footer />
        </div>
      </AuthProvider>
    </React.StrictMode>
  );
}

export default App;
