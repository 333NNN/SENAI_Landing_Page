const url = import.meta.env.VITE_API_URL;

import { useState, useEffect, useContext } from "react";

// import { AuthContext } from "../contexts/UserContext";

export function useListaCursos() {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const req = await fetch(`${url}/cursos`);
        const data = await req.json();

        console.log(cursos);
        if (Array.isArray(data)) {
          setCursos(data);
        } else {
          console.warn("Resposta inesperada:", data);
          setCursos([]);
        }
      } catch (erro) {
        console.log(erro.message);
        setCursos([]);
      }
    }
    fetchData();
  }, []);

  return cursos;
}
