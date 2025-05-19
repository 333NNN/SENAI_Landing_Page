const url = import.meta.env.VITE_API_URL;

import { useState, useEffect, useContext } from "react";

import { AuthContext } from "../contexts/UserContext";

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

export function useVerificaLogin() {
  const [usuarios, setUsuarios] = useState([]);

  const { login } = useContext(AuthContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const req = await fetch(`${url}/usuarios`);
        const users = await req.json();
        setUsuarios(users);
      } catch (erro) {
        console.log(erro.message);
      }
    }
    fetchData();
  }, []);

  const verificaLogin = (data) => {
    const userToFind = usuarios.find((user) => {
      return user.email === data.email;
    });

    if (userToFind != undefined && userToFind.senha == data.senha) {
      login(userToFind);
      console.log("Usuário logado", userToFind.nome);
      return "Login efetuado com sucesso";
    } else {
      return "Usuário ou senha inválidos";
    }
  };
  return { verificaLogin };
}

export function useCadastrarUsuario() {
  const cadastrarUsuario = async (data) => {
    const request = await fetch(`${url}/usuarios`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await request.json();
    console.log("Usuário cadastrado: ", response);
    return response;
  };
  return { cadastrarUsuario };
}
